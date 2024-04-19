/*
autores. ing andres mauricio robayo vargas , ing gabriel alejandro betancur rios, 
ing angie vanessa guazaquillo ospina, ing oscar julian salazar pinzon,
ing daniela panasso hernandez, ing luis panesso hernandez,
ing jordan valencia patiño. ing santiago ordoñez,ing angel henao, ing robert carvajal,
ing michael castro, ing juan esteban ortiz,




*/
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion
// declaramos prompt como costante 

//imprime los numeros de fibonacci sin pasarse de 10000
let fib1 = 0; // Primer número de Fibonacci
    let fib2 = 1; // Segundo número de Fibonacci
    let fib ; // Variable para almacenar el n-ésimo número de Fibonacci
    function fibonacci(){
        let fibseq=[fib1, fib2 ]
for (let i = 2; i <= 20; i++) { //crea un bucle iniciando desde el numero 2 
    fib = fib1 + fib2;
    fib1 = fib2;
    fib2=fib
    fibseq.push(fib)
}
return fibseq;
}
const fibseq=fibonacci()
console.log('Este programa presenta la serie Fibonacci como la serie que comienza con los digitos 1 y 0 y va sumando progresivamente los dos ultimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34....\nPara este programa, se presentará la serie fibonacci hasta llegar sin sobrepasar el numero 10.000\n'+fibseq)