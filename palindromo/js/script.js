// prendo l'input dall'utente, trasformando tutto in maiuscolo
const input = prompt().toUpperCase();

// funzione per verificare se la stringa è palindroma
function palindromoCheck(string) {

    // salvo il valore(numero) pari alla metà della lunghezza della stringa
    const numb = Math.floor(input.length / 2);

    // la variabile y mi serve per per confrontare i caratteri partendo dalla fine
    let y = input.length - 1;

    for (let i = 0; i < numb; i++) {

        // se i caratteri agli antipodi non sono uguali esco dalla funzione con false
        //decremento anche la variabile y di 1
        if (string[i] !== string[y--]) {
            return false;
        }
    }

    // se la stringa è palindroma ritorno true
    return true;
}

// verifico se la stringa è palindroma, richiamando la funzione
if (palindromoCheck(input)) {
    alert(`${input} è palindormo`)
} else {
    alert(`${input} non è palindormo`)
}