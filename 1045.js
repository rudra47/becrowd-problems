//Triangle Types
var input = `7.0 5.0 7.0`;
var lines = input.split(' ');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);
let temp = 0;

if (a < b) {
    temp = a;
    a = b;
    b = temp;
}
if (a < c) {
    temp = a;
    a = c;
    c = temp;
}
if (b < c) {
    temp = b;
    b = c;
    c = temp;
}

if (a >= (b + c)) {
    console.log('NAO FORMA TRIANGULO');
}else{
    let aSquare = a * a;
    let bSquare = b * b;
    let cSquare = c * c;
    
    if (aSquare === (bSquare + cSquare)) {
        console.log('TRIANGULO RETANGULO');
    }
    
    if(aSquare > (bSquare + cSquare)){
        console.log('TRIANGULO OBTUSANGULO');
    }
    
    if (aSquare < (bSquare + cSquare)) {
        console.log('TRIANGULO ACUTANGULO');
    }
    if((aSquare === bSquare) && (aSquare === cSquare) && (bSquare === cSquare)){
        console.log('TRIANGULO EQUILATERO');
    }
    if((a === b) && (a !== c) || (a === c) && (a !== b) || (b === c) && (b !== a)){
        console.log('TRIANGULO ISOSCELES');
    }
}


//PROBLEM:
// Read 3 double numbers (A, B and C) representing the sides of a triangle and arrange them in decreasing order, so that the side 
// A is the biggest of the three sides. Next, determine the type of triangle that they can make, based on the following cases always 
// writing an appropriate message:
// if A ≥ B + C, write the message: NAO FORMA TRIANGULO
// if A2 = B2 + C2, write the message: TRIANGULO RETANGULO
// if A2 > B2 + C2, write the message: TRIANGULO OBTUSANGULO
// if A2 < B2 + C2, write the message: TRIANGULO ACUTANGULO
// if the three sides are the same size, write the message: TRIANGULO EQUILATERO
// if only two sides are the same and the third one is different, write the message: TRIANGULO ISOSCELES
// Input
// The input contains three double numbers, A (0 < A) , B (0 < B) and C (0 < C).

// Output
// Print all the classifications of the triangle presented in the input.

// Input Samples	Output Samples
// 7.0 5.0 7.0

// TRIANGULO ACUTANGULO
// TRIANGULO ISOSCELES

// 6.0 6.0 10.0

// TRIANGULO OBTUSANGULO
// TRIANGULO ISOSCELES

// 6.0 6.0 6.0

// TRIANGULO ACUTANGULO
// TRIANGULO EQUILATERO

// 5.0 7.0 2.0

// NAO FORMA TRIANGULO

// 6.0 8.0 10.0

// TRIANGULO RETANGULO