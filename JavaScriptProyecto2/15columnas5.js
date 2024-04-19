function imprimirCuadricula(filas, columnas) {
    for (let c = 0; c < filas; c++) {
        let linea = "";
        for (let c = 0; c < columnas; c++) {
            if (c === 1 && (c === 28 || c === 34)) {
                linea += " A ";
//aqui se copiaria el codigo anterior , pero cambiandole el numero de columnas, y eliminando algunas filas
            } else if (c === 2 && (c === 28 || c === 34)) {
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
                linea += " A ";
            } else if (c === 3 && (c === 28|| c === 34)) {
                
                linea += " A ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            } else if (c === 4 && (c === 28 || c === 34)) {

                linea += " A ";
                         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            } else if (c === 5 && ( c === 28 || c === 34)) {
          
                linea += " A ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            }    else if (c === 6 && ( c === 28 || c === 34)) {

                linea += " A ";

                 //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra    
            }    else if (c === 7 && ( c === 28 || c === 34 )) {
                linea += " A ";
                    //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra     
            }    else if (c === 2 && ( c === 29 || c === 33)) {

                linea += " A ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            }    else if (c === 3 && ( c === 29 || c === 33 )) {

                linea += " A ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            }   else if (c === 4 && ( c === 29 || c === 33 )) {

                linea += " A ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            }   else if (c === 5 && ( c === 29 || c === 33 )) {

                linea += " A ";
                       //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra  
            } else if (c === 6 && ( c === 29 || c === 33)) {

                linea += " A ";

                     //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            }    else if (c === 3 && ( c === 30 || c === 32 )) {
                linea += " A ";
                      //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra   
            }    else if (c === 4 && ( c === 30 || c === 32)) {

                linea += " A ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            }    else if (c === 5 && ( c === 30 || c === 32 )) {

                linea += " A ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            }      else if (c === 4 && ( c === 31 )) {

                linea += " A ";
                //cuando no ponemos nada dejamos el espacio
            }else {
                linea += "   ";
            }
        }
        console.log(linea);
    }
}

// Definir el tamaño de la cuadrícula
const filas = 8;
const columnas = 35;

// Imprimir la cuadrícula
imprimirCuadricula(filas, columnas);