let a = 0;
let b = 0;
let c = 0;

function tabla() {
    
//con este ciclo for cada 3 incrementos de b a se va incrementar 3 veses y c va a llegar a 3 y vuelve a 1 y hasi en ciclo
for(i = 0; i < 3; i++){
    b++;
    for(j = 0;j < 3; j++){
        a++;
        for(k = 0; k <= 0; k++){
        if(c <= 2){
            c++;
        } else{
            c = 1
        }
    }
    console.log(`[${a},${b},${c}]`)
}
}

}

tabla();