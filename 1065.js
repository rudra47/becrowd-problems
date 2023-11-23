//EVEN BETWEEN FIVE NUMBERS
var input = `7
-5
6
-4
12`;
var lines = input.split('\n');

var countOfEvenNum = 0;

for (let index = 0; index < lines.length; index++) {
    let value = parseInt(lines[index]);

    if ((value % 2) === 0) {
        countOfEvenNum++;
    }
}

console.log(`${countOfEvenNum} valores pares`);


// Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the .
// following example.

// Input
// The input will be 5 integer values.

// Output
// Print a message like the following example with all letters in lowercase, indicating how many even numbers were typed.

// Input Sample	
// 7
// -5
// 6
// -4
// 12

// Output Sample
// 3 valores pares
