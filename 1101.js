// Sum of Consecutive Odd Numbers II
let input = `5 2
6 3
5 0`;

let lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
   let num = '';
   let line = lines[i].split(' ');
   let m = Number(line[0]);
   let n = Number(line[1]);
   let numTotal = 0;

   if (m <= 0 || n <= 0) 
      break;

   if (n>m) {
      let reminder = m;
      m = n;
      n = reminder;
   }

}

// Read an undetermined number of pairs values M and N (stop when any of these values is less or equal to zero). For each pair, print the sequence from the smallest to the 
// biggest (including both) and the sum of consecutive integers between them (including both).

// Input
// The input file contains pairs of integer values M and N. The last line of the file contains a number zero or negative, or both.

// Output
// For each pair of numbers, print the sequence from the smallest to the biggest and the sum of these values, as shown below.

// Input Sample	Output Sample
// 5 2            2 3 4 5 Sum=14
// 6 3            3 4 5 6 Sum=18
// 5 0
