//Practicando Closures
/*
¡Adiós al var!
.
Con esta técnica de Closures ya nos podemos evitar totalmente el uso de la palabra reservada var, ya no necesitamos una variable que sea global para almacenar un valor que vamos a usar/modificar dentro de alguna función o bloque, ahora podemos manejar y controlar una variable que solo existe dentro de la función que la va a modificar, limitando su alcance podemos evadir errores lógicos ya que si en otra función tenemos una variable con el mismo nombre, no afectará nuestra lógica y no nos dará resultados inesperados, porque literalmente será otra variable, independiente de la que creamos en nuestra primera función. 😌
.
¿Y qué pasa si yo creo una variable dentro de una función y también la quiero usar en otra función? 😰
Tranqui… existe la palabra reservada return que nos ayudará a extraer el valor de nuestra variable y colocarla en otro contexto o alcance.
.
Con cada clase, Oscar nos va mostrando la manera correcta de programar para no caer en malas prácticas. 👨🏽‍🏫
*/
function greeting(){
    let userName = 'Jhan';

    function displayUserName(){
        return `Hola ${userName}`;
    }
    return displayUserName;
}
const g = greeting();
console.log(g);
console.log(g());