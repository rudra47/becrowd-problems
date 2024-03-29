// Prime Number
let input = `3
8
51
7`;
let lines = input.split('\n');

let n = Number(lines.shift());
for (let i = 1; i <= n; i++) {
    let testCase = lines.shift();

    let count = 0;
    for (let j = 1; j <= testCase; j++) {
        if (testCase % j === 0) {
            count++;
        }
    }    
    
    if (count === 2)
        console.log(testCase + " eh primo");
    else
        console.log(testCase + " nao eh primo");

}



// A Prime Number is a number that is divisible only by 1 (one) and by itself. For example the number 7 is Prime, because it can be divided only by 1 and by 7.

// Input
// The input contains several test cases. The first contains the number of test cases N (1 ≤ N ≤ 100). Each one of the following N lines contains an integer 
// X (1 < X ≤ 107), that can be or not a prime number.

// Output
// For each test case print the message “X eh primo” (X is prime) or “X nao eh primo” (X isn't prime) according with to above specification.

// Input Sample	Output Sample
// 3
// 8            8 nao eh primo
// 51           51 nao eh primo
// 7            7 eh primo
