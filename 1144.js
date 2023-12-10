// Logical Sequence
let input = `5`;
let lines = input.split('\n');

let n = Number(lines[0]);

for (let i = 1; i <= n; i++) {
    let output = '';
    let output2 = '';
    let square = 0;
    let cubic = 0;

    for (let j = 1; j <= 3; j++) {
        if (j === 1) {
            output += i+' '
        }else if(j === 2){
            square = i * i
            output += square+" "
        }else{
            cubic = i * i * i;
            output += cubic
        }
    }
    for (let k = 1; k <= 3; k++) {
        
    }

}


// Write a program that reads an integer N. N * 2 lines must be printed by this program according to the example below. For numbers with more 
// than 6 digits, all digits must be printed (no cientific notation allowed).

// Input
// The input file contains an integer N (1 < N < 1000).

// Output
// Print the output according to the given example.

// Input Sample	
// 5

// Output Sample
// 1 1 1
// 1 2 2
// 2 4 8
// 2 5 9
// 3 9 27
// 3 10 28
// 4 16 64
// 4 17 65
// 5 25 125
// 5 26 126