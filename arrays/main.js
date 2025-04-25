// // let nombre = "Harold";
// // let edad = 26;

// // //arrays

// // let frutas = ["fresa", "mango", "platano", "asd", "piña"];

// // let arrayRandom = [
// //   "Diego",
// //   23,
// //   -56.5,
// //   true,
// //   ["fresa", "mango", "platano", "asd", "piña"],
// //   {
// //     nombre: "Diego",
// //     apellido: "Huarsaya",
// //     edad: 27,
// //     estatura: 160,
// //   },
// // ];

// // /* console.log(arrayRandom);
// // arrayRandom.push(12);
// // arrayRandom[4].push("Pera");
// // arrayRandom[5].pais = "Perú";
// // console.log(arrayRandom);
// // arrayRandom.pop();
// // console.log(arrayRandom); */
// // //objetos

// // let persona = {
// //   nombre: "Diego",
// //   apellido: "Huarsaya",
// //   edad: 27,
// //   estatura: 160,
// //   cursos: [
// //     "Math",
// //     "Geometry",
// //     {
// //       nativo: "English",
// //       extra: "Alemán",
// //     },
// //   ],
// // };

// // persona.ciudad = "Arequipa";
// // console.log(persona.cursos[2].extra);


// marcasDeAutos=["BMW", "Toyota" , "Nissan"];
// console.log("la marca del auto es " + marcasDeAutos[1]);

// let edades =[12,23,34,64,45];

// let listas= [
//   ["Daniel", "marcos"],
//   ["miguel","danilo"]

// ]

// console.log(listas[0][1]);


// // objetos

// let Pikachu={
//   nombre:"Pikachu",
//   peso:{
//     unidad:"kg",
//     cantidad:6
//   },
//   ataque:["impactrueno", "cola de acero", 
//     "electrobola", "tacleada de voltios"],
//   tipo:["electrico"],
//   genero:"Masculino",
//   nacionalidad:"Ioto"

// };

// let Charmander={
//   nombre:"Pikachu",
//   peso:{
//     unidad:"kg",
//     cantidad:6
//   },
//   ataque:["impactrueno", "cola de acero", 
//     "electrobola", "tacleada de voltios"],
//   tipo:["electrico"],
//   genero:"Masculino",

// };

// Charmander.nacionalidad=Pikachu,nacionalidad;
// // console.log(Charmander);


// // // metodos

// // function sumar(a,b){
// //   return a + b;
// // }
// // function restar(a,b){
// //   return a + b;
// // }
// // function multiplicacion(a,b){
// //   return a + b;
// // }

// // let funciones= [sumar, restar];
// // console.log(funciones);

// // funciones.unshift(multiplicacion);

// // console.log(funciones);


// // //METODOS BASICOS

// // let personas=["kevin","pedro","luis", "juan"];
// // personas.push("alexis");//agregue al final

// // personas.unshift("cristian","ana");
// // console.log(personas); //agregar al inicio

// // personas.push("ramiro")
// // personas.unshift("lupe", "fernando")

// // //METODOS ELIMINAR ELEMENTOS

// // personas.pop();//elimina el ultimo elemento

// // let ultimo=personas.pop(); //puedo guardar el elemento que se elimino

// // personas.shift(); //elimina el primer elemento
// // console.log(personas);

// // let penultimo= personas.shift();//guardar el elemento eliminado 


// // //METODOS IMPORTANTES


// // let cantidad = personas.length;
// // console.log(cantidad);

// // let elemento=personas[2];
// // console.log(elemento);

// // //acceder al array iterando
// // for(let i=0 ; i<cantidad ; i++){
// //   console.log(personas[i]);
// // }

// // let notas=[100,70,40,,80];

// // let resultados=0
// // let cantidadExamenes = notas.length;
// // for(let index=0 ; index < notas.length; index ++){
// //   resultados = resultados + notas [index];
// // }

// // console.log(resultado/cantidadExamenes);

// //dado un array de numeros devolver otro array con los
// //numero duplicados.

// let numeros=[1,2,3,4];

// for(i=0 ; i<numeros.length ; i++){

//   numeros[i] = numeros[i] *2;

// }

// // console.log(numeros);

// //dado un array de numeros devolver el factorial
// //de cada elemento del array

// let superNumeros=[1,2,3]

// for (let index = 0; index < superNumeros.length ; index++){
//   let res=0
//     for (let j = 1; j <= superNumeros[index]; j++){
//       res = res*j


//     }
//     superNumeros[index] = res;
//     res=1
// }

// console.log(superNumeros)

// let matriz = [
//   [1,2],
//   [3,4]

// ]

// let numero= matriz[2][1]
// console.log(numero);

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; index++) {
//     console.log(matriz[i] [j]);
      
//   }
  
// }


//sumar la diagonal principal debe dar 14
// let matriz=[
//   [1,2,3,4]
//   [3,4,5,6]
//   [6,7,8,9]
// ];

// let resultado =0;

// for(i=0 ; i< matriz.length ; i++){
//   resultado = resultado + matriz [i] [i];
// }

// console.log(resultado);


// USO DE MAP

// let numeros=[2,4,8,10];

// let nuevoArray = numeros.map((numero)=>numero*3);

// let numeros=[2,4,8,10];

// let nuevoArray=numeros.map((numero)=>numero*0.5);

// console.log(nuevoArray);

//USO DE FILTER
// let numeros=[2,4,8,10]

// let nuevoArray = numeros.filter((x)=> x < 9);
// console.log(nuevoArray);

// let numeros=[3,11,15,4,2,17,8,10,22,7];

// let nuevoArray=numeros.filter((x)=> x % 2 === 0);
// console.log(nuevoArray);

//USO DE FIND

// let numeros= [3,11,15,4,2,17,8,10,22,7];
// let nuevoNumero= numeros.find((x) => x >5);

// console.log(nuevoNumero);

// let nombres=["cristian", "ricardo", "ana"];

// let nuevoNombre=nombres.find((x) => x.length >=8);
// console.log(nuevoNombre);

//USO DE SORT

// let nombres=["cristian", "ricardo", "ana"];

// let ordenado = nombres.sort();
// console.log(ordenado);


//USO DE INCLUDES
// let numeros=[2,7,8,23,52,76];
// let valor=numeros.includes(5);

// let apellidos=["perez", "choque"]
// let valor23= apellidos.includes("mamani");
// console.log(valor23);


//objetos

// let estudiante={
//   nombre:"elias",
//   edad:18,
//   nacionalidad:"paraguay",

// };

// console.log(estuadiante.nombre);//se accede con un punto despues de la variable.

// estuadiante.edad=19; //actualizar dato

// estudiante.estadoCivil="soltero"; //agrego llave y dato
// console.log(estuadiante);

// delete estudiante.edad;
// console.log(estudiante);




// let notaaprob=51;

// let estudiante=[{
//   nombre:"elias",
//   edad:18,
//   nacionalidad:"paraguay",
//   notas:[50,40,30,100]

// },
// {
//   nombre:"cristian",
//   edad:18,
//   nacionalidad:"paraguay",
//   notas:[50,40,30,100]
// },
// {
//   nombre:"Gino",
//   edad:18,
//   nacionalidad:"paraguay",
//   notas:[50,40,30,100]
// },

// {
//   nombre:"Gino",
//   edad:18,
//   nacionalidad:"paraguay",
//   notas:[50,40,30,100]
// }

// ];

// let sumar=0
// let fila=1
// let matriz = [
//   [2, 4, 6],
//   [1, 3, 5],
//   [7, 8, 9] 
// ];

// for (i = 0; i< matriz[fila].length; i++) {
//   sumar=sumar+matriz[fila][i]

// }
// let promedio= sumar/matriz[fila].length;
// console.log(promedio);



// let matriz = [
//   [2, 4, 6],
//   [1, 3, 5],
//   [7, 8, 9] 
// ];

// let sumar=0


// for (let i = 0; i < matriz.length; i++) { 
//   for (let j = 0; j < matriz[i].length; j++) {
//     sumar=sumar+matriz[i][j]
        
//   }
  
// }
// let total=sumar
// console.log(total);
let matriz = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]  
];

let suma=0

for (let i = 0; i< matriz.length; i++) {
    suma = suma + matriz[i][matriz.length - 1 - i];
   
  }
 console.log(suma);


 