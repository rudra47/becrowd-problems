// Array Selection I
let input = `0
-5
63
-8.5`;
let lines = input.split('\n');

for (let i = 0; i < 100; i++) {
    if (Number(lines[i]) <= 10) {
        console.log(`A[${i}] = ${Number(lines[i]).toFixed(1)}`);
    }
}


// In this problem, your task is to read an array A[100]. At the end, print all array positions that store a number less or equal to 10 and the number stored in that 
// position.

// Input
// The input contains 100 numbers. Each number can be integer, floating-point number, positive or negative.

// Output
// For each number of the array that is equal to 10 or less, print "A [i] = x", where i is the position of the array and x is the number stored in the position, with 
// one digit after the decimal point.

// Input Sample	
// 0
// -5
// 63
// -8.5
// ...

// Output Sample
// A[0] = 0.0
// A[1] = -5.0
// A[3] = -8.5
// ...