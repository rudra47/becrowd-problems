//Highest and Position
var input = `500
10
1
99
666`; // here will be 100 input. but I have tested with 5

var lines = input.split('\n');

let memory = 0;
let position = 0;
for (let index = 0; index < 5; index++) {
    if (memory < Number(lines[index])) {
        position = index + 1;
        memory = Number(lines[index]);
    }
}

console.log(memory);
console.log(position);

// Read 100 integer numbers. Print the highest read value and the input position.

// Input
// The input file contains 100 distinct positive integer numbers.

// Output
// Print the highest number read and the input position of this value, according to the given example.

// Input Sample	
// 2
// 113
// 45
// 34565
// 6
// ...
// 8
 
//Output Sample
// 34565
// 4