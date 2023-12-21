//POSITIVE NUMBER
var input = `7
-5
6
-3.4
4.6
12`;
var lines = input.split('\n');

let count = 0;

for (let index = 0; index < lines.length; index++) {
    if (lines[index] > 0) {
        ++count;
    }
}

console.log(count + " valores positivos");


// Write a program that reads 6 numbers. These numbers will only be positive or negative (disregard null values). Print the total 
// number of positive numbers.

// Input
// Six numbers, positive and/or negative.

// Output
// Print a message with the total number of positive numbers.

// Input Sample	Output Sample
// 7            4 valores positivos
// -5
// 6
// -3.4
// 4.6
// 12