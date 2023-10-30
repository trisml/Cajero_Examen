document.addEventListener("DOMContentLoaded", () => {
  let saldo = 1000;
  let PIN_CORRECTO = "1111";
  let intentosRestantes = 5;

  //Vinculamos html y js
  const btnDepositar = document.getElementById("depositar");
  const btnRetirar = document.getElementById("retirar");
  const btnTransferir = document.getElementById("transferir");
  const btnCambiarPin = document.getElementById("cambiarPin");
  const btnSalir = document.getElementById("salir");
  let historial = document.getElementById("historial");
  let historialDatos = [];
  
    function agregarHistorial(operacion,cantidad){
        historialDatos.push = ({operacion,cantidad})
        actualizarHistorial();
    }
  //Hacemos la firma de las funciones
  function actualizarHistorial(){
    historial.innerHTML = "";
    historialDatos.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = `${item.operacion}: ${item.cantidad}€`;
        historial.appendChild(li);
        agregarHistorial();
    })
}
  
  iniciarSesion();
  function mostrarSaldo() {
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = `Su saldo actual es: ${saldo} €`;
  }

  function iniciarSesion() {
    let pin = prompt("Introduzca el pin de su cuenta bancaria");
    while (pin !== PIN_CORRECTO && intentosRestantes > 1) {
      intentosRestantes--;
      pin = prompt(
        `El pin introducido es incorrecto, intentelo de nuevo. ${intentosRestantes} intentos restantes`
      );
    }
    if (pin === PIN_CORRECTO) {
      alert("El pin introducido es correcto. Bienvenido");
      historialDatos = [];
      mostrarSaldo();
      
    } else {
      window.location.href = "./templates/cajeroBloqueado.html";
    }
  }
  function depositar() {
    let deposito = parseFloat(prompt("Introduzca la cantidad a depositar"));
    if (deposito === isNaN || deposito < 0) {
      alert("Cantidad invalida, compruebelo e intentelo de nuevo");
    } else {
      saldo = saldo + deposito;
      agregarHistorial("Ingreso",deposito);
      mostrarSaldo();
    }
  }
  function retirar(){
    const retiro = parseFloat(prompt("Introduzca la cantidad a retirar"));
        if(retiro !== isNaN || retiro > 0 || retiro < saldo) {
            saldo -= retiro;
            mostrarSaldo();
            agregarHistorial("Retirada",retiro);
    } else {
      alert("Cantidad invalida, compruebelo e intentelo de nuevo");
    }
  }
  
  function transferir() {
    const transferencia = parseFloat(
      prompt("Introduzca la cantidad a transferir")
    );
    const cuentaDestino = prompt("Introduzca la cuenta a la que transferir");
    if (
      transferencia !== isNaN ||
      transferencia > saldo ||
      transferencia <= 0
    ) {
      saldo -= transferencia;
      alert(`Ha transferido ${transferencia}€ a la cuenta ${cuentaDestino}`);
      agregarHistorial("Transferencia",transferencia);
      mostrarSaldo();
    } else {
      alert("Cantidad o cuenta invalidas");
    }
  }
  
    function cambiarPin(){
       let pin = prompt("Introduzca su pin actual")
       if(pin === PIN_CORRECTO){
            let pinNuevo = prompt("Correcto. Ahora introduzca el nuevo: ")
            if(pinNuevo.length === 4 && pinNuevo !== isNaN){
                PIN_CORRECTO = pinNuevo;
                alert("Pin cambiado con exito")
                console.log(PIN_CORRECTO);
            }else{
                pinNuevo = prompt("El pin introducido no es valido, intentelo de nuevo")
            }
       }else{
        pin = prompt("Ese no es tu pin, intentalo de nuevo");
       }
    }
    
  function salir() {
    window.location.href = "./templates/salir.html";
  }
  function operaciones() {
    let continuar = true;
    while (continuar) {
      alert("1.Depositar dinero");
    }
  }

  btnDepositar.addEventListener("click", depositar);
  btnRetirar.addEventListener("click", retirar);
  btnTransferir.addEventListener("click", transferir);
  btnCambiarPin.addEventListener("click", cambiarPin);
  btnSalir.addEventListener("click", salir);
  mostrarSaldo();
});

