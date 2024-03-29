//S Sequence
// S = 1 + 1/2 + 1/3 + … + 1/100

let result = 0;
for (let i = 1; i <= 100; i++) {
    result += 1 / i;
}
console.log(result.toFixed(2));


// Write an algorithm to calculate and write the value of S, S being given by:
// S = 1 + 1/2 + 1/3 + … + 1/100

// Input
// There is no input in this problem.

// Output
// The output contains a value corresponding to the value of S.
// The value should be printed with two digits after the decimal point.