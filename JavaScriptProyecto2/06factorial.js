//fecha y hora:15/04/2024 -5:56 pm 
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

//hase el factorial de un numero 
const prompt = require('prompt-sync')();

function factorial(n) {
    // Verificar si el número es negativo
    if (n < 0) {
      return "El factorial no está definido para números negativos.";
    }
  
    // Inicializar el resultado como 1
    let resultado = 1;
  
    // Calcular el factorial
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  // Pedir al usuario que ingrese un número
  let numero = parseInt(prompt("Ingresa un número entero positivo para calcular su factorial:"));
  
  // Calcular y mostrar el factorial
  if (!isNaN(numero) && numero >= 0) {
    let resultadoFactorial = factorial(numero);
    console.log(`El factorial de ${numero} es ${resultadoFactorial}`);
  } else {
    console.log("Ingresa un número entero positivo válido.");
  }
  