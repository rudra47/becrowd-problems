let input = `3
3 -2
-8 0
0 8`;
let lines = input.split('\n');
let n = Number(lines[0]);

for (let index = 1; index <= n; index++) {
    let pair = lines[index].split(' ');
    let x = Number(pair[0]);
    let y = Number(pair[1]);

    let dividend = x / y;

    if (y) {
        console.log(dividend.toFixed(1));
    }else{
        console.log('divisao impossivel');
    }
}


// Write a program that read two numbers X and Y and print the result of dividing the X by Y. If it's not possible, print the message "divisao impossivel".

// Input
// The input contains an integer number N. This N is the quantity of pairs of integer numbers X and Y read (dividend and divisor).

// Output
// For each test case print the result of this division with one digit after the decimal point, or “divisao impossivel” if it isn't possible to perform the 
// calculation.

// Obs.: Be carefull. The division between two integers in some languages generates another integer. Use cast:)

// Input Sample	Output Sample
// 3
// 3 -2
// -8 0
// 0 8

// -1.5
// divisao impossivel
// 0.0