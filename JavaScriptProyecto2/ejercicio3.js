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