// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.

const numbers = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++) {
    let thisNumber = numbers[i];
    
    if(thisNumber % 2 === 0) {
        document.getElementById('verde').innerHTML += thisNumber + ' ';
        
    } else {
        document.getElementById('rosso').innerHTML += thisNumber + ' ';
    }
}
