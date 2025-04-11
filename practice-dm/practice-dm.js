let dark_mode = document.querySelector("#dark");

dark_mode.addEventListener("click", changeMode);

function changeMode(){
    document.documentElement.classList.toggle("dark")
}