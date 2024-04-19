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
// este programa hase una lista de 15 numeros que ingresa el usuario
const prompt = require('prompt-sync')();

let numeros = [];
let mayores150 = 0;
let mayor = -Infinity;
let menor = Infinity;
let negativos = 0;
let sumaPositivos = 0;
let cantidadPositivos = 0;

function leerNumero() {
  let numero = prompt("Ingrese un número diferente de cero: ", )

    numero = parseFloat(numero);

    if (numero !== 0 && !isNaN(numero)) {
      numeros.push(numero);
      if (numero > 150) mayores150++;
      if (numero > mayor) mayor = numero;
      if (numero < menor) menor = numero;
      if (numero < 0) negativos++;
      if (numero > 0) {
        sumaPositivos += numero;
        cantidadPositivos++;
      }
    } else {
      console.log("Por favor, ingrese un número válido diferente de cero.");
    }

    if (numeros.length < 15) {
      leerNumero();
    } else {
      mostrarResultados();

    }
  };


function mostrarResultados() {
  console.log("Cantidad de números mayores a 150:", mayores150);
  console.log("Número mayor encontrado en el grupo:", mayor);
  console.log("Número menor encontrado en el grupo:", menor);
  console.log("Cantidad de números negativos encontrados:", negativos);
  console.log("Promedio de los números positivos encontrados:", sumaPositivos / cantidadPositivos);
}

leerNumero();
