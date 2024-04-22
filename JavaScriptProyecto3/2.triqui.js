// Autores del programa
/*
autores: 
ing andres mauricio robayo vargas
ing gabriel alejandro betancur rios
ing angie vanessa guazaquillo ospina
ing oscar julian salazar pinzon
ing daniela panasso hernandez 
ing luis panesso hernandez
ing jordan valencia patiño 
ing santiago ordoñez 
ing angel henao 
ing robert carvajal
ing michael castro
ing juan esteban ortiz
ing Camilo Giraldo Montoya
*/

// 22/04/2024, 2 p.m.
// Universidad Tecnológica de Pereira
// Programa de Ingeniería en Sistemas y Computación
// ECMAScript 6.0, JavaScript 6.0

// Importar el módulo 'prompt-sync' para permitir la entrada de datos desde la consola
const prompt = require('prompt-sync')();

// Inicializar el tablero del Triqui con números del 1 al 9 para representar las posiciones
let tablero = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let jugadorActual = "X"; // El jugador actual, inicialmente "X"
let movimientos = 0; // Contador de movimientos realizados

// Función para imprimir el estado actual del tablero
function imprimirTablero() {
    console.log(` ${tablero[0][0]} | ${tablero[0][1]} | ${tablero[0][2]} `);
    console.log("---+---+---");
    console.log(` ${tablero[1][0]} | ${tablero[1][1]} | ${tablero[1][2]} `);
    console.log("---+---+---");
    console.log(` ${tablero[2][0]} | ${tablero[2][1]} | ${tablero[2][2]} `);
}

// Función para verificar si un jugador ha ganado
function verificarGanador(jugador) {
    // Verificar filas y columnas
    for (let i = 0; i < 3; i++) {
        if (tablero[i][0] === jugador && tablero[i][1] === jugador && tablero[i][2] === jugador) {
            return true; // Si se encuentran tres fichas del mismo jugador en una fila, retorna verdadero
        }
        if (tablero[0][i] === jugador && tablero[1][i] === jugador && tablero[2][i] === jugador) {
            return true; // Si se encuentran tres fichas del mismo jugador en una columna, retorna verdadero
        }
    }

    // Verificar diagonales
    if ((tablero[0][0] === jugador && tablero[1][1] === jugador && tablero[2][2] === jugador) ||
        (tablero[0][2] === jugador && tablero[1][1] === jugador && tablero[2][0] === jugador)) {
        return true; // Si se encuentran tres fichas del mismo jugador en una diagonal, retorna verdadero
    }

    return false; // Si no se cumple ninguna condición, retorna falso (no hay ganador)
}

// Función principal para jugar al Triqui
function jugarTriqui() {
    console.log("¡Bienvenido al Triqui!");

    while (movimientos < 9) {
        imprimirTablero(); // Imprimir el estado actual del tablero
        console.log(`Turno del jugador ${jugadorActual}`);
        let movimiento = parseInt(prompt("Ingrese el número de la casilla (1 al 9):"));

        // Verificar si el movimiento es un número válido entre 1 y 9
        if (isNaN(movimiento) || movimiento < 1 || movimiento > 9) {
            console.log("Ingrese un número válido.");
            continue; // Volver a solicitar un movimiento válido
        }

        // Convertir el número de casilla en coordenadas de fila y columna
        let fila = Math.floor((movimiento - 1) / 3);
        let columna = (movimiento - 1) % 3;

        // Verificar si la casilla está ocupada
        if (tablero[fila][columna] !== movimiento) {
            console.log("Casilla ocupada. Elija otra casilla.");
            continue; // Volver a solicitar un movimiento válido
        }

        // Actualizar el tablero con el movimiento del jugador actual
        tablero[fila][columna] = jugadorActual;
        movimientos++; // Incrementar el contador de movimientos

        // Verificar si el jugador actual ha ganado
        if (verificarGanador(jugadorActual)) {
            imprimirTablero(); // Imprimir el estado final del tablero
            console.log(`¡El jugador ${jugadorActual} ha ganado!`);
            break; // Terminar el juego
        }

        // Cambiar al siguiente jugador
        jugadorActual = (jugadorActual === "X") ? "O" : "X";
    }

    // Verificar si se alcanzó el límite de movimientos sin ganador (empate)
    if (movimientos === 9) {
        imprimirTablero(); // Imprimir el estado final del tablero
        console.log("¡La partida ha terminado en empate!");
    }
}

// Iniciar el juego Triqui
jugarTriqui();
