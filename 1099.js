// Sum of Consecutive Odd Numbers II
let input = `7
4 5
13 10
6 4
3 3
3 5
3 4
3 8`;

let lines = input.split('\n');

let n = lines[0];

for (let index = 1; index <= n; index++) {
   let testCase = lines[index].split(' ');
   let a = Number(testCase[0]);
   let b = Number(testCase[1]);
   
   if (a > b) {
      let reminder = a;
      a = b;
      b = reminder;
   }

   let sum = 0;
   for (let j = a+1; j < b; j++) {
      if (j % 2) {
         sum += j
      }
   }
   
   console.log(sum);
}



// Read an integer N that is the number of test cases. Each test case is a line containing two integer numbers X and Y. Print the sum of all odd values between them, not 
// including X and Y.

// Input
// The first line of input is an integer N that is the number of test cases that follow. Each test case is a line containing two integer X and Y.

// Output
// Print the sum of all odd numbers between X and Y.

// Input Sample	Output Sample
// 7
// 4 5            0
// 13 10          11
// 6 4            5
// 3 3            0
// 3 5            0
// 3 4            0
// 3 8            12

