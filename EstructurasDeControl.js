// Fecha y hora de publicación: 14/04/2024 21:25
// Versión del código: 3.0
// Autores: Ingenieros en Computación : santiago ordoñez ordoñez y osacar julian salazar pinzon
// Lenguaje utilizado: JavaScript
// Versión del lenguaje: ECMAScript 6

//declaramos el prompt como costante para que funcione el NODEJS
const prompt = require('prompt-sync')();

//funcion que declara el minimo y el maximo de el numero
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funcion para jugar a adivinar un numero aleatorio generado 
function adivinarNumero() {
  const numeroAleatorio = generarNumeroAleatorio(0, 99);//genera un numero aleatorio entre 0 y 99 
  let intentos = 0;//el contador de intetos realizado

  while (true) { // bucle hasta adivinar el numero 
    const numeroUsuario = parseInt(prompt("Adivina el número (entre 0 y 99):"));

    if (isNaN(numeroUsuario)) {
      console.log("Por favor ingresa un número válido.");//si la entrada es un numero manda un mensaje
    } else if (numeroUsuario <= 0 || numeroUsuario >= 100) {
      console.log("El número debe estar entre 0 y 99.");//verifica si la entrada esta fuera del rango
    } else if (numeroUsuario < numeroAleatorio) {
      console.log("El número es demasiado bajo. Inténtalo de nuevo.");// si la entrada es menor al numero aleatorio
    } else if (numeroUsuario > numeroAleatorio) {
      console.log("El número es demasiado alto. Inténtalo de nuevo.");// si la entrada es mayor al numero aleatorio
    } else {
      console.log(`¡Felicidades! Has adivinado el número correcto en ${intentos} intentos.`);// si el usuario adivina el numero aleatorio
      break;//finaliza el bucle 
    }

    intentos++;//sube el contador de intentos
  }
}
//funcion para calcular el factorial de un numero usando un ciclo for
function calcularFactorialFor(numero) {
  let factorial = 1;

  // verifica si el numero es negativo y si lo es manda un mensaje 
  if (numero < 0 || numero !== Number ) {
  return "Ingrese un valor valido";
}
  else{
    // calcula el factorial de un numero usando el ciclo for 
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  }
  
  //manda el resultado de factorial
  return factorial;
}

//funcion para contar las vocales en una frase dada
function contarVocales(frase) {
  frase = frase.toLowerCase();// convierte una frase a minisculas para facilitar la comparacion
  const vocales = ['a', 'e', 'i', 'o', 'u'];//array de vocales 
  const vocalesEncontradas = {};//almacena el conteo de vocales 

  //pone el contador en cada vocal en cero
  for (let vocal of vocales) {
    vocalesEncontradas[vocal] = 0;
  }

  //busca en la frase y cuenta las vocales 
  for (let caracter of frase) {
    if (vocales.includes(caracter)) {
      vocalesEncontradas[caracter]++;
    }
  }

  //imprime el conteo de vocales 
  console.log("Vocales encontradas y su cantidad:");
  for (let vocal of vocales) {
    console.log(`${vocal}: ${vocalesEncontradas[vocal]}`);
  }
}

//menu principal
let opcion;
do {
  console.log("");
  console.log("MENU:");
  console.log("1. Adivinar el número");
  console.log("2. Calculadora de Factoriales");
  console.log("3. Contador de vocales");
  console.log("4. Salir");
  opcion = parseInt(prompt("Seleccione una opción: "));//pide al usuario una opcion en numeros 

  switch (opcion) {
    case 1:
      adivinarNumero();//llama la funcion
      break;
    case 2:
      const numeroUsuarioFactorial = parseInt(prompt("Ingrese un número para calcular su factorial:"));
      const factorialFor = calcularFactorialFor(numeroUsuarioFactorial);
      console.log(`El factorial de ${numeroUsuarioFactorial} usando ciclo for es: ${factorialFor}`);
      break;
    case 3:
      const fraseUsuarioVocales = prompt("Ingresa una frase para contar las vocales:");
      contarVocales(fraseUsuarioVocales);//llama la funcion
      break;
    case 4:
      console.log("Hasta pronto");//mensaje al salir del menu
      break;
    default:
      console.log("Ingrese una opción válida");//mensaje si la opcion no es valida
      break;
  }
} while (opcion !== 4);//bucle hasta que opcion sea 4
