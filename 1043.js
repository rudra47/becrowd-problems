//Triangle
var input = `6.0 4.0 2.1`;
var lines = input.split(' ');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);

if (a + b > c && a + c > b && b + c > a) {
    let perimetro = a + b + c;
    console.log('Perimetro = '+ perimetro.toFixed(1));
}else{
    let area = ((a + b) / 2) * c;
    console.log('Area = '+ area.toFixed(1));
}


// Problem:

// Read three point floating values (A, B and C) and verify if is possible to make a triangle with them. If it is possible, calculate the perimeter of the triangle and print the message:

// Perimetro = XX.X

// If it is not possible, calculate the area of the trapezium which basis A and B and C as height, and print the message:


// Area = XX.X

// Input
// The input file has tree floating point numbers.

// Output
// Print the result with one digit after the decimal point.

// Input Sample	Output Sample
// 6.0 4.0 2.0

// Area = 10.0

// 6.0 4.0 2.1

// Perimetro = 12.1
