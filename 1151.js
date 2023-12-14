//Easy Fibonacci
let input = `5`;
let lines = input.split('\n');

let n = Number(lines[0]);

let prev1 = 0;
let prev2 = 1;
let fibonacci = 0;

// while (1) {
//     if (count <= 1) {
//         fibonacci = count;
//     }else{
//        fibonacci = prev1 + prev2;
//        prev1 = prev2;
//        prev2 = fibonacci
//     }

//     if (fibonacci >= n) {
//         break;
//     }
//     process.stdout.write(fibonacci+ " ");
//     count++;
// }
for (let i = 0; i < n; i++) {
    if (i <= 1) {
        fibonacci = i;
    }else{
        fibonacci = prev1 + prev2;
        prev1 = prev2;
        prev2 = fibonacci;
    }

    if (i === n - 1) {
        console.log(fibonacci);
    }else{
        process.stdout.write(fibonacci+ " ");
    } 
}


// The following sequence of numbers 0 1 1 2 3 5 8 13 21 ... is known as the Fibonacci Sequence. Thereafter, each number after the first 2 is equal to the sum of 
// the previous two numbers. Write an algorithm that reads an integer N (N < 46) and that print the first N numbers of this sequence.

// Input
// The input file contains an integer number N (0 < N < 46).

// Output
// The numbers ​​should be printed on the same line, separated by a blank space. There is no space after the last number.

// Thanks to Cássio F.

// Input Sample	
// 5

// Output Sample
// 0 1 1 2 3