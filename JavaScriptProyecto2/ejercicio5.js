/*
Fecha y Hora de publicación: 12:00 am
Autores. Ing. Gabriel Alejandro Betancur
Nombre del lenguaje utilizado: ECMASCRIPT 6.0
Versión del lenguaje utilizado: javascript 6.0
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación

*/ 

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
  