// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;
// creazione ciclo per chiedere all'utente i numeri 10 volte
for(let i = 1; i <= 10; i++) {
     // chiedo i numeri all'utente
    let userNumbers = parseInt( prompt('Dimmi un numero') );

    // ad ogni giro aggiungo il numero che mi darà lutente
    somma += userNumbers;
}

// stampo il risultato in pagina
console.log(somma)