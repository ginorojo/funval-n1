//uso de calbacks
//los callback permiten que se ejecuten las funciones una vez que termine el timeout

// function despertar(callback) {
//     console.log("Despertando...");
//     setTimeout(() => {
//       console.log("Me desperté");
//       callback();
//     }, 2000);
//   }
//   function desayunar(callback) {
//     console.log("Preparando desayuno...");
//     setTimeout(() => {
//       console.log("Desayuné");
//       callback();
//     }, 2500);
//   }
//   function irAlColegio() {
//     console.log("Caminando al colegio...");
//     setTimeout(() => {
//       console.log("Llegué al colegio");
//     }, 2000);
//   }
//   // Llamada en orden
//   despertar(() => {
//     desayunar(() => {
//       irAlColegio();
//     });
//   });



// //accediendo a una promesa

//   let traerDatos = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         {
//           nombre: "kevin",
//           edad: 28,
//         },
//         {
//           nombre: "ana",
//           edad: 20,
//         },
//         {
//           nombre: "Cristian",
//           edad: 30,
//         },
//       ]);
//     }, 5000); // 2 segundos de retraso
//   });
//   traerDatos.then((item) => {
//     console.log("Datos recibidos:");
//     console.log(item);
//     let objetos = item;
//     objetos.forEach((element) => {
//       console.log(element.nombre);
//     });
//   });



//   function laPromesa() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let peliculasLlegaron = true;
//         if (peliculasLlegaron) {
//           resolve([
//             { nombre: "terminarto", año: 2019 },
//             { nombre: "mi pobre angelito", año: 2004 },
//             { nombre: "roky", año: 1995 },
//             { nombre: "sherk", año: 2002 },
//           ]);
//         } else {
//           reject(
//             "las peliculas no llegaron por que el repartidor es muy flojo :v"
//           );
//         }
//       }, 1000);
//     });
//   }
//   laPromesa()
//     .then((item) => {
//       item.forEach((element) => {
//         console.log(element);
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });


//filtrar los mayores de 18
    // function obtenerUsuarios() {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         const exito = true;
    //         if (exito) {
    //           resolve([
    //             { nombre: "Juan", edad: 25 },
    //             { nombre: "María", edad: 30 },
    //             { nombre: "Pedro", edad: 17 },
    //           ]);
    //         } else {
    //           reject("No se pudieron obtener los usuarios");
    //         }
    //       }, 1500);
    //     });
    //   }
    //   obtenerUsuarios().then((item) => {
    //    let mayores= item.filter((mayor) => mayor.edad > 18)
    //    console.log(mayores)
    //    mayores.forEach(element => {
    //     console.log(element.nombre)
        
    //    });
    //     }).catch((error)=>{
    //         console.log(error)
    //     })


//         function obtenerProductos() {
//             return new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 const exito = true;
//                 if (exito) {
//                   resolve([
//                     { nombre: "Laptop", precio: 1200, stock: 5 },
//                     { nombre: "Celular", precio: 800, stock: 0 },
//                     { nombre: "Monitor", precio: 300, stock: 3 },
//                     { nombre: "Teclado", precio: 50, stock: 10 },
//                   ]);
//                 } else {
//                   reject("Error al obtener los productos del servidor.");
//                 }
//               }, 2000);
//             });
//           }

// // Filtrar los productos que tienen stock mayor que 0.
// // Mostrar el nombre y el precio de esos productos.

// obtenerProductos().then((item)=>{
//    let mayorCero= item.filter((mayor) => mayor.stock > 0)
//    mayorCero.forEach(element => {
//     console.log(element.nombre + ": $" + element.precio)
    
//    });       
//     }
// )


//funciones asinc

////ASYNC
// async function hola() {
//     return "hola amigos";
//   }
  
//   hola().then((mensaje) => {
//     console.log(mensaje);
//   });
  
//   // AWAIT
  
//   async function fetchData() {
//     try {
//       let informacion = await obtenerProductos();
//       console.log(informacion);
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   fetchData();
  





let libros = [
    {
      titulo: "harry potter",
      año: 2002,
      autor: "JK ROWLING",
    },
    {
      titulo: "jesus el cristo",
      año: 1987,
      autor: "Talmage James",
    },
    {
      titulo: "la arrogancia fatal",
      año: 1988,
      autor: "Federick Haiek",
    },
  ];
  function fetchLibros() {
    return new Promise((resolve, reject) => {
      let cumplio = true;
      if (cumplio) {
        setTimeout(() => {
          resolve(libros);
        }, 2000);
      } else {
        reject("los libros no pudieron ser extraidos ");
      }
    });
  }
  //autores que publicaron despues del 2000 usando await y manejo de errores


  async function fetchData() {
    try {
      let libros = await fetchLibros();
      let nuevoLibros=libros.filter((item)=>item.año >2000 )
      nuevoLibros.forEach(element => {
        console.log(element.autor)
        
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchData();



function fetchUsuarios() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            nombre: "Ana",
            edad: 28,
            librosFavoritos: ["1984", "Cien años de soledad"],
            historialCompras: [
              {
                fecha: "2024-02-12",
                libros: ["1984", "Rebelión en la granja"],
              },
              {
                fecha: "2025-01-01",
                libros: ["Cien años de soledad"],
              },
            ],
          },
          {
            id: 2,
            nombre: "Luis",
            edad: 34,
            librosFavoritos: ["La naranja mecánica"],
            historialCompras: [
              {
                fecha: "2023-12-10",
                libros: ["La naranja mecánica", "El extranjero"],
              },
            ],
          },
          {
            id: 3,
            nombre: "Carla",
            edad: 21,
            librosFavoritos: [],
            historialCompras: [],
          },
        ]);
      }, 1000);
    });
  }
  let suma = 0;
  async function clienteFrecuente() {
    try {
      let usuarioCantidad = await fetchUsuarios();
      /// aqui usamos filter para filtrar a los usuarios q tengan un historial de compras mayor o igual a 1
      let frecuentes = usuarioCantidad.filter(
        (usuario) => usuario.historialCompras.length >= 1
      );
      console.log(frecuentes);
      ///aqui filtramos a los clientes  q tengan en su historial de compras mas de un libro comprado
      let superfrecuentes = frecuentes.filter(
        (cliente) => cliente.historialCompras[0].libros.length > 1
      );
      ///AQUI ITERAMOS SOBRE LOS CLIENTES SUPER FRECUENTAS PARA ENCONTRAR LA CANTIDAD DE LIBROS Q COMPRARON Y SUS NOMBRES
      superfrecuentes.forEach((element) => {
        element.historialCompras.forEach((item) => {
          suma = item.libros.length + suma;
        });
        console.log(
          `el usuario de nombre ${element.nombre} a comprado ${suma} cantidad de libros`
        );
        suma = 0;
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  clienteFrecuente();
  /* Mostrar usuarios con más de 1 compra y mostrar la cantidad de libros comprados x ese usuario
      Mostrar todos los libros comprados por un usuario
      Agregar un libro favorito a un usuario si no lo tiene
  */