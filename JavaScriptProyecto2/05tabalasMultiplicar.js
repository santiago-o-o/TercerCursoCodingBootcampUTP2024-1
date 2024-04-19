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

//imprime las tablas de multiplicar de 1 hasta 10
function imprimirTablasMultiplicar() {
    for (let numero1 = 1; numero1 <= 10; numero1++) {
      console.log(`Tabla de multiplicar del ${numero1}:`);
      for (let numero2 = 1; numero2 <= 10; numero2++) {
        //          multiplicando x  multiplicador =  producto
        console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`);
      }
      console.log(""); // Imprimir una línea en blanco entre cada tabla
    }
  }
  
  imprimirTablasMultiplicar();
  