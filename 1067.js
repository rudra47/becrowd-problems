//ODD NUMBER
var input = `8`;
var lines = input.split('\n');

let number = Number(lines[0]);

if (number > 0 && number < 1000) {    
    for (let index = 0; index <= number; index++) {
        let reminder = index % 2;
        if (reminder !== 0) {
            console.log(index);
        }
    }
}


// Read an integer value X (1 <= X <= 1000).  Then print the odd numbers from 1 to X, each one in a line, including X if is the 
// case.

// Input
// The input will be an integer value.

// Output
// Print all odd values between 1 and X, including X if is the case.

// Input Sample	
// 8

// Output Sample
// 1
// 3
// 5
// 7
