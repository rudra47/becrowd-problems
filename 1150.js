// Exceeding Z
let input = `21
21
15
30`;

let lines = input.split('\n');

let x = parseInt(lines.shift());
let z = parseInt(lines.shift());

while (x >= z) {
    z = parseInt(lines.shift());
}

let count = 0;
let sum = 0;
while (sum < z) {
    sum += x;

    count++;
    x++;
}

console.log(count);


// write a program that reads two integers: X and Z (Z must be read as many times as necessary, until a number greater than X is read). Count how many integers must be 
// summed in sequence (starting at and including X) so that the sum exceeds Z the minimum possible and writes this number.

// The input may have, for example, the numbers ​​21 21 15 30. In this case, the number 21 is assumed for X, The numbers 21 and 15 must be ignored because they are 
// smaller or equal to X. The number 30 is within the specification (greater than X) and is valid. So, the final result must be 2 for this test case, because 
// the sum (21 + 22) is bigger than 30.

// Input
// The input contains only integer values​​, one per line, which may be positive or negative. The first number is the value of X. The next line will contain Z. If Z 
// does not meet the specification of the problem, it should be read again, as many times as necessary.

// Output
// Print a line with an integer number representing the among of integer numbers that must be summed.

// Input Sample	
// 3
// 1
// 20

// Output Sample
// 5