//fecha y hora:15/04/2024 -5:56 pm 
//autores. ing andres mauricio robayo vargas , ing gabriel alejandro betancour rios, ing angie vanessa guazaquillo ospina
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion

//sumar los numero de fibonacci sin propasarse de 100
const prompt = require('prompt-sync')();
let fib1 = 0;
let fib2 = 1;
let fib;

//creamos la funcio para sumar fibinacci
function sumafibonacci(){
    let fibL=[fib1,fib2];
    //el ciclo for comienza en 2 hasta llegar y a sumar los 2 ultimos valores de la seri
    for (let i=2; i <=11;i++){
fib=fib1+fib2
fib1=fib2
fib2=fib
// le ingresamos el valor de fib a la lista fibL
fibL.push(fib)
    }
    // cada valor del ciclo de fibL a fibe
    return fibL;
}
//llamamos la funcion 
const fibe = sumafibonacci()
const suma= fibe.reduce((acomulator, currenValue)=>acomulator+currenValue,0)
console.log('este programa presenta la serie de la suma de los elementos de la suma de fibonacci entre 0 y 100  los numero a sumar son:  '+ fibe+' y su suma es:  '+suma)
