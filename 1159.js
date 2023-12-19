// Sum of Consecutive Even Numbers
let input = `4
11
0`;
let lines = input.split('\n');

let number, x=0;
while (true) {
    number = Number(lines[x]);
    res = 0;

    if (number === 0) {
        break;
    }

    for (let i = 0; i < 5; ) {
        if (number % 2 === 0) {
            res += number;
            i++;
        }
        number++;
    }
    console.log(res);

    x++;
}


// The program must read an integer X indefinite times (stop when X=0). For each X, print the sum of five consecutive even numbers 
// from X, including it if X is even. If the input number is 4, for example, the output must be 40, that is the result of the 
// operation: 4+6+8+10+12. If the input number is 11, for example, the output must be 80, that is the result of 12+14+16+18+20.

// Input
// The input file contains many integer numbers. The last one is zero.

// Output
// Print the output according to the example below.

// Input Sample	
// 4
// 11
// 0

//Output Sample
// 40
// 80