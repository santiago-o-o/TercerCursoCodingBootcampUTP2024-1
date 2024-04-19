function imprimirCuadricula(filas, columnas) {
    for (let i = 0; i < filas; i++) {
      let linea = "";// array de tipo string
      for (let j = 0; j < columnas; j++) {
        if (i === 0 && j === 9) {//i es igual a la fila, y la j es igual a la columna
        } else if (i === 1 && j <= 46 && j >= 34) {
          linea += " p ";
        } else if (i === 2 && j <= 45 && j >= 35) {
          linea += " p ";
        } else if (i === 3 && j <= 44 && j >= 36) {
          linea += " p ";
        } else if (i === 4 && j <= 43 && j >= 37) {
          linea += " p ";
        } else if (i === 5 && j <= 42 && j >= 38) {
          linea += " p ";
        } else if (i === 6 && j <= 41 && j >= 39) {
          linea += " p ";
        } else if (i === 7 && j === 40) {
          linea += " p ";
        } else {
          linea += "   ";
        }
      }
      console.log(linea);
    }
  }
  
  // Definir el tamaño
  const filas = 9;
  const columnas = 47;
  
  imprimirCuadricula(filas, columnas);//llamar función