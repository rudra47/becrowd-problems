// Simple Factorial
let input = `4`;
let lines = input.split('\n');

let n = Number(lines[0]);
let factorial = 1;

if (n > 0 && n < 13) { 
    for (let i = n; i > 0; i--) {
        factorial *= i;    
    }
    
    console.log(factorial);
}

// Read a value N. Calculate and write its corresponding factorial. Factorial of N = N * (N-1) * (N-2) * (N-3) * ... * 1.

// Input
// The input contains an integer value N (0 < N < 13).

// Output
// The output contains an integer value corresponding to the factorial of N.

// Input Sample	
// 4

// Output Sample
// 24