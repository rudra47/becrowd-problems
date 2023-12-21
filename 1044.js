//Multiples
var input = `6 24`;
var lines = input.split(' ');

let a = Number(lines[0]);
let b = Number(lines[1]);

if (a % b === 0 || b % a === 0) {
    console.log('Sao Multiplos');
}else{
    console.log('Nao sao Multiplos');
}

//Problem: 

// Read two integer values (A and B). After, the program should print the message "Sao Multiplos" (are multiples) or "Nao sao Multiplos" (aren’t multiples), corresponding to the read values.

// Input
// The input has two integer numbers.

// Output
// Print the relative message to the input as stated above.

// Input Sample	Output Sample
// 6 24

// Sao Multiplos

// 6 25

// Nao sao Multiplos