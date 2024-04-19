
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
//programa de ingenieria en sistemas y computacionconst prompt = require('prompt-sync')();

//este programa invierte un numero 
const prompt = require('prompt-sync')();

let numero = parseFloat(prompt('Ingrese su número: '));

//creamos la funcion para mostrar el numero reverso
function numeroAlreves(numero) {
  let reverso = 0;
  while (numero > 0) {
    // sumamos la multiplicación con el sobrante de la divicion 
    reverso = 10 * reverso + numero % 10;

  //redondeamos la divición
    numero = Math.floor(numero / 10);
  }
  return reverso;
}

// llamamos la funcion dentro de la funcion
let numeroInverso = numeroAlreves(numero);
console.log(`El número ${numero} en inverso es ${numeroInverso}`); 