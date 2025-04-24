let nombre = "Harold";
let edad = 26;

//arrays

let frutas = ["fresa", "mango", "platano", "asd", "piña"];

let arrayRandom = [
  "Diego",
  23,
  -56.5,
  true,
  ["fresa", "mango", "platano", "asd", "piña"],
  {
    nombre: "Diego",
    apellido: "Huarsaya",
    edad: 27,
    estatura: 160,
  },
];

/* console.log(arrayRandom);
arrayRandom.push(12);
arrayRandom[4].push("Pera");
arrayRandom[5].pais = "Perú";
console.log(arrayRandom);
arrayRandom.pop();
console.log(arrayRandom); */
//objetos

let persona = {
  nombre: "Diego",
  apellido: "Huarsaya",
  edad: 27,
  estatura: 160,
  cursos: [
    "Math",
    "Geometry",
    {
      nativo: "English",
      extra: "Alemán",
    },
  ],
};

persona.ciudad = "Arequipa";
console.log(persona.cursos[2].extra);