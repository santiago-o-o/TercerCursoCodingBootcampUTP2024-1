
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