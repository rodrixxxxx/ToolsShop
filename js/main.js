//Estoy investigando como hacer un carrito de compras ya que, mi proyecto es una tienda de herramientas 
//mientras tanto voy haciendo las posibles herramientas de compra.

//----- FUNCTION CALCULADOR DE CUOTAS -----
function calculadorCuotas(){
    let cuotas = prompt("Ingrese la cantidad de cuotas: ");     //INGRESO LA CANTIDAD DE CUOTAS
    let totalCompras = prompt("Ingrese el monto total: ");      //INGRESO EL MONTO TOTAL DE LA COMPRA
    let totalCuota = totalCompras / cuotas;                     //SE DIVIDE EL TOTAL POR LA CANTIDAD DE CUOTAS
    let iva = totalCuota * 1.33;                                //SE CALCULA EL IMPUESTO DIRECTO A LAS CUOTAS
    console.log("El total de la cuota es: " + iva);             //SE IMPRIME EL TOTAL DE LA CUOTA
    acceso = prompt("Si desea ver opciones para verificar su compra ingrese (si) de lo contrario ingrese (no)"); 
}
//----- FUNCTION CALCULADOR DE IVA -----
function calculadorDeIva(){
    let producto = prompt("Ingrese el precio del producto: ");          //INGRESO EL PRECIO DEL PRODUCTO
    let iva = producto * 1.33;                                          //SE CALCULA EL IMPUESTO
    console.log("El precio del producto mas IVA es: " + iva);           //SE IMPRIME EL PRECIO MAS EL IVA
    acceso = prompt("Si desea ver opciones para verificar su compra ingrese (si) de lo contrario ingrese (no)");
}
//----- CICLO PRINCIPAL -----
let acceso = prompt("Si desea ver opciones para verificar su compra ingrese (si) de lo contrario ingrese (no)");   //ACCESO AL CICLO
while (acceso == "si"){      
    let accion = prompt("Si desea calcular las cuotas de su compra total ingrese (1) Si desea saber el IVA que posee un producto en especifico ingrese (2)");
    if (accion == 1) {
        calculadorCuotas();
    }
    if (accion == 2) {
        calculadorDeIva();
    }
}
console.log("Gracias, el servicio finalizó"); //MSG DE FINALIZACIÓN
/*----- COMENTARIOS -----*/

//Hola,necesitaria recomendaciones uwu