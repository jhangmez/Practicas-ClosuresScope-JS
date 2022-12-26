//Function Scope
/*
El alcance que tendrán las variables declaradas dentro de una función vivirán solo ahí. 
Por lo que si queremos llamarlas por fuera de la función nos indicará como variable no definida
*/

function greeting(){
    let userName = 'Ana';
    console.log(userName);

    if(userName === 'Ana'){
        console.log(`Hello ${userName}!`)
    }
}
greeting();