//PASAR DE STRING A NUMBER UN VALOR EN TYPEOF:
let variable= Number;
variable= parseInt(prompt("Edad"));
typeof variable;

//tambien se puede:
let variable= prompt("Edad");
typeof variable;
variable = parseInt(variable);
typeof variable;






//Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par o impar.
//ACOMODARLO

let value = prompt("Ingresa un numero");
var aux = value%2;
if (Number.isInteger(aux)) {
    if (aux == 0) {
        alert("SI ES PAR")
    }
    else{
        alert("NO ES PAR")
    }
}
    else
    {
        alert("INTRODUZCA UN VALOR NUMERICO")
    }





    
//Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar y mostrar en un mensaje la cantidad de sabores disponibles según la opción elegida. Opciones: 1/4kg: 2 sabores. 1/2kg: 3 sabores. 3/4kg: 4 sabores. 1kg: 5 sabores.
let name = prompt ("HOLA AMANTE DEL HELADO! INGRESA TU NOMBRE");
let kilos= prompt ("HOLA " + name + "¿Cuantos Kg de helado deseas: 250gr | 500gr | 750gr | 1000gr ?");
if (kilos === "250gr"){
    alert("Puedes elegir dos sabores");
}
else if (kilos === "500gr") {
    alert("Puedes elegir 3 sabores");
}
else if (kilos === "750gr")
{
    alert("Puedes elegir 4 sabores");
}
else if (kilos === "1000gr"){
    alert("Puedes elegir 5 sabores");
}
else {
    prompt("INCORRECTO, ELIGE UNA OPCION VALIDA POR FAVOR: 250gr, 500gr, 750gr o 1000gr")
}






//Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.
let mes = prompt("Ingresa un mes");
if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre") 
{ alert ("Este mes tiene 31 dias, es decir, será super largo")} 
else if (mes === "febrero")
 {alert ("Este mes tiene 28 días al menos que sea año bisiesto, y es el mes del amor")} 
 else if (mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "noviembre") 
 { alert("Este mes tiene 30 dias wiiii") } 
 else 
  {alert ("VALOR INCORRECTO")}
