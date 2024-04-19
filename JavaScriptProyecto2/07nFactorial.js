function CalcularFactoriales() {
    let N = parseInt(prompt("Ingresa un número entero positivo para calcular el factorial: "));

    // Validación: Asegura que el usuario ingrese un número entero positivo
    while (isNaN(N) || N < 0) {
        console.log("Debe ingresar un número entero positivo. Inténtalo de nuevo.");
        N = parseInt(prompt("Ingresa un número entero positivo para calcular el factorial: "));
    }

    let SumaFactoriales = 0;
    let factorial = 1;

    // Calcula la suma de los factoriales desde 0 hasta N
    for (let i = 0; i <= N; i++) {
        if (i > 0) {
            factorial *= i; // Calcula el factorial de i
        }
        SumaFactoriales += factorial; // Agrega el factorial al resultado acumulado
    }

    console.log("La suma de los factoriales desde 0 hasta " + N + " es: " + SumaFactoriales);
}

// Llama a la función CalcularFactoriales
CalcularFactoriales();