//para después
let boton = document.getElementById("cambiarTema");

boton.addEventListener("click", function(){
    if(localStorage.getItem("tema") == "oscuro"){
        modoClaro()
    } else {
        cambiarTema()
    }
})

document.addEventListener("DOMContentLoaded", function(){
    if (localStorage.getItem("tema") == "dark"){
        cambiarTema(bg-dark, bg-light)
    } else {
        cambiarTema(bg-light, bg-dark)
    }
})

function cambiarTema(anterior, nuevo){
    let cambio = document.getElementsByClassName(anterior)
    cambio[0].removeAttribute("class", anterior)
    cambio[0].setAttribute("class", nuevo)
}