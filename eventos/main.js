// //seleccionar elemento por id
// let titulo=document.getElementById("idTitulo")

// //seleccionar elemento por clase
// let miniTitulo=document.getElementsByClassName1("miniTitulo")

// //Mejor selector, extrae el primer elemento de esa etiqueta o clase
// let superTitulo = document.querySelector("miniTitulo")

// //primer paso
// let boton = document.querySelector("#btn");
// let gino = document.querySelector("#gino")

// let contador=0
// boton.addEventListener("click",function(){
//     contador ++;
//     gino.textContent=contador; //text content elimina el conytenido de la etiqueta
// });                            //luego le asignamos el valor nuevo



// //l princesa fiona vive en una etiqueta  cambiar contenido dia y noche
// let botonFiona=document.querySelector("#btnFiona");

// botonFiona.addEventListener("click",function(){
//     botonFiona.textContent =(botonFiona.textContent==="noche") ? "dia" : "noche";
    
// })

// let parrafo= document.querySelectorAll("#parrafo")


// //evento submit

// let formulario= document.querySelector("#elias");

// formulario.addEventListener("submit", function(evento){
//     evento.preventDefault(); //evita recarga automatica de la pagina

//     let formdata1 = new FormData(formulario);

//     if(formdata1.get("nombre")===""){
//         alert("nombre obligatorio")
//     }

//     if(formdata1.get("celular").length !==8){
//         alert("el numero es incorrecto")
//     }

// });

//crear un form que reciba
//1 nombre de usuario
//2 edad validar q tenga mas de 18 años
// pais de oriden y validar que sean  chilenos

// let formularioJuego = document.querySelector(".juego");

// formularioJuego.addEventListener("submit", function(enviar){
//     enviar.preventDefault();

//     let datosFormulario=new FormData(formularioJuego);
//     console.log(datosFormulario.get("nombre"))
//     if (datosFormulario.get("nombre")===""){
//         alert("nombre obligatorio")
//     }
//     if (datosFormulario.get("pais")!=="chile" ){
//         alert("pais incorrecto")
//     }
//     if (datosFormulario.get("edad")<18){
//         alert("edad no permitida")
//     }
//     else{
//         alert("formulario enviado")
//     }


// });

// mouseout= cuando el cursor sale del elemento
// mouseover= cuando esta sobre el elemento

// let botoncito=document.querySelector("#btn");

// botoncito.addEventListener("mouseover", function(evento){
//     botoncito.style.backgroundColor="gray";
// });

// botoncito.addEventListener("mouseout", function(evento){
//     botoncito.style.backgroundColor=""
// })  

// //usar coordenadas

// let caja= document-querySelector("#caja");
// let cordenadas=document.querySelector("#cord");

// caja.addEventListener("mousemove", function (evento){
//     console.log(evento);
//     cordenadas.textContent=`cordenadas: ${evento.clientX},${evento.clientY}`
// })

//fiona en una etiqueta h2 presione el boton de dia y noche
//fiona se transforma en ogro y princesa preo tambn los estilos de etiqueta
//que la contengan

/* <h2 id="textoFiona">princesa fiona</h2>
<button id="fiona">dia</button> */

// textoFiona=document.querySelector("#textoFiona");
// botonFiona=document.querySelector("#fiona");


// botonFiona.addEventListener("click", function(){
//     if (textoFiona.textContent ==="princesa fiona"){
//         textoFiona.textContent="te comistes a la princesa"
//         botonFiona.textContent="noche"
        
//     }
//     else{
//         textoFiona.textContent ="princesa fiona"
//         botonFiona.textContent="dia"
//     }
// })


// keydown y keyup

// let megaimput=document.querySelector("#inputCadena")
// let cuenta = document.querySelector("#supercontador")
// let contador=0;
// megaimput.addEventListener("keyup", function(evento){
//     console.log(evento.target.value);
//     contador= evento.target.value.length;
//     cuenta.textContent = `CONTADOR: ${contador}`;
// });

let inputFilter=document.querySelector("#filtrado")
let peliculasList=document.querySelector("#peliculas")

let movies = [
    "The Shawshank Redemption",
    "Inception",
    "The Godfather",
    "Pulp Fiction",
    "The Dark Knight",
    "Forrest Gump",
    "Fight Club",
    "Interstellar",
    "The Matrix",
    "Gladiator"
]

function mostrarPeliculas(lista) {
    peliculasList.innerHTML=""
    movies.forEach(item => {
        let li= document.createElement("li")
        li.textContent=item
        peliculasList.appendChild(li)
        console.log(item)
    });
    
    
}

mostrarPeliculas(movies)














//crear un imput de filtrado 
//vamos a tener un listado de peliculas dentro de tipos etiquetas de lkstas
//escribir en el input una letra y que se eliminen las peliculas
//que no correspondan a esas letras

