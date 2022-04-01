/* Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */

const string = prompt('Scrivi una parola ');

function checkPalindrome(string) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] == string[len - 1 - i]) {
            return 'è palindroma';
        }
    }
    return 'non è palindroma';
}

console.log(checkPalindrome(string));


/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


//scelta utente pari o dispari
const sceltaUtente = prompt('scegli pari o dispari')
console.log(sceltaUtente);
//scelta numero utente da 1 a 5
const numberUtente = Number(prompt('inserisci un numero da 1 a 5'))
console.log('numero utente' + ' ' + numberUtente);

//funzione numero random
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
//numero random del pc da 1 a 5
let numberComputer = getRandomInteger(1,5)
console.log('numero computer' + ' ' + numberComputer);

//sommiamo i 2 numeri 
let somma = numberUtente + numberComputer
console.log('somma dei 2 numeri ' + somma);

//stabiliamo se somma è pari o dispari
function pariOdispari(number) {
    if (somma % 2 == 0) {
        return 'pari'
    }
    return 'dispari'
}

if (sceltaUtente == pariOdispari()) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}