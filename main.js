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