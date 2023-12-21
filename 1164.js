//Perfect Number
let input = `3
6
5
28`;
let lines = input.split('\n');

let n = lines.shift();
for (let i = 1; i <= n; i++) {
    let testCase = Number(lines.shift());
    
    let sum = 0;
    for (let x = 1; x < testCase; x++) {
        if (testCase % x === 0) 
            sum += x
    }

    if (sum === testCase) 
        console.log(`${testCase} eh perfeito`);
    else
        console.log(`${testCase} nao eh perfeito`);
}


//In mathematics, a perfect number is an integer for which the sum of all its own positive divisors (excluding itself) is equal 
// to the number itself. For example the number 6 is perfect, because 1+2+3 is equal to 6. Your task is to write a program that
// read integer numbers and print a message informing if these numbers are perfect or are not perfect.

// Input
// The input contains several test cases. The first contains the number of test cases N (1 ≤ N ≤ 100). Each one of the following N
// lines contains an integer X (1 ≤ X ≤ 108), that can be or not a perfect number.

// Output
// For each test case print the message “X eh perfeito” (X is perfect) or “X nao eh perfeito” (X isn't perfect) according with to 
// above specification.

// Input Sample	Output Sample
// 3
// 6
// 5
// 28

// 6 eh perfeito
// 5 nao eh perfeito
// 28 eh perfeito