//Divisors I
let input = `6`;
let lines = input.split('\n');

let n = Number(lines[0]);

for (let i = 1; i <= n; i++) {
    let divisor = n % i;
    if (divisor === 0) {
        console.log(i);
    }
}


// Read an integer N and compute all its divisors.

// Input
// The input file contains an integer value.

// Output
// Write all positive divisors of N, one value per line.

// Input Sample	Output Sample
// 6

// 1
// 2
// 3
// 6