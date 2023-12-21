//Even Square
var input = `4
-5
0
3
-4`;
var lines = input.split('\n');

let n = lines[0];

if (n<10000) {
    for (let index = 1; index <= n; index++) {
        if (Number(lines[index]) === 0) {
            console.log("NULL");
        }else{
            if (Number(lines[index]) % 2 === 0) {
                if (Number(lines[index]) < 0) {
                    console.log('EVEN NEGATIVE');
                }else{
                    console.log('EVEN POSITIVE');
                }
            }else{
                if (Number(lines[index]) < 0) {
                    console.log('ODD NEGATIVE');
                }else{
                    console.log('ODD POSITIVE');
                }
            }
        }
    }
}


// Read an integer value N. After, read these N values and print a message for each value saying if this value is odd, even, 
// positive or negative. In case of zero (0), although the correct description would be "EVEN NULL", because by definition zero is 
// even, your program must print only "NULL", without quotes.

// Input
// The first line of input is an integer N (N < 10000), that indicates the total number of test cases. Each case is a integer 
// number X (-10^7 < X <10^7)..

// Output
// For each test case, print a corresponding message, according to the below example. All messages must be printed in uppercase 
// letters and always will have one space between two words in the same line.

// Input Sample	Output Sample
// 4            
// -5           ODD NEGATIVE
// 0            NULL
// 3            ODD POSITIVE
// -4           EVEN NEGATIVE
