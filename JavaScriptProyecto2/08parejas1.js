let a = -1;
let b = 0;


function tabla() {
    
//con este ciclo for cada 5 incrementos de b a se va incrementar 2 veses
for(i = 0; i < 5; i++){
    b++;
    for(j = 0;j < 2; j++){
        a++;
        console.log(`[${a},${b}]`)
    }
}

}

tabla();