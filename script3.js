'use strict'
let a = 1 ;
let b = 1;
let c = ++a;
let d = b++;
// a = 2 b = 2 c = 2 d = 1

a = 2
let x = 1 + (a *= 2);
 // x = 5 e a = 4

 "" + 1 + 0 // "10" (Se una stringa è in prima posizione tutti gli altri termini diventano stringhe)
 "" - 1 + 0 // -1
 true + false // 1
 6 / "3" // 2
 "2" * "3" // 6
 4 + 5 + "px" // "9px"
 "$" + 4 + 5 // "$45"
 "4" - 2 // 2
 "4px" - 2 // NaN
 7 / 0 // Infinity
 "  -9  " + 5 // " -9  5"
 "  -9  " - 5 // -14
 null + 1 // 1
 undefined + 1 // NaN (RICORDA : numero + undefined genera errore)
 " \t \n" - 2 // -2 perchè /t e /n sono spazi

a = prompt("First number?", 1);
b = prompt("Second number?", 2);

alert(+a + +b); // Dovevo fare in modo che il codice restituisse 3