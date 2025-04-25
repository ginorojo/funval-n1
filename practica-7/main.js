const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ];
 
// //EJERCICIO 1 
// productos.forEach(producto => {
//     console.log(`Nombre:${producto.nombre} Precio:${producto.precio}$ `)
// })

// //EJERCICIO2

//  let productosDisponibles = productos.map((producto)=>producto.nombre );
//      console.log(productosDisponibles)

// let disponible= productosDisponibles.includes("Mouse")
// console.log(disponible)


// //EJERCICIO3

// let Descuento= productos.map((producto)=>({
// nombre:producto.nombre,
// Descuento:producto.precio-producto.precio*0.10
//  }));

// console.log(Descuento);

// //EJERCICIO4

// let menor = productos.filter((product)=>product.precio<100);
// console.log(menor);

// //EJERCICIO05

// let dosPrimeros=productos.slice(0,2).forEach(producto => {
// console.log(producto)
// });
    

// //EJERCICIO06
// ordenados=productos.sort((a,b)=>a.precio - b.precio);
// console.log(ordenados);

// //EJERCICIO07
// ordenadosInverso=productos.reverse()
// console.log(ordenadosInverso);

