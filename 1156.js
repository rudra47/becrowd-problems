// S Sequence II
// S = 1 + 3/2 + 5/4 + 7/8 + ... + 39/?

let result = 0;
let count = 1;

for (let i = 1; i < 40; i *= 2) {
    process.stdout.write(`${count}/${i} + `);
    result += count / i;

    count = count + 2;
}
console.log(result.toFixed(2));


//Write an algorithm to calculate and write the value of S, S being given by:
// S = 1 + 3/2 + 5/4 + 7/8 + ... + 39/?

// Input
// There is no input in this problem.

// Output
// The output contains a value corresponding to the value of S.
// The value should be printed with two digits after the decimal point.