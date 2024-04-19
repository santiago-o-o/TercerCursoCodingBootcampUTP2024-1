// Fecha y hora de publicación: 14/04/2024 21:25
// Versión del código: 3.0
// Autores: Ingenieros en Computación : santiago ordoñez ordoñez y osacar julian salazar pinzon
// Lenguaje utilizado: JavaScript
// Versión del lenguaje: ECMAScript 6

//esta funcion es para buscar el numero minimo y maximo de una lista 
function encontrarExtremos(lista) {
  //aqui verfica si la lista esta vacia 
  if (lista.length === 0) {
    return null; // vulve a null si la lista está vacía
  }
//inicia las variables minimo y maximo con el primir elemento de la lista 
  let minimo = lista[0];
  let maximo = lista[0];

  // lee la lista para encontar el minimo y el maximo
  for (let i = 1; i < lista.length; i++) {
    if  (lista[i] < minimo) {
      minimo = lista[i];//cambia el minimo si se encuentra un valor menor
    }
    if (lista[i] > maximo) {
      maximo = lista[i];//cambia el maximo si se encuentra un valor mayor
    }
  }

  //manda un objeto con las caracteristicas minimo y maximo
  return { minimo, maximo };
}

// funcion para cocatenar y ordenar la lista resultante 
function concatenarYOrdenar(lista1, lista2) {
  // concatena las dos listas y pone el resultado en listaConcatenada
  const listaConcatenada = lista1.concat(lista2);
  listaConcatenada.sort((a, b) => a - b); // Ordena de menor a mayor
  // vuelve a mandar la lista concatenada y ordenada
  return listaConcatenada;
}

// Funcion para inveertir el orde de los elementos en una lista 
function invertirLista(lista) {
  //aqui se invierte la lista 
  return lista.reverse();
}

//aqui esta las listas para los ejercicios 
const numeros = [112, 1223, 234, 2345, 1244, 12233];
const extremos = encontrarExtremos(numeros);
console.log("la lista es ", numeros);
console.log("");
console.log("Número más pequeño:", extremos.minimo);
console.log("Número más grande:", extremos.maximo);

const lista1 = [15, 65, 160];
const lista2 = [13, 12, 6];
const listaConcatenadaOrdenada = concatenarYOrdenar(lista1, lista2);
console.log("");
console.log("lista 1:", lista1);
console.log("lista 2:", lista2);
console.log("");
console.log("Lista concatenada y ordenada:", listaConcatenadaOrdenada);

const listaOriginal = [154, 235, 345, 456, 536];
const listaInvertida = invertirLista(listaOriginal);
console.log("");
console.log("Lista original:", listaOriginal);
console.log("Lista invertida:", listaInvertida);
