//fecha y hora:15/04/2024 -5:56 pm 
//autores. ing andres mauricio robayo vargas , ing gabriel alejandro betancour rios, ing angie vanessa guazaquillo ospina
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion

//sumar los numero de fibonacci sin propasarse de 100
function imprimirCuadricula(filas, columnas) {
    for (let i = 0; i < filas; i++) {
      let linea = "";// array de tipo string
      for (let j = 0; j < columnas; j++) {
        if (i === 0 && j === 9) {//i es igual a la fila, y la j es igual a la columna
        } else if (i === 1 && j <= 13) {
          linea += " p ";
        } else if (i === 2 && j <= 11 && j !== 0) {
          linea += " N ";
        } else if (i === 3 && j <= 10 && j > 1) {
          linea += " L ";
        } else if (i === 4 && j <= 9 && j > 2) {
          linea += " J ";
        } else if (i === 5 && j <= 8 && j > 3) {
          linea += " H ";
        } else if (i === 6 && j <= 7 && j > 4) {
          linea += " F ";
        } else if (i === 7 && j === 6) {
          linea += " D ";
        } else {
          linea += "   ";
        }
      }
      console.log(linea);
    }
  }
  
  // Definir el tamaño
  const filas = 9;
  const columnas = 13;
  
  imprimirCuadricula(filas, columnas);//llamar función