//
let input = `5 4
7 2
3 8
2 2`;
var lines = input.split('\n');

for (let index = 0; index < lines.length; index++) {
    let pair = lines[index].split(' ');
    let a = Number(pair[0]);
    let b = Number(pair[1]);

    if (a < b) {
        console.log('Crescente');
    }else if (a > b){
        console.log('Decrescente');
    }else{
        break;
    }
}


// Read an undetermined number of pairs of integer values. Write a message for each pair indicating if this two numbers are in 
// ascending or descending order.

// Input
// The input file contains several test cases. Each test case contains two integer numbers X and Y. The input will finished when 
// X = Y.

// Output
// For each test case print “Crescente”, if the values X and Y are in ascending order, otherwise print “Decrescente”.

// Input Sample	Output Sample
// 5 4          Decrescente
// 7 2          Decrescente
// 3 8          Crescente
// 2 2
