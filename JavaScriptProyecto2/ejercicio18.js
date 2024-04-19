function imprimirCuadricula(filas, columnas) {

    for (let i = 0; i < filas; i++) {
     // la fila empieza desde el 0 y la columna tambien desde 0
        let linea = "";
        // la variable i son las filas y j son las columas
        for (let j = 0; j < columnas; j++) {
            if (i === 0 && j === 9) {
                linea += " Z ";

            } else if (i === 1 && (j === 8 || j === 10)) {

                linea += " Z ";
            } else if (i === 2 && (j === 7 || j === 11)) {
                
                linea += " Z ";

            } else if (i === 3 && (j === 6 || j === 12)) {

                linea += " Z ";
            } else if (i === 4 && (j === 5 || j === 13)) {
            
                linea += " Z ";
            } else if (i === 5 && (j === 4 || j === 14)) {
            
                linea += " Z ";
            } else if (i === 6 && (j === 3 || j === 15)) {
            
                linea += " Z ";
            } else if (i === 7 && (j === 2 || j === 16)) {
            
                linea += " Z ";
            } else if (i === 8 && (j === 1 || j === 17)) {
            
                linea += " Z ";
            } else if (i === 9 && (j === 0 || j === 18)) {
            
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