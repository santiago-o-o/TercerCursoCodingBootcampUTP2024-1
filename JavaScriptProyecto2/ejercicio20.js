// declaramos prompt como costante 

const prompt = require('prompt-sync')();

//cremaos la funcion flecha rush 
const rush = (x, y) => {

      //decimos que (x) y (y) se numeros enteros y mayores a 1 
    if(Number.isInteger(x) && x == 1 && Number.isInteger(y) && y == 1){
      console.log(`(rush ${x},${y})`);
      console.log("/");
     }else if (Number.isInteger(x) && x == 1 && Number.isInteger(y) && y > 1){
      console.log(`(rush ${x},${y})`);
      console.log("/");
      for (let i = 0; i < y - 2; i++) {
        console.log("* " + " ".repeat(y - 2));
      }
      console.log("\\");
      

     }else if (Number.isInteger(x) && x > 1 && Number.isInteger(y) && y == 1){
      let borde1 = "/";
      for (let i = 2; i < x; i++) {
        borde1 += "*";
        }
        borde1 += "\\";

        console.log(`(rush ${x},${y})`);

      console.log(borde1);

      


     }else if (Number.isInteger(x) && x > 1 && Number.isInteger(y) && y > 1) {

        // creamos las funciones y le damos un valor inicial 
      let borde = "/";
      let bordeBajo = "\\";

      //le aumentamos valores alas funciones de *
      for (let i = 2; i < x; i++) {
        borde += "*";
        bordeBajo += "*";
      }
    
      //le damos un valor a borde final 
      borde += "\\";

      console.log(`(rush ${x},${y})`);

      console.log(borde);

      //creamos los espacios entre cada borde 
      for (let i = 0; i < y - 2; i++) {
        console.log("* " + " ".repeat(x - 3) + "*");
      }
      bordeBajo += "/";
      console.log(bordeBajo);

      //mandamos un mensaje de error si el if es falso 
    } else {
      console.error("error ingrese numeros positivos y mayores que 0 ");
    }
  };
  
  //pedimos al usuario los valores 
 
  let x = parseFloat(prompt("ingrese el valor de ancho: "));
  let y = parseFloat(prompt("ingrese el valor de altura: "));
  
  //llamamos la funcion
  rush(x, y);
  