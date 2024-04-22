
//Este programa genera Qr de acuerdo a las normas de una empresa
//Salvedad, el primer Qr no es necesariamente el mismo que el segundo

function Qr() {
  //limite para el QR
  let limiteVertical = 29;
  let limiteHorizontal = 29;
  let NegroOBlanco = 0; //El booleano que voy a usar luego
  let cuadrosBlancosContados = ""; //Array para luego limitar el cuadro 7x7 que pide la empresa

  //Imprimi los índices de las columnas en la primera fila
  let indicesColumna = "   ";
  let puntosDeColumna = "  ";
  for (let i = 0; i <= limiteHorizontal; i++) {
    if (i >= 10 && i < 20) {
      indicesColumna += i - 10;
    } else if (i >= 20) {
      indicesColumna += i - 20;
    } else {
      indicesColumna += i;
    }
  }
  for (let i = 0; i <= limiteHorizontal + 2; i++) {
    if (i == 0 || i == 31) {
      puntosDeColumna += "+";
    } else {
      puntosDeColumna += "-";
    }
  }
  console.log(indicesColumna);
  console.log(puntosDeColumna);

  for (let fila = 0; fila <= limiteVertical; fila++) {
    let negro = ""; //El array VECTOR que uso para imprimir luego el QR en la terminal

    // Imprimir el índice de la fila en la primera columna
    if (fila >= 10) {
      negro += fila + "|";
    } else {
      negro += fila + " |";
    }

    for (let columna = 0; columna <= limiteHorizontal; columna++) {
      //defino bordes en blanco
      if (columna == 0) {
        negro += String.fromCharCode(32);
      } else if (columna == limiteHorizontal) {
        negro += String.fromCharCode(32);
      } else if (fila == limiteHorizontal) {
        negro += String.fromCharCode(32);
      } else if (fila == 0) {
        negro += String.fromCharCode(32);
      }
      //Esta es la reserva de 7x7
      else if (columna >= 21 && columna <= 28 && fila <= 7 && fila >= 1) {
        NegroOBlanco = Math.round(Math.random());
        if (cuadrosBlancosContados >= 24) {
          negro += String.fromCharCode(9608);
        } else if (NegroOBlanco == 1) {
          negro += String.fromCharCode(9608);
        } else {
          negro += String.fromCharCode(32);
          cuadrosBlancosContados++;
        }
      }
      //puntos negros en la fila 7 sub índice 6
      else if ((fila == 6 && columna == 2) || columna == 4 || columna == 25) {
        negro += String.fromCharCode(9608);
      }
      //Esta es la formación del QR normal
      else {
        NegroOBlanco = Math.round(Math.random());
        if (NegroOBlanco == 1) {
          negro += String.fromCharCode(9608);
        } else {
          negro += String.fromCharCode(32);
        }
      }
    }
    if (fila >= 10) {
      negro += "|" + fila;
    } else {
      negro += "| " + fila;
    }

    console.log(negro); //imprimir
  }
  //indices de abajo
  let indicesColumnaBajo = "   ";
  let puntosDeColumnaBajo = "  ";
  for (let i = 0; i <= limiteHorizontal; i++) {
    if (i >= 10 && i < 20) {
      indicesColumnaBajo += i - 10;
    } else if (i >= 20) {
      indicesColumnaBajo += i - 20;
    } else {
      indicesColumnaBajo += i;
    }
  }
  for (let i = 0; i <= limiteHorizontal + 2; i++) {
    if (i == 0 || i == 31) {
      puntosDeColumnaBajo += "+";
    } else {
      puntosDeColumnaBajo += "-";
    }
  }
  console.log(puntosDeColumnaBajo);
  console.log(indicesColumnaBajo);
}
function Qr2() {
  //limite para el QR
  let limiteVertical = 29;
  let limiteHorizontal = 29;
  let NegroOBlanco = 0; //El booleano que voy a usar luego
  let cuadrosBlancosContados = ""; //Array para luego limitar el cuadro 7x7 que pide la empresa
  let cuadrosNegrosContados = "";

  //Imprimí los índices de las columnas en la primera fila
  let indicesColumna = "\n  |";
  let puntosDeColumna = "  ";
  for (let i = 0; i <= limiteHorizontal; i++) {
    if (i >= 10 && i < 20) {
      indicesColumna += i - 10 + "|";
    } else if (i >= 20) {
      indicesColumna += i - 20 + "|";
    } else {
      indicesColumna += i + "|";
    }
  }
  for (let i = 0; i <= limiteHorizontal * 2 + 2; i++) {
    puntosDeColumna += "+";
  }
  console.log(indicesColumna);
  console.log(puntosDeColumna);

  for (let fila = 0; fila <= limiteVertical; fila++) {
    let negro = ""; //El array VECTOR que uso para imprimir luego el QR en la terminal

    // Imprimir el índice de la fila en la primera columna
    if (fila >= 10) {
      negro += fila + "|";
    } else {
      negro += fila + " |";
    }

    for (let columna = 0; columna <= limiteHorizontal; columna++) {
      //defino bordes en blanco
      if (columna == 0) {
        negro += String.fromCharCode(32) + "|";
      } else if (columna == limiteHorizontal) {
        negro += String.fromCharCode(32) + "|";
      } else if (fila == limiteHorizontal) {
        negro += String.fromCharCode(32) + "|";
      } else if (fila == 0) {
        negro += String.fromCharCode(32) + "|";
      }
      //Esta es la reserva de 7x7
      else if (columna >= 21 && columna <= 28 && fila <= 7 && fila >= 1) {
        NegroOBlanco = Math.round(Math.random());
        if (cuadrosBlancosContados >= 31) {
          negro += String.fromCharCode(9608) + "|";
          cuadrosNegrosContados++;
        } else if (NegroOBlanco == 1) {
          negro += String.fromCharCode(9608) + "|";
          cuadrosNegrosContados++;
        } else {
          negro += String.fromCharCode(32) + "|";
          cuadrosBlancosContados++;
        }
      }
      //puntos negros en la fila 7 sub índice 6
      else if ((fila == 6 && columna == 2) || columna == 4 || columna == 25) {
        negro += String.fromCharCode(9608) + "|";
      }
      //Esta es la formación del QR normal
      else {
        NegroOBlanco = Math.round(Math.random());
        if (NegroOBlanco == 1) {
          negro += String.fromCharCode(9608) + "|";
        } else {
          negro += String.fromCharCode(32) + "|";
        }
      }
    }
    if (fila >= 10) {
      negro += fila;
    } else {
      negro += fila;
    }
    let puntosDeLinea = "  ";
    console.log(negro); //imprimir
    for (let i = 0; i <= limiteHorizontal * 2 + 2; i++) {
      puntosDeLinea += "+";
    }
    console.log(puntosDeLinea);
  }
  //indices de abajo
  let indicesColumnaBajo = "  |";
  let puntosDeColumnaBajo = "  ";
  for (let i = 0; i <= limiteHorizontal; i++) {
    if (i >= 10 && i < 20) {
      indicesColumnaBajo += i - 10 + "|";
    } else if (i >= 20) {
      indicesColumnaBajo += i - 20 + "|";
    } else {
      indicesColumnaBajo += i + "|";
    }
  }

  console.log(puntosDeColumnaBajo);
  console.log(indicesColumnaBajo);
  console.log(
    "Requisitos:\na)Los píxeles de la periferia están siempre en blanco.\nb)El código tiene reservados un cuadrado de 7x7 píxeles encajado en la parte más externa superior derecha(sin incluir la periferia), que debe estar formado por al menos 25 píxeles negros, con cualquier disposición.\nc)En la séptima fila(subíndice 6 de la figura), las columnas en la figura 2, 4, y 25 del arreglo son píxeles de color negro.\nCualquier producto que no cumpla los tres requisitos anteriores se considera falsificado. El número de errores se calculará teniendo en cuenta solo el último requisito (c), asignando un punto por cada píxel de los citados que no sea negro.\nCondición a: Se cumple\nCondición b: NO se cumple.  Número de pixeles negros = " + cuadrosNegrosContados +"\nCondición c:  NO se cumple."
  );
}

Qr();
Qr2();

