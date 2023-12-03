// Quadrant
let input = `2 2
3 -2
-8 -1
-7 1
0 2`;
let lines = input.split('\n');

for (let index = 0; index < lines.length; index++) {
    let point = lines[index].split(' ');
    let a = Number(point[0]);
    let b = Number(point[1]);

    if (!a || !b) {
        break;
    }
    if (a > 0 && b > 0) {
        console.log('primeiro');
    }else if (a > 0 && b < 0) {
        console.log('quarto');
    }else if (a < 0 && b < 0) {
        console.log('terceiro');
    }else if (a < 0 && b > 0) {
        console.log('segundo');
    }
    
}


// Write a program to read the coordinates (X, Y) of an indeterminate number of points in Cartesian system. For each point write the quadrant to which it belongs. 
// The program finish when at least one of two coordinates is NULL (in this situation without writing any message).

// Input
// The input contains several tests cases. Each test case contains two integer numbers.

// Output
// For each test case, print the corresponding quadrant which these coordinates belong, as in the example.

// Input Sample	Output Sample
// 2 2          primeiro
// 3 -2         quarto
// -8 -1        terceiro
// -7 1         segundo
// 0 2
