
//ejercicio para saber si puedo votar

// let fin=true;

// while(fin===true){

//     let mensaje= prompt("escribe tu edad para saber si estas habilitado para votar");
//     edad_usuario=parseInt(mensaje);

//     if(edad_usuario >=18){
//         alert("estas apto para votar");
//         fin=false;
    
//     }else{
//         alert("no estas apto para votar")
//     }
    
// }

//ejercicio para saber si el numero es positivo, neg, cero

// fin=true;
// let contador=0;

// while(fin===true){
//     let mensaje=prompt("escribe un numero para indicar si es negativo, positivo o cero");
//     let numero=parseFloat(mensaje);
//     if(numero < 0){
//         alert("tu numero es negativo");
//         fin=false;
//     }
//     else if(numero===0){
//         alert("tu numero es cero");
//         fin=false;
//     }

//     else if(numero >0){
//         alert("tu numero es positivo");
//         fin = false;

//     }

//     else{
//         alert("ingresa un numero correcto")
//         contador ++;
//         if(contador >=3){
//             alert("intentos superados");
//             alert("pruebe mas tarde");
//             break;
//         }
//     }

// }

//dia de la semana 
//usa switch o if para mostrar que dia es segun el numero de 1-7

// let day=prompt("seleccione un numero del uno al 7: ")

// switch (day) {
//     case "1":
//         alert("escogiste Lunes")
//         break;
//     case "2":
//         alert("escogiste martes")
//         break;
//     case "3":
//         alert("escogiste miercoles")
//         break;
//     case "4":
//         alert("escogiste jueves")
//         break;
//     case "5":
//         alert("escogiste viernes")
//         break;
//     case "6":
//         alert("escogiste sabado")
//         break;
//     case "7":
//         alert("escogiste domingo")
//         break;
//     default:
//         alert("informacion incorrecta");
//         break;
// }

//numero par o impar
//determine si es par o impar

// let mensaje=prompt("escribe un numero para decirte si es par o impar");

// let numero= parseFloat(mensaje);

// if(numero % 2 === 0){
//     alert("el numero es par")
// }
// else{
//     alert("el numero es impar")
// }

//notas escolares
// segun una nota de 0 al 20, muestra:
//0-10: "desaprobado"
//11-13: regular
//14-17: bueno
//18-20:excelente



// while(true){
//     let mensaje=prompt("escribe la nota de 0 a 20 para recibir la calificacion: ");
// let nota= parseFloat(mensaje);

// if(nota >=0 && nota <11 ){
//     alert("desaprobado");
//     break

// }

// else if(nota >= 12 && nota <14){
//     alert("regular");
//     break
// }

// else if(nota >= 15 && nota <18){
//     alert("bueno");
//     break
// }

// else if(nota >= 18 && nota <=20){
//     alert("excelente");
//     break
// }

// else{
//     alert("ingrese una nota valida")

// }


// }


//tabla de multiplicar

// let numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13];
// let mensaje=prompt("dame un numero: ")
// let numero= parseFloat(mensaje);

// for(let num of numeros){
//     let resultado= num * numero
//     console.log(numero +'X'+ num +"="+ resultado )
// }



// alert("Tablas de multiplicar")

// num = parseInt(prompt("Escribe un numero: "));
// for (let index = 1; index < 13; index++) {
// console.log(num + "x" + index + "=" + (num * index))
// }


//sumar los primeros 100 numeros y luego pedir un numero al usuario

// let suma =0;
// let num= parseInt(prompt("ingrese un numero:"))
// for(let index = 0 ; index < num ; index++){
//     suma = suma + index
// }

// console.log(suma);


// funciones

// function sumarDosNumeros(num1 , num2){
//     return num1 + num2;

// }
// console.log(sumarDosNumeros(34, 27));
// console.log(sumarDosNumeros(64, 27));
// console.log(sumarDosNumeros(15, 27));


// function tablaDeMultiplicar(num1, num2) {
//     for (let index = 1; index < num2 + 1; index++) {
//         console.log(num1 + "x" + index + "=" + (num1 * index))
// }
// }
// tablaDeMultiplicar(5,8);
// tablaDeMultiplicar(3,8);
// tablaDeMultiplicar(4,8);

// practica calificada 5

while(true){
    let figura=parseFloat(prompt("Elija el numero de una de las siguientes figuras: 1-Cuadrado, 2- Rectangulo, 3-Triangulo"));


    if (figura === 1){
        while(true){
            let ladoCuadrado=parseFloat(prompt("ingrese el valor de uno de los lados del cuadrado: "));
            if(typeof ladoCuadrado === "number" && !isNaN(ladoCuadrado)){
            alert("El area del cuadrado es:"+ ladoCuadrado**2 )
            break
            }else{
                alert("dato no valido");
        }

        }
        break
    
    }

    else if(figura === 2){
        while(true){
            let base=parseFloat(prompt("ingresa el valor de la base: "));
            let altura=parseFloat(prompt("ingresa el valor de la altura: "));
        
            if(typeof base === "number" && !isNaN(base) && typeof altura === "number" && !isNaN(altura)){
            alert("El area del rectangulo es: "+(base * altura));
            break
            }else{
                alert("datos no validos");
            }
        
        }
        break

    }

    else if(figura ===3){
        while(true){
            let base_triangulo=parseFloat(prompt("ingresa el valor de la base del triangulo: "));
            let altura_triangulo=parseFloat(prompt("ingresa el valor de la altura del triangulo: "));

            if(typeof base_triangulo === "number" && !isNaN(base_triangulo) && typeof altura_triangulo === "number" && !isNaN(altura_triangulo)){
            alert("El area del triangulo es: " + ((base_triangulo*altura_triangulo)/2));
            break
        }else{
            alert("datos no validos");
        }
    }
    break
    }

    else{
        alert("ingrese un numero correcto")
    }
    }