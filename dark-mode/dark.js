//crear variable de boton
let buttonDark = document.querySelector("#dark");

// cuando el usuario haga click en el boton activa la clase de abajo

buttonDark.addEventListener("click", switchDarkMode );

function switchDarkMode(){
    //le damos la ubicacion donde se encuentra la clase
    //si encuentra la clase dark, la activa o la quita
    document.documentElement.classList.toggle("dark")
}

