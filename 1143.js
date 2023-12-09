// Squared and Cubic
let input = `5`;
let lines = input.split('\n');

let n = Number(lines[0]);

if (n > 1 && n < 1000) {
    for (let i = 1; i <= n; i++) {
        let a = 1;
        let output = '';
        for (let j = 1; j <= 3; j++) {
            a = a * i;
    
        }
    }
}

// Write a program that reads an integer N (1 < N < 1000). This N is the number of output lines printed by this program.

// Input
// The input file contains an integer N.

// Output
// Print the output according to the given example.

// Input Sample	Output Sample
// 5

// Output Sample
// 1 1 1
// 2 4 8
// 3 9 27
// 4 16 64
// 5 25 125