let linea = ["","","","","","","","",""];

function valores(){
    let i = -1;

    const darValores = setInterval(() => {
        linea[i + 1] = "A";
        linea[7 - i] = "A";

        let inv = linea.join(" ");
        console.clear();
        console.log(inv);
        linea[i + 1] = "";
        linea[7 - i] = "";
        i++;
        if (i > 4) {
            clearInterval(darValores);

        }else if (i == 4){
            console.clear();
            console.log("    AA    ");
            clearInterval(darValores);
        }
    }, 1000);
}

valores();