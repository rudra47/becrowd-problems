// Rest of a Division
let input = `10
18`;
let lines = input.split('\n');

let x = Number(lines[0]);
let y = Number(lines[1]);

for (let index = x; index < y; index++) {
    if (index % 5 === 2 || index % 5 === 3) {
        console.log(index);
    }
    
}

//Write a program that reads two integer numbers X and Y. Print all numbers between X and Y which dividing it by 5 the rest is equal to 2 or equal to 3.

// Input
// The input file contains 2 any positive integers, not necessarily in ascending order.

// Output
// Print all numbers according to above description, always in ascending order.

// Input Sample	Output Sample
// 10
// 18

// 12
// 13
// 17