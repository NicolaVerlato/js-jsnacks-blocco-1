// Chiedi un numero di 4 cifre all’utente nel prompt
//  e calcola la somma di tutte le cifre che compongono il numero.

let userNumbers = prompt('dimmi 4 numeri');

let somma = 0;
for(let i = 0; i < userNumbers.length; i++) {
    const singleNumber = parseInt(userNumbers[i]);

    somma += singleNumber;
}
console.log(somma)
