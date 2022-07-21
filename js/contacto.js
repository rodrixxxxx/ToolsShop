/*Hice un eventListener para que muestre un mensaje de confirmacion al clickear Enviar*/

let boton = document.getElementById("botonenviar");     //CONECTO LA VARIABLE CON EL ELEMENTO DEL DOM
boton.addEventListener("click", enviarNotificacion);    //CONECTO BOTON CON EL EVENTO Y LA FUNCTION

function enviarNotificacion(){
    document.getElementById("cartelEnviar").innerHTML = "Su consulta fue en viada con exito";  //MODIFICO EL "P" VACIO PARA QUE SE TRANSFORME EN EL MENSAJE
}
