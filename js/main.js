function btnIniciarSesion() {
    if (document.getElementById("spanInicioSesion").innerText[0] = 'Iniciar Sesion') {
        let fondo = document.getElementById("fondo-registro");
        fondo.removeAttribute("class", "invisible");
    } else {
        let span = document.getElementById("spanInicioSesion");
        span.innerHTML = "Iniciar Sesión"
        localStorage.setItem("mantenerSesion", "off")
    }
}

function ocultar() {
    let fondo = document.getElementById("fondo-registro");
    fondo.setAttribute("class", "invisible");
}

function mostrarInicioSesion() {
    let sesion = document.getElementById('sesion');
    let registro = document.getElementById('registro');
    registro.setAttribute("class", "invisible");
    sesion.removeAttribute("class", "invisible");
}

function mostrarRegistro() {
    let sesion = document.getElementById('sesion');
    let registro = document.getElementById('registro');
    sesion.setAttribute("class", "invisible");
    registro.removeAttribute("class", "invisible");
}

function registro() {

    let usuario = document.getElementById('usuario');
    let email = document.getElementById('email');
    let contraseña = document.getElementById('contraseña');
    let minusculas = /[a-z]/g;
    let mayusculas = /[A-Z]/g;
    let numeros = /[0-9]/g;

    if (usuario.value.length == 0) {
        Toastify({
            text: "Introduce un nombre de usuario",
            duration: 3000,
            style: {
                background: "red"
            }
        }).showToast();
    } else if (email.value.length == 0) {
        Toastify({
            text: "Introduce un mail",
            duration: 3000,
            style: {
                background: "red"
            }
        }).showToast();
    } else if (contraseña.value.length == 0) {
        Toastify({
            text: "Introduce una contraseña",
            duration: 3000,
            style: {
                background: "red"
            }
        }).showToast();
    } else if (contraseña.value.length < 8) {
        Toastify({
            text: "la contraseña debe tener al menos 8 caracteres",
            duration: 3000,
            style: {
                background: "red"
            }
        }).showToast();
    } else if (!contraseña.value.match(minusculas)) {
        Toastify({
            text: "la contraseña debe tener al una minúscula",
            duration: 3000,
            style: {
                background: "red"
            }
        }).showToast();
    } else if (!contraseña.value.match(mayusculas)) {
        Toastify({
            text: "la contraseña debe tener al menos una mayúscula",
            duration: 3000,
            style: {
                background: "red"
            }
        }).showToast();
    } else if (!contraseña.value.match(numeros)) {
        Toastify({
            text: "la contraseña debe tener al menos un numero",
            duration: 3000,
            style: {
                background: "red"
            }
        }).showToast();
    } else {
        localStorage.setItem('usuario', usuario.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('contraseña', contraseña.value);
        localStorage.setItem('fichas', 500)
        Toastify({
            text: "registro completo",
            duration: 3000,
            style: {
                background: "green"
            }
        }).showToast();
        let fondo = document.getElementById("fondo");
        fondo.setAttribute("class", "invisible");
    }

    return (false)
}

function inicioSesion() {
    let nombreGuardado = localStorage.getItem('usuario');
    let contraseñaGuardada = localStorage.getItem('contraseña');
    let mantenerSesion = document.getElementById('mantenerSesion');

    let nombreUsuario = document.getElementById('nombreUsuario');
    let contraseñaUsuario = document.getElementById('contraseñaUsuario');

    if (nombreUsuario.value == nombreGuardado && contraseñaUsuario.value == contraseñaGuardada) {
        Toastify({
            text: "Inicio de sesión correcto",
            duration: 3000,
            style: {
                background: "green"
            }
        }).showToast();
        let fondo = document.getElementById("fondo");
        fondo.setAttribute("class", "invisible");
        sesionIniciada()
    } else if (nombreUsuario.value != nombreGuardado) {
        Toastify({
            text: "Usuario incorrecto",
            duration: 3000,
            style: {
                background: "red"
            }
        }).showToast();
    } else if (contraseñaUsuario.value != contraseñaGuardada) {
        Toastify({
            text: "Contraseña incorrecta",
            duration: 3000,
            style: {
                background: "red"
            }
        }).showToast();
    }
    return (false)
}
// function mantenerSesion(){
//     let mantenerSesion = document.getElementById('mantenerSesion');
//     if (mantenerSesion.checked){
//         localStorage.setItem('mantenerSesion',true)
//     }
// }

function sesionIniciada() {
    let usuario = localStorage.getItem('usuario');
    let fichas = localStorage.getItem('fichas');
    let span = document.getElementById("spanInicioSesion");

    span.innerHTML = `
    Bienvenido ${ usuario }!
    tus Fichas: ${ fichas }
    `
}

function usuarios() {
    fetch('js/usuarios.json')
        .then(res => res.json())
        .then(datos => {
            tabla(datos)
        })
}

function tabla(datos) {
    console.log(datos)
    contenido.innerHTML = `
    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
    `
    for (let valor of datos) {
        contenido.innerHTML += `
        <tr>
            <th scope="row">${ valor.id }</th>
            <td>${ valor.usuario }</td>
            <td>${ valor.email }</td>
        </tr>
        `
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("usuario").length > 0 && localStorage.getItem("usuario").length > 0) {
        sesionIniciada();
        document.getElementById("botonIni").disabled = true;
    }
})