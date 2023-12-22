//Array Replacement I
let input = `0
-5
63
0`;
let lines = input.split('\n');

let list = [];
for (let i = 0; i < lines.length; i++) {
    let number = Number(lines[i]);

    if (number === 0 || number < 0) 
        list.push(1)
    else
        list.push(number)
}
for (let j = 0; j < list.length; j++) {
    console.log(`X[${j}] = ${Number(list[j])}`);
}

// Read an array X[10]. After, replace every null or negative number of X ​by 1. Print all numbers stored in the array X.

// Input
// The input contains 10 integer numbers. These numbers ​​can be positive or negative.

// Output
// For each position of the array, print "X [i] = x", where i is the position of the array and x is the number stored in that position.

// Input Sample	Output Sample
// 0            X[0] = 1
// -5           X[1] = 1
// 63           X[2] = 63
// 0            X[3] = 1
// ...          ...
