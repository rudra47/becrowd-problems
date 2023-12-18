//Sum of Consecutive Odd Numbers III
let input = `2
4 3
11 2`;
let lines = input.split('\n');

let n = Number(lines[0]);

for (let i = 1; i <= n; i++) {
    const testCase = lines[i].split(' ');
    let x = Number(testCase[0]);
    let y = Number(testCase[1]);

    let sum = 0, count = 1;

    while (count <= y) {
        let divisor = x % 2;
        if (divisor !== 0) {
            sum += x;
            count++;
        }
    }
}




// Read an integer N that is the number of test cases that follows. Each test case contains two integers X and Y. Print one output 
// line for each test case that is the sum of Y odd numbers from X including it if is the case. For example:
// for the input 4 5, the output must be 45, that is: 5 + 7 + 9 + 11 + 13
// for the input 7 4, the output must be 40, that is: 7 + 9 + 11 + 13

// Input
// The first line of the input is an integer N that is the number of test cases that follow. Each test case is a line containing two integer X and Y.

// Output
// Print the sum of all consecutive odd numbers from X.

// Input Sample	
// 2
// 4 3
// 11 2

//Output Sample
// 21
// 24