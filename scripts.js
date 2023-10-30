document.addEventListener("DOMContentLoaded",() => {

    let saldo = 1000;
    const PIN_CORRECTO = 1111;
    let intentosRestantes = 5;


    //Vinculamos html y js
    const btnDepositar = document.getElementById("depositar");
    const btnRetirar = document.getElementById("retirar");
    const btnTransferir = document.getElementById("transferir");
    const btnCambiarPin = document.getElementById("cambiarPin");
    const btnSalir = document.getElementById("salir");
    const mensaje = document.getElementById("mensaje");

    //Hacemos la firma de las funciones
    iniciarSesion();
    function mostrarSaldo(){
        mensaje.innerHTML = `Su saldo actual es de : ${saldo.toFixed(2)}`

    }
    function iniciarSesion(){
        let pin = parseFloat(prompt("Introduzca el pin de su cuenta bancaria"))
        while(pin !== PIN_CORRECTO && intentosRestantes > 1){
            intentosRestantes--;
            alert(`El pin introducido es incorrecto, intentelo de nuevo. ${intentosRestantes} intentos restantes`)
        }if(pin === PIN_CORRECTO){
            alert("El pin introducido es correcto. Bienvenido")
            mostrarSaldo();

        }else{
            window.location.href = "./templates/cajeroBloqueado.html"
        }





    }
    function depositar(){
        const deposito = parseFloat(prompt("Introduzca la cantidad a depositar"))
        if(deposito !== isNan || deposito > 0){
            saldo += deposito
            mostrarSaldo()
         }else{
            alert("Cantidad invalida, compruebelo e intentelo de nuevo")
         }
    }
    function retirar(){
        const retiro = parseFloat(prompt("Introduzca la cantidad a retirar"))
        if(retiro !== isNan || retiro > 0 || retiro < saldo){
            saldo -= retiro;
            mostrarSaldo();
        }else{
            alert("Cantidad invalida, compruebelo e intentelo de nuevo")
        }
    }
    function transferir(){
        const transferencia = parseFloat(prompt("Introduzca la cantidad a transferir"));
        const cuentaDestino = prompt("Introduzca la cuenta a la que transferir");

        if(transferencia !== isNan || transferencia > saldo || transferencia <= 0){
            saldo -= transferencia;
            alert(`Ha transferido ${transferencia}€ a la cuenta ${cuentaDestino}`);
            mostrarSaldo();
        }else{
            alert("Cantidad o cuenta invalidas")
        }

    }
    function cambiarPin(){
        let pin = prompt("Introduzca el nuevo PIN: ")
        if(pin.length === 4 && pin !== isNan){
            PIN_CORRECTO = pin;
        }else{
            alert("Dicho pin no cumple los requisitos")
        }
    }
    function salir(){
        window.location.href = "./templates/salir.html"
    }








})