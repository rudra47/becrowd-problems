// Array change I
let input = `0
-5
63
230`;
let lines = input.split('\n');

let decrementNum = 20;

for (let i = 0; i < 20; i++) {
    decrementNum--;

    console.log(`N[${i}] = ${lines[decrementNum]}`);
}

// Write a program that reads an array N [20]. After, change the first element by the last, the second element by the last but one, etc.., Up to change the 10th 
// to the 11th. print the modified array.

// Input
// The input contains 20 integer numbers, positive or negative.

// Output
// For each position of the array N print "N[i] = Y", where i is the array position and Y is the number stored in that position.

// Input Sample	
// 0
// -5
// ...
// 63
// 230

//Output Sample
// N[0] = 230
// N[1] = 63
// ...
// N[18] = -5
// N[19] = 0