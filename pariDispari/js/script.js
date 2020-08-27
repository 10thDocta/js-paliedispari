// chiedo tramite prompt di scegliere tra pari e dispari
var input = prompt('scegliere pari o dispari').toLowerCase();

// chiedo tramite prompt di scegliere un numero tra 1 e 5
var inputNumber = parseInt(prompt('inserire un numero da 1 a 5'), 10);

// creo un numero randomico tra 1 e 5
var randomNumber = Math.floor(Math.random() * 5) + 1;

// sommo il valore preso tramite prompt e quello randomico
var sum = inputNumber + randomNumber;


// funzione per definire se la somma dei 2 numeri è pari o dispari
function sumPariDispari(sum) {

    // metto le cifre singole della somma in un array, per poterle manipolare.
    // transformo prima tutto in stringa, ma l'arrey viene popolati di valori numerici grazie a "Number"
    var arrayOfDigits = Array.from(String(sum), Number);
    var newSum = 0;

    for (let i = 0; i < arrayOfDigits.length; i++) {
        newSum += arrayOfDigits[i];
    }

    return newSum;
}

// controllo chi ha vinto
if (sumPariDispari(sum) % 2 == 0) {
    if (input == "pari") {
        console.log('user wins');
    } else {
        console.log('AI wins');
    }
} else {
    if (input == "dispari") {
        console.log('user wins');
    } else {
        console.log('AI wins');
    }
}