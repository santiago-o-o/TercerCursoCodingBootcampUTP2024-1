function imprimirCuadr(filas, columnas) {
    for (let f = 0; f < filas; f++) {
        let linea = [" "];
        for (let c = 0; c < columnas; c++) {
            if (f === 0 && c === 39) {
                linea += "A";

            } else if (f === 1 && (c === 38 || c === 39)) {

                linea += "A";
            } else if (f === 2 && (c === 37 || c === 38 || c === 39 )) {
                
                linea += "A";

            } else if (f === 3 && (c === 36 || c === 38 || c === 37 || c === 39 )) {

                linea += "A";
            } else if (f === 4 && (c === 35 || c === 36 || c === 38 || c === 37 || c === 39 )) {
            
                linea += "A";
            } else if (f === 5 && (c === 34 || c === 35 || c === 36 || c === 38 || c === 37 || c === 39 )) {
            
                linea += "A";

            } else if (f === 6 && (c === 35 || c === 36 || c === 37 || c === 38 || c === 39 )) {
            
                linea += "A";
            } else if (f === 7 && (c === 36 || c === 37 || c === 38 || c === 39 )) {
            
                linea += "A";

            } else if (f === 8 && (c === 37 || c === 38 || c === 39 )) {
            
                linea += "A";
            } else if (f === 9 && (c === 38 || c === 39 )) {
            
                linea += "A";
            } else if (f === 10 && (c === 39 )) {
            
                linea += "A";

            } else {
                linea += " ";
            }
        }
        console.log(linea);
    }
}

// Definir el tamaño de la cuadrícula
const filas = 11;
const columnas = 40;

// Imprimir la cuadrícula
imprimirCuadr(filas, columnas);