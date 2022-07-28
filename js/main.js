//----VARIABLES----//
let valor1 = 0;
let valor2 = 0;
let valor3 = 0;
let valor4 = 0;
let valor5 = 0;
let valor6 = 0;
let valor7 = 0;
let valor8 = 0;

//----LISTA DE PRODUCTOS----//

function herramientaUno(){
    localStorage.setItem("herramienta1", 500);
    document.getElementById("carrito1").innerHTML = "* Herramienta Uno"; 
    document.getElementById("carritoLogo").innerHTML = "Carrito";
    valor1 = localStorage.getItem("herramienta1");
}
function herramientaDos(){
    localStorage.setItem("herramienta2", 500);
    document.getElementById("carrito2").innerHTML = "* Herramienta Dos"; 
    document.getElementById("carritoLogo").innerHTML = "Carrito";
    valor2 = localStorage.getItem("herramienta2");
}
function herramientaTres(){
    localStorage.setItem("herramienta3", 500);
    document.getElementById("carrito3").innerHTML = "* Herramienta Tres"; 
    document.getElementById("carritoLogo").innerHTML = "Carrito";
    valor3 = localStorage.getItem("herramienta3");
}
function herramientaCuatro(){
    localStorage.setItem("herramienta4", 500);
    document.getElementById("carrito4").innerHTML = "* Herramienta Cuatro"; 
    document.getElementById("carritoLogo").innerHTML = "Carrito";
    valor4 = localStorage.getItem("herramienta4");
}
function herramientaCinco(){
    localStorage.setItem("herramienta5", 500);
    document.getElementById("carrito5").innerHTML = "* Herramienta Cinco"; 
    document.getElementById("carritoLogo").innerHTML = "Carrito";
    valor5 = localStorage.getItem("herramienta5");
}
function herramientaSeis(){
    localStorage.setItem("herramienta6", 500);
    document.getElementById("carrito6").innerHTML = "* Herramienta Seis"; 
    document.getElementById("carritoLogo").innerHTML = "Carrito";
    valor6 = localStorage.getItem("herramienta6");
}
function herramientaSiete(){
    localStorage.setItem("herramienta7", 500);
    document.getElementById("carrito7").innerHTML = "* Herramienta Siete"; 
    document.getElementById("carritoLogo").innerHTML = "Carrito";
    valor7 = localStorage.getItem("herramienta7");
}
function herramientaOcho(){
    localStorage.setItem("herramienta8", 500);
    document.getElementById("carrito8").innerHTML = "* Herramienta Ocho"; 
    document.getElementById("carritoLogo").innerHTML = "Carrito";
    valor8 = localStorage.getItem("herramienta8");
}
/*-----------------------------------------------------------------------------*/
/*--------------------------------CALCULAR TOTAL-------------------------------*/
let total = valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8;


/*-----------------------------------------------------------------------------*/
/*----------------------------------BOTONERA-----------------------------------*/

let boton1 = document.getElementById("herra1");    
boton.addEventListener("click", herramientaUno);    

let boton2 = document.getElementById("herra2");    
boton.addEventListener("click", herramientaDos);    

let boton3 = document.getElementById("herra3");    
boton.addEventListener("click", herramientaTres);    

let boton4 = document.getElementById("herra4");    
boton.addEventListener("click", herramientaCuatro);    

let boton5 = document.getElementById("herra5");    
boton.addEventListener("click", herramientaCinco);    

let boton6 = document.getElementById("herra6");    
boton.addEventListener("click", herramientaSeis);    

let boton7 = document.getElementById("herra7");    
boton.addEventListener("click", herramientaSiete);    

let boton8 = document.getElementById("herra8");    
boton.addEventListener("click", herramientaOcho);    


