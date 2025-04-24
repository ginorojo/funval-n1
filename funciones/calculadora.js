// function calculadora () {
//     alert("bienvenido a la calculadora");
//     function sumar
//     function restar() {
//     function multiplicar() {}
//     function dividir()

// function calculadora(){
//     alert("bienvenido a la calculadora");
//     let continuar = true;
// while(continuar){
//     let op= prompt(`que operacion desea realizar:
//         1-sumar
//         2-restar
//         3-multiplicar
//         4-dividir
//         5-salir
//           `)
//     if (op === "5"){
//         alert("hasta luego")
//         continuar=false
          
//     }else{
//         let num1 =parseFloat(prompt("ingrese el primer numero: "))
//         let num2 =parseFloat(prompt("ingrese el segundo numero: "))


//     switch (op) {
//         case "1":
//             alert("El resultado es "+ sumar(num1 ,num2))           
//             break;
//         case "2":
//             alert("El resultado es "+ restar(num1 ,num2))         
//             break;
//         case "3":
//             alert("El resultado es "+ multiplicar(num1 ,num2))           
//             break;
//         case "4":
//             alert("El resultado es "+ dividir(num1 ,num2))           
//             break;
    
//         default:
//             alert("ingrese una opcion valida");
//     }
//     }

//   }
    

//     function sumar(num1,num2){
//         return num1 + num2

//     }

//     function restar(num1,num2){
//         return num1 - num2

//     } 

//     function multiplicar(num1,num2){
//         return num1 * num2
//     }

//     function dividir(num1,num2){
//         return num1 / num2

//     }
// }


//declarar una funcion dentro de una variable

// const saludo2= function(nombre){
//     alert("hola" + nombre)
// }

// saludo2("diego");




//arrow function

// const sumar= (num1, num2) =>{
//     alert("El resultado es:" + (num1+num2) )
// }
// sumar(1,5)

// primer argunmento define tiro de 2 puntos y segundo tiro de 3 puntos


// const puntos= function(dosPts, tresPts){
//     return dosPts*2 + tresPts*3;

// }
// console.log(points(1,1));
// console.log(points(7,5));
// console.log(points(38,8));


// //problema del granjero

// const legs= function(chickens, cows, pigs){
//     return chickens*2 + cows*4 + pigs*4 ;

// }

// console.log(legs(2,3,5))


//calcular el area de las siguientes formas geometricas
//cuadrado, circulo, rectangulo, trinagulo

function formasGeometricas() {
    alert("Bienvenido al programa de figuras geométricas");

    let continuar = true;

    while (continuar) {
        let figUsuario = prompt(`Elija una figura para calcular el área:
        1 - Cuadrado
        2 - Círculo
        3 - Rectángulo
        4 - Triángulo
        5 - Salir`);

        switch (figUsuario) {
            case "1":
                alert("El área del cuadrado es: " + cuadrado());
                break;
            case "2":
                alert("El área del círculo es: " + circulo());
                break;
            case "3":
                alert("El área del rectángulo es: " + rectangulo());
                break;
            case "4":
                alert("El área del triángulo es: " + triangulo());
                break;
            case "5":
                alert("¡Gracias por usar el programa!");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
        }
    }

    // Funciones internas para calcular áreas
    function cuadrado() {
        let lado = parseFloat(prompt("Ingrese el valor de un lado del cuadrado:"));
        return lado ** 2;
    }

    function circulo() {
        let radio = parseFloat(prompt("Ingrese el valor del radio del círculo:"));
        return 3.14 * (radio ** 2);
    }

    function rectangulo() {
        let largo = parseFloat(prompt("Ingrese el largo del rectángulo:"));
        let alto = parseFloat(prompt("Ingrese la altura del rectángulo:"));
        return largo * alto;
    }

    function triangulo() {
        let base = parseFloat(prompt("Ingrese la base del triángulo:"));
        let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
        return (base * altura) / 2;
    }
}
formasGeometricas();