// Reasignacion y redeclaracion

/*
    Declaración de variables: reservar un espacio en memoria para la variable en si.
    Re-declaración de variables: volver a declarar una variable previamente existente.
    Asignación de variables: darle un valor a dicho espacio de memoria reservado.
    Re-asignación de variables: darle un nuevo valor a una variable.
    var, es posible realizar solo una declaración, el valor de la variable será undefiend pero no arrojará ningún error.
    var, es posible re-declarar y re-asignar valores.
    let, es posible re-asignar pero no re-declarar.
    const es una de las mejores maneras de manipular variables puesto que tiene reglas mas robustas que var y let
    const, no puedes re-asignar ni re-declarar tipos de datos primitivos.
    const, puedes re-asignar arreglos y objetos pero no re-declararlos.
    const, tampoco puedes solo declararla, necesita una asignación.
*/
// var
// Explicacion mia : pues, var viene de variable, su valor puede variar
var firstName; // Undefined
firstName= 'Jhan';
console.log(firstName);

var lastName = "Gemez"; //declarando /asignando
lastName= "Gamez"; //reasignar
console.log(lastName);

var secondName = "David"; //declarando / asignando
var secondName = 'Nana'; //reasignando
console.log(secondName);

//let
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

// let fruit = 'Banana';
// console.log(fruit);

//const
// explicacion mia: constante, por la misma palabra, es algo que no se cambia, seguira siendo lo mismo durante todo el proceso🤪🤪
const animal = 'dog';
animal = 'cvat';
console.log(animal);

//arrays

const vehicles = [];
vehicles.push('🤪🤪');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);