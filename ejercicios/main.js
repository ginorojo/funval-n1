// let n=2
// let par= 4
// for (let index = 1; index <=n ; index++) {
// console.log(par);

// par =par + 2
// }

// let numero= 10
// contador=0
// //
// for (let i = 1; i < numero; ) {

//     console.log

    
// }

// let estudiantes = [
//     {
//       nombre: "Cristian",
//       lenguajes: ["HTML", "CSS", "JS"],
//     },
//     {
//       nombre: "Milton",
//       lenguajes: ["HTML", "CSS", "JS", "python", "JAVA", "C++"],
//     },
//     {
//       nombre: "Ana",
//       lenguajes: ["C#", "JAVA", "PYTHON"],
//     },
//   ];


// estudiantes.forEach(element => {
//     console.log(`
//          ${element.nombre} : ${element.lenguajes}`)
    
// });



// for (let i = 0; i < estudiantes.length; i++) {
//     console.log(`
//         ${estudiantes[i].nombre} : ${estudiantes[i].lenguajes}
//          `)
      
// }

// let profesores = [
//     {
//       nombre: "kevin",
//       estudiantes: ["Gino", "ana", "cristian", "ricardo"],
//     },
//     {
//       nombre: "Diego",
//       estudiantes: ["milton", "kevin", "elias", "Luis"],
//     },
//     {
//       nombre: "Jorge",
//       estudiantes: ["tomas", "pedro"],
//     },
//   ];


// function prosor(est){
//     for (let profesor of profesores) {
//         if (profesor.estudiantes.includes(est)){
//             return profesor.nombre
//         }
        
//     }
// }
// console.log(prosor("Gino"))


/*
MAP: TRANSFORMA CADA VALOR Y CREA UN ARRAY NUEVO

FILTER: FILTRA LOS QUE CUMPLEN UNA CONDICION

REDUCE : REDUCE LOS ELEMENTOS A UN SOLO VALOR

*/

// const personas = [
//     { nombre: "Ana", edad: 20 },
//     { nombre: "Luis", edad: 25 },
//     { nombre: "Carlos", edad: 17 },
//     { nombre: "Marta", edad: 30 }
//   ];

/* Obtener un array con solo los nombres?
Filtrar a los mayores de edad (edad >= 18)?
Encontrar a la primera persona mayor de 25 años?
Calcular la edad total de todos?*/


// let nombres=personas.map((persona) =>{
//     return persona.nombre
    
   
    
// })
// console.log(nombres)

// let mayores=personas.filter(persona => {
//     return persona.edad >18
// })

// console.log(mayores)

// let primeraPersona=personas.find(persona =>{
//     return persona.edad >=25
// })
// console.log(primeraPersona)

// array.reduce((acumulador, valorActual) => nuevaAcumulacion, valorInicial)


// localStorage.setItem("evaluacion",70);
// console.log(typeof localStorage.getItem("evalucion"))

// let persona={
//  nombre: "kevin"
// }

// localStorage.setItem("persona" , JSON.stringify(persona));//agrega valores a local storage

// console.log(localStorage.getItem("persona"));//tiene la cualidad de extraer el valor a sociado a la llave que se pasa como parametro

// let obj =JSON.parse(localStorage.getItem("persona"));
// console.log(obj.nombre);


import {hola} from "./funciones"
console.log(hola("milton"))