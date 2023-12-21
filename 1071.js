//SUM OF CONSECUTIVE ODD NUMBERS I
var input = `12
12`;
var lines = input.split('\n');

let number1 = Number(lines[0]);
let number2 = Number(lines[1]);
let sum     = 0;

for (let index = ++number2; index < number1; ++index) {
    let reminder = index % 2;
    if (reminder !== 0) {
        sum = sum + index;
    }  
}

console.log(sum);

// Read two integer values X and Y. Print the sum of all odd values between them.

// Input
// The input file contain two integer values.

// Output
// The program must print an integer number. This number is the sum off all odd values between both input values that must fit in 
// an integer number.

// Sample Input	Sample Output
// 6            5
// -5

// 15           13
// 12

// 12           0
// 12
