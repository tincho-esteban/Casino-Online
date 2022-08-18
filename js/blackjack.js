let canvas = document.getElementById("canvas");
canvas.width = 1220 * 2;
canvas.height = 400 * 2;
canvas.style.width = 1220 + "px";
canvas.style.height = 400 + "px";
let ctx = canvas.getContext("2d");

class carta {
    static x = 50;
    static y = 50;

    constructor(id, valor, valor2, palo) {
        this.img = new Image();
        this.id = id;
        this.valor = valor;
        this.valor2 = valor2;
        this.palo = palo;
    }
}

let cartas = [];
let cartasJugador = [];
let cartasCrupier = [];
let indiceCarta = 0;
let palos = ["S", "H", "D", "C"];
for (i = 0; i < 4; i++) {
    cartas.push(new carta(1, 11, 1, palos[i]));
    for (j = 2; j <= 10; j++) {
        cartas.push(new carta(j, j, j, palos[i]));
    }
    for(j = 11; j <= 13; j++) {
        cartas.push(new carta(j, 10, 10, palos[i]));
    }
}
for (i = 0; i < 500; i++) {
    cartas.splice(Math.random() * 52, 0, cartas[0]);
    cartas.shift();
}

function dibujarCarta(CJ) {
    CJ.img.onload = () => {
        ctx.drawImage(CJ.img, carta.x, carta.y, 239, 335);
        carta.x += 300;
    };
    CJ.img.src = "media/img/cartas/" + CJ.id.toString() + CJ.palo + ".svg";
}

function pedirCarta() {
    if (indiceCarta <= 0) {
        for (i = 0; i < 2; i++) {
            let CJ = cartas[indiceCarta];
            cartasJugador.push(CJ);
            dibujarCarta(CJ);
            indiceCarta++;
        }
        check21()
    } else if (indiceCarta < 8) {
        let CJ = cartas[indiceCarta];
        cartasJugador.push(CJ);
        dibujarCarta(CJ);
        indiceCarta++;
        check21()
    }
}

function check21(){
    let puntosUsuario = 0;
    let puntosUsuario2 = 0;
    let info = document.getElementById("info");
        for (i in cartasJugador) {
            puntosUsuario += cartasJugador[i].valor;
            puntosUsuario2 += cartasJugador[i].valor2;
        }
        info.innerHTML = "Tu puntuación: " + puntosUsuario;
        if (puntosUsuario > 21) {
            info.innerHTML = "Tu puntuación: " + puntosUsuario2;
        }
        if (puntosUsuario > 21 && puntosUsuario2 > 21) {
            document.getElementById("pedir").disabled = true;
            document.getElementById("plantar").disabled = true;
            document.getElementById("reset").style.visibility = "visible";
            info.innerHTML +="<br><b>Te pasaste de 21</b>";
        }
}

// function mostrarPuntos() {
//     let puntosUsuario = 0;
//     for (i in cartasJugador) {
//         puntosUsuario += cartasJugador[i].valor;
//     }
//     info.innerHTML = "Tu puntuación: " + puntosUsuario;
// }

function plantarme() {
    document.getElementById("pedir").disabled = true;
    document.getElementById("plantar").disabled = true;
    document.getElementById("reset").style.visibility = "visible";
    let puntosUsuario = 0;
    let puntosUsuario2 = 0;
    let puntosCrupier = 0;
    let info = document.getElementById("info");
    for (i in cartasJugador) {
        puntosUsuario += cartasJugador[i].valor;
        puntosUsuario2 += cartasJugador[i].valor2;
    }
    while (puntosCrupier < 17) {
        cartasCrupier.push(cartas[indiceCarta]);
        puntosCrupier += cartas[indiceCarta].valor;
        indiceCarta++;
    }
    info.innerHTML = "Tu puntuación: " + puntosUsuario + "<br>Puntuación crupier: " + puntosCrupier;
    if (puntosUsuario > 21) {
        info.innerHTML = "Tu puntuación: " + puntosUsuario2 + "<br>Puntuación crupier: " + puntosCrupier;
    }
    carta.x = 50;
    carta.y = 400;
    for (i in cartasCrupier) {
        dibujarCarta(cartasCrupier[i]);
    }
    if (puntosUsuario > 21 && puntosUsuario2 > 21) {
        info.innerHTML +="<br><b>Te pasaste de 21</b>";
    } else if (puntosCrupier > 21) {
        info.innerHTML +="<br><b>Ganaste!!! El croupier se paso de 21</b>";
    } else if (puntosCrupier >= puntosUsuario && puntosCrupier >= puntosUsuario2) {
        info.innerHTML += "<br><b>Gano el croupier...</b>";
    } else {
        info.innerHTML += "<br><b>Ganaste!!!</b>";
    }
}

function playagain() {
    location.reload(true);
}