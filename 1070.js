//SIX ODD NUMBERS
var input = `8`;
var lines = input.split('\n');

let number = Number(lines[0]);
  
for (let index = 1; index <= 12; index++) {
    let reminder = number % 2;
    if (reminder !== 0) {
        console.log(number);
    }
    ++number;
}


// Read an integer value X and print the 6 consecutive odd numbers from X, a value per line, including X if it is the case.

// Input
// The input will be a positive integer value.

// Output
// The output will be a sequence of six odd numbers.

// Input Sample	Output Sample
// 8

// 9
// 11
// 13
// 15
// 17
// 19
