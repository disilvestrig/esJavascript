// Esercizio : capire quale è il risultato booleano
5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // è true perchè il carattere 2 ha valore maggiore del carattere 1
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false
// 1 errore (comparazione 3)


// Esercizio : 'Hello' sarà stampato ?
if ("0") {
    alert( 'Hello' );
  }
// sì perchè la stringa è piena quindi viene convertita in true

// Esercizio: Chiedi all'utente quale è il nome ufficiale di js(ECMAScript),
// se risponde correttamente stampa "right !" altrimenti "You don't know? “ECMAScript”!"
// si possono utilizzare solo if ed else

let answer = prompt("What's the official name of JavaScript ?","")
if (answer == "ECMAScript"){
    alert("Right!")
}
else{
    alert("You don't know? It's 'ECMAScript'!")
}

//Exercise Using if..else, write the code which gets a number via prompt 
// and then shows in alert:
// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

let number = prompt("Insert a number ","")
number = Number(number)
if (number > 0){
    alert(1);
}
else if (number < 0){
    alert(-1);
}
else{
    alert(0);
}

//Rewrite this if using the conditional operator '?':
/*
let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/
let result = (a + b < 4) ? result = 'Below' : result = 'Over'

/*
Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/

let message = (login == 'Employee') ? 'Hello'     :
              (login == 'Director') ? 'Greetings' :
              (login == '')         ? 'No login'  :
              ''