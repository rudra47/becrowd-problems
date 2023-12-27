//Fibonacci Array
const start = Date.now();
let input = `3
45
4
2`;
let lines = input.split('\n');

let t = Number(lines.shift());


for (let i = 0; i < t; i++) {
    let num = Number(lines.shift());

    let prev1 = 0;
    let prev2 = 1;
    let fibonacci = 0;

    for (let j = 0; j <= num; j++) {
        if (j <= 1) {
            fibonacci = j;
        }else{
            fibonacci = prev1 + prev2;
            prev1 = prev2;
            prev2 = fibonacci;
        }
    }

    console.log(`Fib(${num}) = ${fibonacci}`);
}

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used.toFixed(2)} MB`);

// Write a program that reads a number and print the Fibonacci number corresponding to this read number. Remember that the first elements 
// of the Fibonacci series are 0 and 1 and each next term is the sum of the two preceding it. All the Fibonacci numbers calculated in 
// this program must fit in a unsigned 64 bits number.

// Input
// The first line of the input contains a single integer T, indicating the number of test cases. Each test case contains a single integer 
// N (0 ≤ N ≤ 60), corresponding to the N-th term of the Fibonacci series.

// Output
// For each test case in the input, print the message "Fib(N) = X", where X is the N-th term of the Fibonacci series.

// Input Sample	Output Sample
// 3
// 0
// 4
// 2

// Fib(0) = 0
// Fib(4) = 3
// Fib(2) = 1