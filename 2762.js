//Input and Output 6
let input = `12345.023`;
let lines = input.split('\n');

let numArray = lines[0].split('.');
let res = Number(numArray[1])+'.'+numArray[0];

console.log(res);


// Your teacher would like to make a program with the following characteristics:

// Read a number in the format: XXXXX.YYY;
// Print the number in inverted form: YYY.XXXXX.
// Input
// The inpuut consists of several test files. In each test file there is one line. The line has a real number with 3 decimal places. As shown in 
// the following input example.

// Output
// For each file in the input, you have an output file. The output file has a line as described in items 2. As shown in the following output example.

// Input Samples	Output Samples
// 123.456

// 456.123

// 12345.023

// 23.12345