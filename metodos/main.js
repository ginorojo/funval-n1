//convertir a mayusculas
let palabras = ["hola", "bye", "marco","polo","escuela"]

let mayusculas=palabras.map(may => may.toUpperCase());
console.log(mayusculas)


//solo contener edades
let objs = [
    { nombre: "Daniel", edad: 24 },
    { nombre: "Miguel", edad: 22 },
    { nombre: "Gustavo", edad: 23 },
    { nombre: "Domingo", edad: 20 },
  ];

let edades=objs.map(x => x.edad );

console.log(edades);

let objs2 = [
    { nombre: "Daniel", puntos: 74 },
    { nombre: "Miguel", puntos: 22 },
    { nombre: "Gustavo", puntos: 23 },
    { nombre: "Domingo", puntos: 80 },
  ];

let masCincuenta= objs2.map((objs) => {
    return{
        nombre:objs.nombre,
        puntos:objs.puntos > 50 ? objs.puntos + 10 : objs.puntos,
    };
});

console.log(masCincuenta)
