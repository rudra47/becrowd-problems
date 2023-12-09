// Type of Fuel
let input = `8
1
7
2
2
4`;
let lines = input.split('\n');

let alcohol = 0;
let gasoline = 0;
let diesel = 0;

for (let index = 0; index < lines.length; index++) {
    const num = Number(lines[index]);
    if (num === 1) {
        alcohol++;
    }else if (num === 2) {
        gasoline++;
    }else if (num === 3) {
        diesel++;
    }
    
    if (num === 4) {
        break;
    }
}

console.log(`MUITO OBRIGADO
Alcool: ${alcohol}
Gasolina: ${ gasoline}
Diesel: ${diesel}`);



// A gas station wants to determine which of their products is the preference of their customers. Write a program to read the type of fuel 
// supplied (coded as follows: 1. Alcohol 2. Gasoline 3. Diesel 4. End). If you enter an invalid code (outside the range of 1 to 4) a 
// new code must be requested. The program will end when the inserted code is the number 4.

// Input
// The input contains only integer and positive values.

// Output
// It should be written the message: "MUITO OBRIGADO" and the amount of customers who fueled each fuel type, as an example.

// Input Sample	Output Sample
// 8
// 1
// 7
// 2
// 2
// 4

// MUITO OBRIGADO
// Alcool: 1
// Gasolina: 2
// Diesel: 0