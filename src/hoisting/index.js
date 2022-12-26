// ¿Qué es el Hoisting?
/*
El hosting solo aplica a variables declaradas con var, si intentamos hacer un ejemplo similar con let o const tendremos errores:
*/
// var nameOfDog; // undefined
// // aca arriba crear el nameOfDog, pero sin valor, por ello es que cuando escribimos el console.log nos da vacio
// console.log(nameOfDog);
// var nameOfDog= 'Elmo';


var elmo; // undefined
nameOfDog();
function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';