//el programa pedira al usuario 1 medida de un lado
//  del cuadrado y mostrara el resultado por una alerta

//crear variables, pedir los datos con promps y almacenarlos en variables
// y luego hacer la operacion
// al final mostrar con alert el resultado.

// let lado_cuadrado= prompt("dame la medida de un lado del cuadrado");
// lado_cuadrado=parseFloat(lado_cuadrado);
// let area= lado_cuadrado**2;
// mensaje=alert("el area es" + " "+ area);

//ATM
//Este debe tener la posib de hacer las siguientes operac.
//depositar
//retirar
//ver saldo
//pagar servicios(opcional)

// let operacion=prompt("ingrese la operacion que desea realizar: depositar, retirar, ver saldo, pagar servicio ");

// if (operacion === "depositar"){
//     let tercero_personal=prompt("ingrese si deposita a tercero o personal");
//     if (tercero_personal === "tercero"){
//         let numero_cuenta=prompt("ingrese el numero de cuenta");
//         let monto=prompt("ingrese el monto");
//         let omprobante=alert("retire comprobante");        
//     }
//     else if(tercero_personal === "personal"){



//     }



// }


//depositar
//retirar
//ver saldo
//pagar servicios(opcional)


let lenguage=["español", "ingles" ];
let operaciones=["depositar", "retirar", "ver saldo" ,"pagar servicios"];


let bienvenida=prompt("bienvenido, elija el numero de la opcion que desea realizar: 1-depositar , 2-retirar , 3-ver saldo, 4-pagar servicios");

bienvenida=parseInt(bienvenida)-1;

if (bienvenida>=0 && bienvenida <= operaciones.length){
    alert("tu respuesta es "+ operaciones[bienvenida])
}