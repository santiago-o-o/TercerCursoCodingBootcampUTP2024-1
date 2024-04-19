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

//nos hase una pareja de numero 
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