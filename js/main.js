function registro() {

    let usuario = document.getElementById('usuario');
    let email = document.getElementById('email');
    let contraseña = document.getElementById('contraseña');
    let edad = document.getElementById('edad');
    let error1 = document.getElementById('error1');
    let minusculas = /[a-z]/g;
    let mayusculas = /[A-Z]/g;
    let numeros = /[0-9]/g;

    if (usuario.value.length == 0) {
        error1.innerHTML += "error";
    } else if (email.value.length == 0) {
        error1.innerHTML += "error";
    } else if (contraseña.value.length == 0) {
        error1.innerHTML += "error";
    } else if (contraseña.value.length < 8) {
        error1.innerHTML += "error";
    } else if (!contraseña.value.match(minusculas)) {
        error1.innerHTML += "error";
    } else if (!contraseña.value.match(mayusculas)) {
        error1.innerHTML += "error";
    } else if (!contraseña.value.match(numeros)) {
        error1.innerHTML += "error";
    } else {
        localStorage.setItem('usuario', usuario.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('contraseña', contraseña.value);
        localStorage.setItem('edad', edad.value);
        error1.innerHTML += "registro completo";
        error1.setAttribute("class", "verde");
    }
}


function inicioSesion() {
    let nombreGuardado = localStorage.getItem('usuario');
    let emailGuardado = localStorage.getItem('email');
    let contraseñaGuardada = localStorage.getItem('contraseña');

    let nombreUsuario = document.getElementById('nombreUsuario');
    let contraseñaUsuario = document.getElementById('contraseñaUsuario');

    if (nombreUsuario.value == nombreGuardado && contraseñaUsuario.value == contraseñaGuardada) {
        error2.innerHTML += "Inicio de sesión correcto"
        error2.setAttribute("class", "verde");
    } else {
        error2.innerHTML += "error"
    }
}