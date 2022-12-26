//Block Scope
/*
    Las variables var1 y let1 pueden ser usadas en cualquier lugar del código

    Las variables var2 y let2 pueden ser usadas y llamadas SOLO dentro de la función

    Las variables var3 y let3 pueden ser usadas y llamadas SOLO en el bloque if
*/

function fruits(){
    if (true){
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();