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
function imprimirCuadricula(filas, columnas) {
    for (let c = 0; c < filas; c++) {
        let linea = "";
        for (let f = 0; f < columnas; f++) {
            if (c === 0 && f === 9) {
                linea += " Z ";
//aqui se copiaria el codigo anterior , pero cambiandole el numero de columnas, y eliminando algunas filas
            } else if (c === 1 && (f === 8 || f === 9 || f === 10)) {
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
                linea += " Z ";
            } else if (c === 2 && (f === 7 || f === 9 || f === 10 || f === 8 || f === 11)) {
               //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra          
                linea += " Z ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            } else if (c === 3 && (f === 6 || f === 7 || f === 8 || f === 9 || f === 10 || f === 11 || f === 12)) {
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
                linea += " Z ";
            } else if (c === 4 && ( f === 7 || f === 8 || f === 9 || f === 10 || f === 11)) {
            
                linea += " Z ";
         //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra
            }    else if (c === 5 && ( f === 8 || f === 9 || f === 10 )) {

                linea += " Z ";

              //cuando las filas esten en esta pocicion y en la columnas se va imprimir la letra       
            }    else if (c === 6 && ( f === 9 )) {

                linea += " Z ";

                //donde no ponemso nada le damos un espacio
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