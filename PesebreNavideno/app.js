function aleatorio() {
  let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  lista.sort(() => Math.random() - 0.5);
  console.log(lista);

  document.getElementsByClassName("carta-1")[0].style.order = lista[0];
  document.getElementsByClassName("carta-2")[0].style.order = lista[1];
  document.getElementsByClassName("carta-3")[0].style.order = lista[2];
  document.getElementsByClassName("carta-4")[0].style.order = lista[3];
  document.getElementsByClassName("carta-5")[0].style.order = lista[4];
  document.getElementsByClassName("carta-6")[0].style.order = lista[5];
  document.getElementsByClassName("carta-7")[0].style.order = lista[6];
  document.getElementsByClassName("carta-8")[0].style.order = lista[7];
  document.getElementsByClassName("carta-9")[0].style.order = lista[8];
  document.getElementsByClassName("carta-10")[0].style.order = lista[9];
  document.getElementsByClassName("carta-11")[0].style.order = lista[10];
  document.getElementsByClassName("carta-12")[0].style.order = lista[11];
  document.getElementsByClassName("carta-13")[0].style.order = lista[12];
  document.getElementsByClassName("carta-14")[0].style.order = lista[13];
  document.getElementsByClassName("carta-15")[0].style.order = lista[14];
  document.getElementsByClassName("carta-16")[0].style.order = lista[15];
}
aleatorio();
document.addEventListener("DOMContentLoaded", function () {
  const cartas = document.querySelectorAll(".carta");
  let volteadas = 0;
  let primeraCarta = null;
  let segundaCarta = null;
  let parejasEncontradas = 0;
  let bloquearClicks = false;
  const totalCartas = cartas.length / 2;
  let audioCorrecta = new Audio("Audio/correcta.mp3");
  let audioIncorrecta = new Audio("Audio/incorrecta.mp3");
  let audioGaspar = new Audio("Audio/gaspar.mp3");
  let audioBaltazar = new Audio("Audio/baltazar.mp3");
  let audioJesus = new Audio("Audio/jesus.mp3");
  let audioJose = new Audio("Audio/jose.mp3");
  let audioMaria = new Audio("Audio/maria.mp3");
  let audioMelchor = new Audio("Audio/melchor.mp3");
  let audioMula = new Audio("Audio/mula.mp3");
  let audioPastor = new Audio("Audio/pastor.mp3");
  let audioFinal = new Audio("Audio/final.mp3");
  let contenedorFinal = document.getElementById("contenedor-Final")
  let contenedorPesebre = document.getElementById("contenedor-pesebre");
  let CartonMaria = document.querySelector(".maria-png");
  let CartonJesus = document.querySelector(".jesus-png");
  let CartonJose = document.querySelector(".jose-png");
  let CartonGaspar = document.querySelector(".gaspar-png");
  let CartonBaltazar = document.querySelector(".baltazar-png");
  let CartonMula = document.querySelector(".mula-buey-png");
  let Cartonmelchor = document.querySelector(".melchor-png");
  let CartonPastor = document.querySelector(".pastor-png");

  cartas.forEach(function (carta) {
    carta.addEventListener("click", function () {
      if (bloquearClicks) return;

      const cartaInner = this.querySelector(".carta-inner");
      const flipped = false
      const encontrado = false
      let valorCarta = carta.getAttribute("data-valor"); // Obtener el valor de data-valor de la carta

      if (!flipped && !encontrado) {
        cartaInner.style.transform = "rotateY(180deg)";
        volteadas++;

        if (volteadas === 1) {
          primeraCarta = carta;
        } else if (volteadas === 2) {
          segundaCarta = carta;

          bloquearClicks = true; // Bloquear los clics mientras se evalúan las cartas
          const primeravolteada = parseInt(primeraCarta.getAttribute("data-valor"))
          console.log(primeravolteada )
          const segundavolteada = parseInt(segundaCarta.getAttribute("data-valor"))
          console.log(segundavolteada)
          // Espera un momento antes de evaluar si las cartas son iguales
          setTimeout(function () {
            if (primeravolteada + 1 == segundavolteada || primeravolteada == segundavolteada + 1) {
              console.log("Encontraste", valorCarta);
              audioCorrecta.play();
              parejasEncontradas++;
              if (parejasEncontradas === totalCartas) {
                console.log("ganado");
                contenedorFinal.classList.remove("hidden") 
                audioFinal.play();
              }else if (valorCarta == 1 || valorCarta == 2) {
                contenedorPesebre.classList.remove("hidden");
                CartonMaria.classList.toggle("caida");
                audioMaria.play();
                setTimeout(() => {
                  CartonMaria.classList.toggle("hidden");
                }, 2900);
              } else if (valorCarta == 4 || valorCarta == 5) {
                contenedorPesebre.classList.remove("hidden");
                CartonJose.classList.toggle("caida");
                audioJose.play();
                setTimeout(() => {
                  CartonJose.classList.toggle("hidden");
                }, 2900);
              } else if (valorCarta == 7 || valorCarta == 8) {
                contenedorPesebre.classList.remove("hidden");
                CartonJesus.classList.toggle("caida");
                audioJesus.play();
                setTimeout(() => {
                  CartonJesus.classList.toggle("hidden");
                }, 2900);
              } else if (valorCarta == 10 || valorCarta == 11) {
                contenedorPesebre.classList.remove("hidden");
                Cartonmelchor.classList.toggle("caida");
                audioMelchor.play();
                setTimeout(() => {
                  Cartonmelchor.classList.toggle("hidden");
                }, 2900);
              } else if (valorCarta == 13 || valorCarta == 14) {
                contenedorPesebre.classList.remove("hidden");
                CartonGaspar.classList.toggle("caida");
                audioGaspar.play();
                setTimeout(() => {
                  CartonGaspar.classList.toggle("hidden");
                }, 2900);
              } else if (valorCarta == 16 || valorCarta == 17) {
                contenedorPesebre.classList.remove("hidden");
                CartonBaltazar.classList.toggle("caida");
                audioBaltazar.play();
                setTimeout(() => {
                  CartonBaltazar.classList.toggle("hidden");
                }, 2900);
              } else if (valorCarta == 19 || valorCarta == 20) {
                contenedorPesebre.classList.remove("hidden");
                CartonPastor.classList.toggle("caida");
                audioPastor.play();
                setTimeout(() => {
                  CartonPastor.classList.toggle("hidden");
                }, 2900);
              } else if (valorCarta == 22 || valorCarta == 23) {
                contenedorPesebre.classList.remove("hidden");
                CartonMula.classList.toggle("caida");
                audioMula.play();
                setTimeout(() => {
                  CartonMula.classList.toggle("hidden");
                }, 2900);
              }
            } else {
              // Las cartas no coinciden, gíralas de vuelta
              primeraCarta.querySelector(".carta-inner").style.transform =
                "rotateY(0deg)";
              segundaCarta.querySelector(".carta-inner").style.transform =
                "rotateY(0deg)";
              console.log("no coinciden");
              audioIncorrecta.play();
            }

            volteadas = 0; // Reinicia el contador de cartas volteadas
            bloquearClicks = false; // Desbloquear los clics después de evaluar las cartas
          }, 700); // Tiempo en milisegundos antes de evaluar 
        }
      }
    });
  });
});

let button = document.getElementById("button");

button.addEventListener("click", () => {
  let welcome2 = document.getElementById("welcome2");
  welcome2.parentNode.removeChild(welcome2);

  let welcome1 = document.getElementById("welcome1");
  welcome1.parentNode.removeChild(welcome1);

  let audioIntro = document.createElement("audio");
  audioIntro.src = "Audio/intro.mp3";
  audioIntro.autoplay = true;
  document.body.appendChild(audioIntro);
});
let button1 = document.getElementById("continuar");

button1.addEventListener("click", () => {
  let pesebre = document.getElementById("contenedor-pesebre");
  pesebre.classList.toggle("hidden");
});
const volverIntentar = document.getElementById('volver-intentar');

volverIntentar.addEventListener('click', () => {
  location.reload();
});
