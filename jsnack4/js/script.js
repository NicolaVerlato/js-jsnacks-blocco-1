// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// creazione array
const array1 = [];

// creazione ciclo
for(let i = 1; i <= 6; i++) {
    // chiedere i numeri all'utente
    const userNumbers = parseInt( prompt('dammi un numero') );

    if(userNumbers % 2 !== 0) {
        array1.push(userNumbers);
    }
}

console.log(array1);