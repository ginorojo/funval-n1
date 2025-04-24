let saldoTotal=500;
function cuentaBancaria(){
continuar=true;


while(continuar){
    let operacion=parseInt(prompt(`Que operacion desea realizar: 
        1-ingresar dinero
        2-retirar dinero
        3-consultar saldo
        4-salir
        
        `));
        switch (operacion) {
            case 1:
                alert(ingresarDinero());
                
                
                break;
            case 2:
                alert(retirarDinero());
                
                break;
            case 3:
                alert(consultarSaldo());
                
                break;
            case 4:
                alert("gracias, vuelva pronto");
                continuar=false;
                
                
                break;
        
            default:
                alert("opcion no valida intente nuevamente");
                break;
        }
    
}



function ingresarDinero(){
   let montoTransferencia=parseFloat(prompt("ingrese el monto a transferir en dolares: "));
   if (typeof montoTransferencia === "number" && !isNaN(montoTransferencia)){
    saldoTotal+=montoTransferencia
   return "deposito exitoso, su nuevo saldo es: "+"$" +saldoTotal+" dolares";
   }
   else{
    return "ingrese un monto valido";
   }
}

function retirarDinero(){
    let montoRetiro=parseFloat(prompt("ingrese monto de retiro: "));
    if(typeof montoRetiro === "number" && !isNaN(montoRetiro)){
        if(saldoTotal>=montoRetiro){
            return "retiro exitoso su nuevo saldo es: "+"$" +(saldoTotal -= montoRetiro)+" dolares"; 
        }
        else{
            return "Monto retiro mayor a saldo";
        }
    }
    else{
        return "ingrese un monto valido";
    }

    }
   

function consultarSaldo(){
    return "su saldo es: "+"$" + saldoTotal +" dolares" ;
    
}

};cuentaBancaria();