////  * * 1. Pedir un mes del año por prompt en números   (ej: 12)  Devolver el mes del año en texto (ej: "Diciembre") Hacer 2 veces, una con SWITCH Y otra   con IF-ELSE IF-ELSE


const mes= Number(prompt(`Ingrese un mes mediante un numero`))

    if (mes === 1)  { 
        alert("Enero") 
    } else if (mes === 2)  { 
        alert("Febrero") 
    } else if (mes === 3)  { 
        alert("Marzo") 
    } else if (mes === 4)  { 
        alert("Abril") 
    } else if (mes === 5)  { 
        alert("Mayo") 
    } else if (mes === 6)  { 
        alert("Junio") 
    } else if (mes === 7)  { 
        alert("Julio") 
    } else if (mes === 8)  { 
        alert("Agosto") 
    } else if (mes === 9)  { 
        alert("Septiembre") 
    } else if (mes === 10)  { 
        alert("Octubre") 
    } else if (mes === 11)  { 
        alert("Noviembre") 
    } else if (mes === 12)  { 
        alert("Diciembre") 
    }
else  {
    alert ("INCORRECTO ingrese un numero del 1 al 12") } 

    //////////////////////////////////////////////////////////////////////////////////

    let mes= Number(prompt(`Ingrese un mes mediante un numero`))
    switch (mes) { 
        case 1:
            alert("Enero");
            break;
        case 2:
            alert("Febrero");
            break;
        case 3:
            alert("Marzo");
            break
        case 4: 
            alert("Abril");
            break
        case 5: 
            alert("Mayo");
            break
        case 6:
            alert("Junio");
            break
        case 7: 
            alert("Julio");
            break
        case 8: 
            alert("Agosto");
            break
        case 9: 
            alert("Septiembre");
            break
        case 10: 
            alert("Octubre");
            break
        case 11: 
            alert("Noviembre");
            break
        case 12: 
            alert("Diciembre")
            break
        default: 
            alert("El mes seleccionado no existe");
      
    }
    
    


