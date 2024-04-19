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

//nos crea una figura 
function imprimirCuadricula(filas, columnas) {
    for (let i = 0; i < filas; i++) {
      let linea = "";
      for (let j = 0; j < columnas; j++) {
        if (i === 1 && j === 80) {
          linea += "A";
        } else if (i === 2 && j >= 79 && j <= 80) {
          linea += "A";
        } else if (i === 3 && j >= 78 && j <= 80) {
          linea += "A";
        } else if (i === 4 && j >= 77 && j <= 80) {
          linea += "A";
        } else if (i === 5 && j >= 76 && j <= 80) {
          linea += "A";
        } else if (i === 6 && j >= 75 && j <= 80) {
          linea += "A";
        } else if (i === 7 && j >= 74 && j <= 80) {
          linea += "A";
        } else if (i === 8 && j >= 73 && j <= 80) {
          linea += "A";
        } else if (i === 9 && j >= 72 && j <= 80) {
          linea += "A";
        } else if (i === 10 && j >= 71 && j <= 80) {
          linea += "A";
        } else if (i === 11 && j >= 70 && j <= 80) {
          linea += "A";
        } else if (i === 12 && j >= 69 && j <= 80) {
          linea += "A";
        } else if (i === 13 && j >= 68 && j <= 80) {
          linea += "A";
        } else if (i === 14 && j >= 67 && j <= 80) {
          linea += "A";
        } else if (i === 15 && j >= 66 && j <= 80) {
          linea += "A";
        } else if (i === 16 && j >= 65 && j <= 80) {
          linea += "A";
        } else if (i === 17 && j >= 64 && j <= 80) {
          linea += "A";
        } else if (i === 18 && j >= 63 && j <= 80) {
          linea += "A";
        } else if (i === 19 && j >= 62 && j <= 80) {
          linea += "A";
        } else if (i === 20 && j >= 61 && j <= 80) {
          linea += "A";
        } else if (i === 21 && j >= 60 && j <= 80) {
          linea += "A";
        } else if (i === 22 && j >= 59 && j <= 80) {
          linea += "A";
        } else if (i === 23 && j >= 58 && j <= 80) {
          linea += "A";
        } else if (i === 24 && j >= 57 && j <= 80) {
          linea += "A";
        } else if (i === 25 && j >= 56 && j <= 80) {
          linea += "A";
        } else {
          linea += " ";
        }
      }
      console.log(linea);
    }
  }
  
  // Definir el tamaño
  const filas = 25;
  const columnas = 80;
  
  imprimirCuadricula(filas, columnas); //llamar función