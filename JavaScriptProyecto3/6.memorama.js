// Autores del programa
/*
autores: 
ing andres mauricio robayo vargas,
ing gabriel alejandro betancur rios, 
ing angie vanessa guazaquillo ospina, 
ing oscar julian salazar pinzon,
ing daniela panasso hernandez, 
ing luis panesso hernandez,
ing jordan valencia patiño, 
ing santiago ordoñez, 
ing angel henao, 
ing robert carvajal,
ing michael castro, 
ing juan esteban ortiz
*/

// 22/04/2024, 2 p.m.
// Universidad Tecnológica de Pereira
// Programa de Ingeniería en Sistemas y Computación
// ECMAScript 6.0, JavaScript 6.0

// Importa la función 'prompt' del módulo 'prompt-sync'
const prompt = require('prompt-sync')();

// Lista de elementos duplicados para el juego de memoria
const elementos = ['&', '&', '+', '+', '@', '@', '*', '*'];

// Imprime la lista normal antes de iniciar el juego
console.log('--- Lista Normal ---\n');
mostrarTablero(elementos);

// Función para mostrar el tablero de juego
function mostrarTablero(lista) {
  // Crea el marco y el separador para el tablero
  const marco = '+-'.repeat(lista.length) + '+';
  const separador = lista.join('|');
  // Imprime el marco, el separador y el marco nuevamente para el tablero
  console.log(marco);
  console.log('|' + separador + '|');
  console.log(marco + '\n');
}

// Función para generar una lista aleatoria de elementos duplicados
function generarListaAleatoria() {
  // Ordena aleatoriamente los elementos de la lista y retorna la lista reordenada
  return elementos.sort(() => Math.random() - 0.5);
}

// Función para iniciar el juego de memoria
function iniciarJuego() {
  // Genera una lista aleatoria para el juego
  const listaAleatoria = generarListaAleatoria();
  // Lista de números para representar las posiciones en el juego
  const listaNumeros = ['1', '2', '3', '4', '5', '6', '7', '8'];
  // Copia la lista de números para crear la lista de juego
  const listaJuego = [...listaNumeros];
  // Set para almacenar las posiciones encontradas durante el juego
  const posicionesEncontradas = new Set();

  // Imprime la lista aleatoria antes de iniciar el juego
  console.log('--- Lista Aleatoria ---\n');
  mostrarTablero(listaAleatoria);

  // Inicialización de variables para el juego
  let contador = 0; // Contador de parejas encontradas
  let titulo = `JUEGO CONCENTRESE (MEMORAMA) Número de parejas = ${contador}\n`; // Título del juego
  console.log(titulo); // Imprime el título inicial del juego
  let intentos = 0; // Contador de intentos del jugador
  let juegoTerminado = false; // Variable para controlar si el juego ha terminado

  // Ciclo principal del juego mientras no esté terminado y no se hayan encontrado todas las parejas
  while (!juegoTerminado && contador < listaAleatoria.length / 2) {
    // Muestra el tablero de juego actualizado
    mostrarTablero(listaJuego);

    // Solicita al jugador la primera posición a voltear
    const pos1 = parseInt(prompt('Ingrese la primera posición : ')) - 1;
    console.log(titulo); // Muestra el título del juego después de cada movimiento

    // Verifica si la posición ingresada es válida y aún no ha sido encontrada
    if (isNaN(pos1) || pos1 < 0 || pos1 >= listaNumeros.length || posicionesEncontradas.has(pos1)) {
      console.log('¡Posición inválida o ya encontrada! Intente de nuevo.\n');
      console.log(titulo); // Muestra el título del juego nuevamente
      continue; // Continúa con la siguiente iteración del ciclo
    }

    // Voltea la posición seleccionada en el tablero de juego
    listaJuego[pos1] = listaAleatoria[pos1];
    mostrarTablero(listaJuego); // Muestra el tablero con la posición volteada

    // Solicita al jugador la segunda posición a voltear
    const pos2 = parseInt(prompt('Ingrese la segunda posición: ')) - 1;
    console.log(titulo); // Muestra el título del juego después de cada movimiento

    // Verifica si la posición ingresada es válida y aún no ha sido encontrada
    if (isNaN(pos2) || pos2 < 0 || pos2 >= listaNumeros.length || posicionesEncontradas.has(pos2)) {
      console.log('¡Posición inválida o ya encontrada! Intente de nuevo.\n');
      listaJuego[pos1] = listaNumeros[pos1]; // Restaura la posición incorrecta
      continue; // Continúa con la siguiente iteración del ciclo
    }

    // Voltea la segunda posición seleccionada en el tablero de juego
    listaJuego[pos2] = listaAleatoria[pos2];
    mostrarTablero(listaJuego); // Muestra el tablero con ambas posiciones volteadas

    // Verifica si las posiciones forman una pareja válida y no han sido encontradas previamente
    if (pos1 !== pos2 && listaAleatoria[pos1] === listaAleatoria[pos2] && !posicionesEncontradas.has(pos1) && !posicionesEncontradas.has(pos2)) {
      console.log('¡Pareja encontrada!\n'); // Mensaje de pareja encontrada
      contador++; // Incrementa el contador de parejas encontradas
      posicionesEncontradas.add(pos1); // Agrega las posiciones al Set de posiciones encontradas
      posicionesEncontradas.add(pos2);
      titulo = `JUEGO CONCENTRESE (MEMORAMA) Número de parejas = ${contador}\n`; // Actualiza el título del juego
      console.log(titulo); // Muestra el título actualizado del juego
    } else {
      // Maneja los casos de posiciones incorrectas o parejas ya encontradas
      if (pos1 === pos2) {
        console.log('¡Debes seleccionar posiciones diferentes!\n');
      } else if (posicionesEncontradas.has(pos1) || posicionesEncontradas.has(pos2)) {
        console.log('¡Posición ya encontrada! Intente de nuevo.\n');
      } else {
        console.log('¡Intenta de nuevo!\n');
      }
      // Restaura las posiciones al estado original
      listaJuego[pos1] = listaNumeros[pos1];
      listaJuego[pos2] = listaNumeros[pos2];
    }

    intentos++; // Incrementa el contador de intentos
    if (intentos % 2 === 0) { // Pregunta al jugador cada 2 intentos si desea continuar
      const continuar = prompt('¿Deseas continuar? (s/n): ');
      if (continuar.toLowerCase() !== 's') {
        console.log('Fin del juego.\n'); // Mensaje de fin del juego si el jugador decide salir
        juegoTerminado = true; // Establece la variable juegoTerminado si el jugador decide salir
      }
      if (continuar.toLowerCase == "s") {
        console.log(titulo); // Muestra el título actualizado del juego si el jugador decide continuar
      }
    }
  }

  if (!juegoTerminado) { // Muestra el mensaje de felicitaciones si el juego no ha sido terminado
    mostrarTablero(listaJuego);
    console.log('¡Felicidades! Has encontrado todas las parejas.\n');
  }
}

// Inicia el juego de memoria llamando a la función iniciarJuego
iniciarJuego();
