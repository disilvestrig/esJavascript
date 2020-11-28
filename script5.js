'use strict'
/*
What is the code below going to output?
alert( null || 2 || undefined );
*/
// It outputs 2

/*
What will the code below output?
alert( alert(1) || 2 || alert(3) );
*/
// It outputs 1 and 2 because a function returns undefined so false

/*
What is this code going to show?
alert( 1 && null && 2 );
*/
//it outputs null

/*
What will this code show?
alert( alert(1) && alert(2) );
*/
//It outputs 1 and undefined

/*
What will the result be?
alert( null || 2 && 3 || 4 );
*/
// 3 perchè quando c'è && tra due numeri viene ritornato il maggiore

/*
Write an if condition to check that age is between 14 and 90 inclusively.
“Inclusively” means that age can reach the edges 14 or 90.
*/
let age = prompt("Insert your age", "")

if (14 <= +age && +age <= 90){
    alert ('true')
}
else{
    alert('false')
}

/*
Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.
*/

if (!(14 <= +age && +age <= 90)){
    alert("L'età non è compresa tra 14 e 90")
}

if (14 >= +age || +age >= 90){
    alert("L'età non è compresa tra 14 e 90")
}

/*
Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
*/
// -1 first ; 0  ; 1 'third'

/*
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
The schema:
*/

let login = prompt("Who are you ? ","")
if (login == "Admin"){
    let password = prompt ("Insert a password","")
    if (password == "TheMaster"){
        alert("Welcome")
    }
    else if(password == ""){
        alert("Canceled")
    }
    else{
        alert("Wrong password")
    }
}
else if (login == ""){
    alert("Canceled")
}
else {
    alert("I don't know you")
}

/*
What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
}
*/
// the last value is 1

/*
For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?

The prefix form ++i:

let i = 0;
while (++i < 5) alert( i );
The postfix form i++

let i = 0;
while (i++ < 5) alert( i );
*/
//1) 1 2 3 4 ; 2) 1 2 3 4 5

/*For each loop write down which values it is going to show. Then compare with the answer.

Both loops alert same values or not?

The postfix form:

for (let i = 0; i < 5; i++) alert( i );
The prefix form:

for (let i = 0; i < 5; ++i) alert( i );*/
// 1) 0 1 2 3 4  2) 0 1 2 3 4 

//Use the for loop to output even numbers from 2 to 10.

for(let i = 2;i <= 10; i++){
    alert(i)
}

/*Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

 for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}*/
let i = 0
while(i < 3){
    alert( `number ${i++}!` )
}

/*Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.*/

while (+prompt("Insert a number greater than 100","")<=100){}

/*An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.*/

let limit = +prompt("Insert the limit number which could be the greatest prime","")
let intprime = true
let a = 2
alert(`Primes list less than ${limit}`)
for (let i = 2 ;i<limit;i++){
    intprime = true
    a = 2
    while (a <= i/2){
        if (i%a == 0){
            intprime = false
            break
        }
        a++
    }
    if (intprime){
        alert(i)
    }
    else{
      continue
    }
}