function imprimirCuadricula(filas, columnas) {
    for (let i = 0; i < filas; i++) {
        let linea = "";
        for (let j = 0; j < columnas; j++) {
            if (i === 1 && (j === 28 || j === 34)) {
                linea += " A ";
//aqui se copiaria el codigo anterior , pero cambiandole el numero de columnas, y eliminando algunas filas
            } else if (i === 2 && (j === 28 || j === 34)) {

                linea += " A ";
            } else if (i === 3 && (j === 28|| j === 34)) {
                
                linea += " A ";

            } else if (i === 4 && (j === 28 || j === 34)) {

                linea += " A ";
            } else if (i === 5 && ( j === 28 || j === 34)) {
          
                linea += " A ";

            }    else if (i === 6 && ( j === 28 || j === 34)) {

                linea += " A ";

            
            }    else if (i === 7 && ( j === 28 || j === 34 )) {
                linea += " A ";
                
            }    else if (i === 2 && ( j === 29 || j === 33)) {

                linea += " A ";

            }    else if (i === 3 && ( j === 29 || j === 33 )) {

                linea += " A ";

            }   else if (i === 4 && ( j === 29 || j === 33 )) {

                linea += " A ";

            }   else if (i === 5 && ( j === 29 || j === 33 )) {

                linea += " A ";
            } else if (i === 6 && ( j === 29 || j === 33)) {

                linea += " A ";

            
            }    else if (i === 3 && ( j === 30 || j === 32 )) {
                linea += " A ";
                
            }    else if (i === 4 && ( j === 30 || j === 32)) {

                linea += " A ";

            }    else if (i === 5 && ( j === 30 || j === 32 )) {

                linea += " A ";

            }      else if (i === 4 && ( j === 31 )) {

                linea += " A ";
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