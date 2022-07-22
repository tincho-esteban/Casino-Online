function btnIniciarSesion() {
    let fondo = document.getElementById("fondo");
    fondo.removeAttribute("class","invisible");
}

function ocultar() {
    let fondo = document.getElementById("fondo");
    fondo.setAttribute("class","invisible");
}

function mostrarInicioSesion() {
    let sesion = document.getElementById('sesion');
    let registro = document.getElementById('registro');
    registro.setAttribute("class", "invisible")
    sesion.removeAttribute("class", "invisible")
}
function mostrarRegistro() {
    let sesion = document.getElementById('sesion');
    let registro = document.getElementById('registro');
    sesion.setAttribute("class", "invisible")
    registro.removeAttribute("class", "invisible")
}

function registro() {

    let usuario = document.getElementById('usuario');
    let email = document.getElementById('email');
    let contraseña = document.getElementById('contraseña');
    let edad = document.getElementById('edad');
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
        localStorage.setItem('edad', edad.value);
        Toastify({
            text: "registro completo",
            duration: 3000,
            style: {
                background: "green"
            }
            }).showToast();
            let fondo = document.getElementById("fondo");
            fondo.setAttribute("class","invisible");
    }

return(false)
}


function inicioSesion() {
    let nombreGuardado = localStorage.getItem('usuario');
    let contraseñaGuardada = localStorage.getItem('contraseña');

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
            fondo.setAttribute("class","invisible");
    } else if (nombreUsuario.value != nombreGuardado){
        Toastify({
            text: "Usuario incorrecto",
            duration: 3000,
            style: {
                background: "red"
            }
            }).showToast();
    } else if (contraseñaUsuario.value != contraseñaGuardada){
        Toastify({
            text: "Contraseña incorrecta",
            duration: 3000,
            style: {
                background: "red"
            }
            }).showToast();
    }
    return(false)
}

