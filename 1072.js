//INTERVAL 2
var input = `4
14
123
10
-25`;
var lines = input.split('\n');

let n = lines[0];
let countIn = 0;
let countOut = 0;

if (n < 10000) {
    for (let index = 1; index <= n; index++) {
        if (lines[index] >= 10 && lines[index] <= 20) {
            countIn++;
        }else{
            countOut++
        }
    }
}

console.log(`${countIn} in
${countOut} out`);


// Read an integer N. This N will be the number of integer numbers X that will be read.

// Print how many these numbers X are in the interval [10,20] and how many values are out of this interval.
 

// Input
// The first line of input is an integer N (N < 10000), that indicates the total number of test cases.
// Each case is an integer number X (-10 to the power 7 < X < 10 to the power 7).

 

// Output
// For each test case, print how many numbers are in and how many values are out of the interval.

// Input Sample	
// 4
// 14
// 123
// 10
// -25

//Output Sample
// 2 in
// 2 out
