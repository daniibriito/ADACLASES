
// 06
/**
 * Mostrar en consola los números de 10 en 10 desde el 0 hasta el 10000 usando for
 */

 for (let i=0; i < 100; i=1+10) {
    console.log(i);
 }

//---------------------------------------------------------------------------------------
// 07
/**
 * Mostrar en consola los números desde el 1000 hasta el 0
 * Cada 10 números, los números se tienen que mostrar con el siguiente formato: **numero**
 
 ejemplo
**1000**
999
998
997
996
995
994
993
992
991
**990**
989
988
987
986
985
984
983
982
981
**980**
979
...
**0**
 
 */

for (let i = 1000; i > 0; i = i - 1) {
    mod = i % 10;
    if (mod === 0) {
        console.log(`**${i}**`);
    } else {
        console.log(i)
    }
}



//---------------------------------------------------------------------------------------
// 05
/**
 * Mostrar en consola el siguiente dibujo utilizando la estructura while, for y do while
 */
/* *
**
***
****
*****
******
*******
********
*********
**********
***********
************
************* */


let dibujo= "*";
for (let i= 0; i<=13; i++){
  console.log(dibujo);
  dibujo = dibujo + "*";
}

let i = 0;
let dibujo = "*";
do {
    console.log(dibujo);
    dibujo = dibujo + "*";
    i++;
} while (i <= 13);


//Mostrar en consola la suma parcial de todos los números impares que van desde 0 hasta 1000 utilizando la estructura while, for y do while.

let suma = 0;
for (i = 0; i < 1000; i++) {
    let mod = i % 2;
    if (mod > 0) {
        suma = suma + i;
        console.log(suma);
    }
}
