// let nombres = ["kevin", "pedro" , "juan" , "cristian"]

// let listado = document.querySelector("#lista");

// listado.innerHTML= ""

// nombres.forEach((item) =>{
//     listado.innerHTML += `
//     <li>
//     ${item}
//        <button class="aprobado">X</button>
//     </li>
// `
// })

// listado.addEventListener("click", function (evento){
//     console.log(evento.target);
//     if(evento.target.classList.contains("aprobado")){
//         let itemListado = evento.target.closest("li");
//         itemListado.innerHTML ="ESTUDIANTE APROBADO";
//     }
// });


// let estudiante = [
//     {
//         name:"cristian",
//         cel: 77207634,
//         pais:"bolivia"
//     },
//     {
//         name:"tomas",
//         cel: 77207634,
//         pais:"argentina"
//     },
//     {
//         name:"gino",
//         cel: 77207634,
//         pais:"chile"
//     },
//     {
//         name:"kevin",
//         cel: 77207634,
//         pais:"mexico"
//     },
//     {
//         name:"milton",
//         cel: 77207634,
//         pais:"uruguay"
//     },
// ]

// tablaNombres=document.querySelector(".tabla")

// tablaNombres.innerHTML=""

// for (let index = 0; index < estudiante.length; index++) {
//     tablaNombres.innerHTML += `
//     |       <tr>
//                 <th>${estudiante[index].name}</th>
//                 <th>${estudiante[index].cel}</th>
//                 <th>${estudiante[index].pais}</th>
//                 <td><button class="eliminacion">eliminar</button></td>          
//             </tr>
        

// `
    
// }

// tablaNombres.addEventListener("click", function(evento){
//     if(evento.target.classList.contains("eliminacion")){
//         let caja = evento.target.closest("tr");
//         caja.innerHTML="";
//     }
//     });



// //desestructuracion de array
// let edades =[18,22,34,51,12,37,88];
// let[segundo, tercero,cuarto ,quinto,sexto, septimo]=edades

// console.log(primero);
// console.log(segundo);
// console.log(tercero);
// console.log(cuarto);
// console.log(quinto);
// console.log(sexto);
// console.log(septimo);

// //destructuracion de objetos

// let persona ={
//     nombre:"tomas",
//     edad:20,
//     pais:"argentina"
// };

// let {edad,nombre,correo = "tomas@gmail.com",nombre:name}=persona;

// console.log(persona)
// console.log(edad)
// console.log(correo)


// //progagacion de arrays
// let numeros=[1,2,3,4,5,6];
// let numeritos=[11,12,13,44]
// let resultado=[...numeros, 232,777,00]


// //propagacion de objetos

// let estudiante={
//     nombre:"kevin",
//     edad=22
// }
// let superestudiante={
//     nombre:"kevin",
//     edad=22
// }
// let fusion={
//     ...estudiante,
//     ...superestudiante,
//     correo:"ricargo@gmail.com"
// };

// console.log(fusion);
const usuarios = [
    { id: 1, nombre: "Ana", roles: ["admin"] },
    { id: 2, nombre: "Gino", roles: ["user"] },
    { id: 3, nombre: "Cristian", roles: ["admin", "user"] },
  ];

//filtarr usuarios de tipo administrador
//guardarlo en otro array
// a cada obejeto le agreguen una llave que se llama
//correo nombre NOMBRE@GMAIL.COM
//MOSTRAR EL PRIMER ELEMENTO LAS LLAVES COREO Y NOMBRE
//USANDO DESESTRUCTURACION DE ARRAYS Y OBJETOS
//DENTRO DE UNAA FUNCION QUE RECIBA ARAY USUARIOS.

// function arrayUsuarios(usuarios) {
    
//     const admins = usuarios.filter(usuario =>
//         usuario.roles.includes("admin")
//       );
//       console.log(admins)
    
// }
// arrayUsuarios(usuarios)

// const nombres = ["Ana", "Luis", "Pedro", "Lucas", "Alma", "Lía"];

// const resultado = nombres
// .filter(nombre => nombre.startsWith("L"))
// .map(nombre => nombre.toUpperCase() )

// console.log(resultado);


// const numeros = [123, 45, 156, 89, 178, 34, 199];

// numerosNuevos= numeros
// .filter(numero => numero.toString().startsWith(1))
// .map(numero=> numero*2)

// console.log(numerosNuevos);



// const numeros = [123, 45, 156, 89, 178, 534, 199];

// numerosNuevos= numeros
// .filter(numero=>numero.toString().includes("5"))
// .map(numero=> numero + 10)

// console.log(numerosNuevos);


// const personas = [
//     { nombre: "Ana", edad: 22 },
//     { nombre: "Luis", edad: 35 },
//     { nombre: "Pedro", edad: 18 },
//     { nombre: "Laura", edad: 28 },
//     { nombre: "Carlos", edad: 41 },
//   ];

// let nuevaLista = personas
// .filter(persona=> persona.edad>=30)
// .map(persona => persona.nombre)

// console.log(nuevaLista)