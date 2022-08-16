let canvas = document.getElementById("canvas");
canvas.width = 1220 * 2;
canvas.height = 400 * 2;
canvas.style.width = 1220 + "px";
canvas.style.height = 400 + "px";
let ctx = canvas.getContext("2d");

class carta {
    static x = 50;
    static y = 50;

    constructor(valor, palo) {
        this.img = new Image();
        this.valor = valor;
        this.palo = palo;
    }
}

let cartas = [];
let cartasJugador = [];
let cartasCrupier = [];
let indiceCarta = 0;
let palos = ["S", "H", "D", "C"];
for (i = 0; i < 4; i++) {
    for (j = 1; j <= 13; j++) {
        cartas.push(new carta(j, palos[i]));
    }
}
for (i = 0; i < 200; i++) {
    cartas.splice(Math.random() * 52, 0, cartas[0]);
    cartas.shift();
}

function dibujarCarta(CJ) {
    CJ.img.onload = () => {
        ctx.drawImage(CJ.img, carta.x, carta.y, 239, 335);
        carta.x += 300;
    };
    CJ.img.src = "media/img/cartas/" + CJ.valor.toString() + CJ.palo + ".svg";
}

function pedirCarta() {
    if (indiceCarta < 8) {
        let CJ = cartas[indiceCarta];
        cartasJugador.push(CJ);
        dibujarCarta(CJ);
        indiceCarta++;
    }
}

function plantarme() {
    document.getElementById("pedir").disabled = true;
    document.getElementById("plantar").disabled = true;
    document.getElementById("reset").style.visibility = "visible";
    let puntosUsuario = 0;
    let puntosCrupier = 0;
    let info = document.getElementById("info");
    for (i in cartasJugador) {
        puntosUsuario += cartasJugador[i].valor;
    }
    while (puntosCrupier < 17) {
        cartasCrupier.push(cartas[indiceCarta]);
        puntosCrupier += cartas[indiceCarta].valor;
        indiceCarta++;
    }
    info.innerHTML = "Puntuación jugador: " + puntosUsuario + "<br>Puntuación crupier: " + puntosCrupier;
    carta.x = 50;
    carta.y = 400;
    for (i in cartasCrupier) {
        dibujarCarta(cartasCrupier[i]);
    }
    if (puntosUsuario == 21) {
        info.innerHTML +="<br><b>Blackjack!!! Ganaste!</b>";
    } else if (puntosUsuario > 21) {
        info.innerHTML +="<br><b>Te pasaste de puntos</b>";
    } else if (puntosCrupier > 21) {
        info.innerHTML +="<br><b>Ganaste!!! El croupier se paso de puntos</b>";
    } else if (puntosCrupier >= puntosUsuario) {
        info.innerHTML += "<br><b>Gano el croupier...</b>";
    } else {
        info.innerHTML += "<br><b>Ganaste!!!</b>";
    }
}

function playagain() {
    location.reload(true);
}