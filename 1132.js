// Multiples of 13
let inputs = `100
200`;
let lines = inputs.split('\n');

let sum = 0;
let x = Number(lines[0])
let y = Number(lines[1])
let z;

if (x < y) {
    x = x;
    y = y;
}else{
    z = x;
    x = y;
    y = z;
}

for (let i = x; i <= y; i++) {
    if (i % 13 !== 0) {
        sum += i;
    }
}

console.log(sum);


// Write a program that reads two integer numbers X and Y and calculate the sum of all number not divisible by 13 between them, including both.

// Input
// The input file contains 2 integer numbers X and Y without any order.

// Output
// Print the sum of all numbers between X and Y not divisible by 13, including them if it is the case.

// Input Sample	Output Sample
// 100
// 200

// 13954