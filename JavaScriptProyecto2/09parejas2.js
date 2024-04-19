//fecha y hora:15/04/2024 -5:56 pm 
/*
autores. ing andres mauricio robayo vargas , ing gabriel alejandro betancur rios, 
ing angie vanessa guazaquillo ospina, ing oscar julian salazar pinzon,
ing daniela panasso hernandez, ing luis panesso hernandez,
ing jordan valencia patiño. ing santiago ordoñez,ing angel henao, ing robert carvajal,
ing michael castro, ing juan esteban ortiz,




*/
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion

//nos hase un grupo de 3 numero 
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