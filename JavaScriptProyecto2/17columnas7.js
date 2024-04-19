function imprimirCuadricula(filas, columnas) {
    for (let f = 0; f < filas; f++) {
        let linea = "";
        for (let c = 0; c < columnas; c++) {
            if (f === 0 && (c === 0 || c === 18)) {
                linea += " Z ";
//aqui se copiaria el codigo anterior , pero cambiandole el numero de columnas, y eliminando algunas filas
            } else if (f === 1 && (c === 1 || c === 17)) {
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
                linea += " Z ";
            } else if (f === 2 && (c === 2 || c === 16)) {
           //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra              
                linea += " Z ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            } else if (f === 3 && (c === 3 || c === 15)) {
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
                linea += " Z ";
            } else if (f === 4 && ( c === 4 || c === 14)) {
              //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra       
                linea += " Z ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            }    else if (f === 5 && ( c === 5 || c === 13)) {

                linea += " Z ";

            //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra         
            }    else if (f === 6 && ( c === 6 || c === 12 )) {

                linea += " Z ";
            //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra             
            }    else if (f === 7 && ( c === 7 || c === 11 )) {

                linea += " Z ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            }    else if (f === 8 && ( c === 8 || c === 10 )) {

                linea += " Z ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            }    else if (f === 9 && ( c === 9)) {

                linea += " Z ";


                // donde no ponemos nada le damos un espacio
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