function imprimirCuadricula(filas, columnas) {
    for (let i = 0; i < filas; i++) {
        let linea = "";
        for (let j = 0; j < columnas; j++) {
            if (i === 0 && (j === 0 || j === 18)) {
                linea += " Z ";
//aqui se copiaria el codigo anterior , pero cambiandole el numero de columnas, y eliminando algunas filas
            } else if (i === 1 && (j === 1 || j === 17)) {

                linea += " Z ";
            } else if (i === 2 && (j === 2 || j === 16)) {
                
                linea += " Z ";

            } else if (i === 3 && (j === 3 || j === 15)) {

                linea += " Z ";
            } else if (i === 4 && ( j === 4 || j === 14)) {
            
                linea += " Z ";

            }    else if (i === 5 && ( j === 5 || j === 13)) {

                linea += " Z ";

            
            }    else if (i === 6 && ( j === 6 || j === 12 )) {

                linea += " Z ";
                
            }    else if (i === 7 && ( j === 7 || j === 11 )) {

                linea += " Z ";

            }    else if (i === 8 && ( j === 8 || j === 10 )) {

                linea += " Z ";

            }    else if (i === 9 && ( j === 9)) {

                linea += " Z ";


                
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