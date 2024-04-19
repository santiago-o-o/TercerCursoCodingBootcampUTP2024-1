function imprimirCuadricula(filas, columnas) {

    for (let f = 0; f < filas; f++) {
     // la fila empieza desde el 0 y la columna tambien desde 0
        let linea = "";
        // la variable f son las filas y c son las columas
        for (let c = 0; c < columnas; c++) {
           //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            if (f === 0 && c === 9) {
                linea += " Z ";
                
                         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            } else if (f === 1 && (c === 8 || c === 10)) {

                linea += " Z ";

                         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            } else if (f === 2 && (c === 7 || c === 11)) {
                
                linea += " Z ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            } else if (f === 3 && (c === 6 || c === 12)) {
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
                linea += " Z ";
            } else if (f === 4 && (c === 5 || c === 13)) {
           //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra          
                linea += " Z ";
            } else if (f === 5 && (c === 4 || c === 14)) {
            //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra         
                linea += " Z ";
            } else if (f === 6 && (c === 3 || c === 15)) {
          //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra           
                linea += " Z ";
            } else if (f === 7 && (c === 2 || c === 16)) {
           //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra          
                linea += " Z ";
            } else if (f === 8 && (c === 1 || c === 17)) {
          //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra           
                linea += " Z ";
            } else if (f === 9 && (c === 0 || c === 18)) {
           //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra          
                linea += " Z ";
         // y donde no ponemos nada va a dar un espacio
            } else {
                linea += "   ";
            }
        }
        console.log(linea);
    }
}

// Definir el tamaño de la cuadrícula
const filas = 10;
const columnas = 20;

// Imprimir la cuadrícula
imprimirCuadricula(filas, columnas);