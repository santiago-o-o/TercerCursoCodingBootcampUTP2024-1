//declaramos el prompt como costante para que funcione el NODEJS
const prompt = require('prompt-sync')();

//funcion de convertir grados celcius a fahrenheit
function convertir() {
    //pide al usario ingresar los grador °C
    let celsius = parseFloat(prompt("Por favor digite los centigrados a convertir a Fahrenheit :"));
    //usa la formula de convercion
    let fahrenheit = (9 / 5 * celsius) + 32;
    //imprime el resultado
    console.log(`${celsius}°C son  ` + fahrenheit.toFixed(2) + " grados Fahrenheit");
}

// funcion para calcular el IMC
function calcularIMC() {
    //pide al usuario ingresar la altura y su peso 
    let peso = parseFloat(prompt("Por favor, ingresar tu peso en kilogramos : "));
    let altura = parseFloat(prompt("por favor, ingresar tu altura en metros: "));
    //usa la formula de IMC
    let IMC = peso / Math.pow(altura, 2);
    //imprime el resultado del IMC 
    console.log("Tu indice de masa corporal (IMC) es : " + IMC.toFixed(2));
}

//funcion para crear un usuario 
function nombre() {
    //pide al usuario ingresar datos
    let nombre = prompt("Nombre: ");
    let apellido = prompt("Apellido: ");
    let nacimiento = prompt("Año De Nacimiento: ");
    // combina los datos ingresados
    let combinar = nombre + apellido + nacimiento;
    // imprime el nombre de usuario combinando
    console.log("Nombre de usuario combinado es : " + combinar);
}

// funcion para generar la serie de Fibonacci
function fibonnaci() {
    //pide al usuario ingresar n 
    let n = parseInt(prompt("Ingrese el valor de n:"));
    let a = 0, b = 1, temp;

    // verifica n=0 y n=1
    if (n == 0) {
        console.log(`El ${n}-esimo numero de Fibonacci es :` + a);
    } else if (n == 1) {
        console.log(`El ${n}-esimo numero de Fibonacci es :` + b);
    } else {
        //calcula la serie de Fibonnacci
        for (let i = 2; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        //imprime el resultado 
        console.log(`El ${n}-esimo numero de Fibonacci es :` + temp);
    }
}

//MENU PRINCIPAL
let opcion;
do {
    console.log ("");
    console.log("MENU:");
    console.log("1. Convertir temperatura");
    console.log("2. Calcular IMC");
    console.log("3. Mostrar nombre de usuario");
    console.log("4. Generar serie Fibonacci");
    console.log("5. Salir");
    opcion = parseInt(prompt("Seleccione una opción: "));

    //realiza una accion segun lo que ponga el usuario
    switch (opcion) {
        case 1:
            convertir();// llama la funcion
            break;
        case 2:
            calcularIMC();// llama la funcion
            break;
        case 3:
            nombre();// llama la funcion
            break;
        case 4:
            fibonnaci();// llama la funcion
            break;
        case 5:
            console.log("Hasta pronto");//mensaje al salir del menu
            break;
        default:
            console.log("Ingrese un valor correcto");//mensaje a dijitar un opcion no valida
            break;
    }
} while (opcion != 5);//bucle hasta que el usuario salga 