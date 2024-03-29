//Even, Odd, Positive and Negative
var input = `-5
0
-3
-4
12`;
var lines = input.split('\n');

var countPositiveNum = 0;
var countNegativeNum = 0;
var countEvenNum = 0;
var countOddNum = 0;

for (let index = 0; index < lines.length; index++) {
    let value = Number(lines[index]);
    if (value !== 0) {
        if (value < 0) {
            countNegativeNum++;
        }else{
            countPositiveNum++;
        }
    }
    
    if ((parseInt(lines[index]) % 2) === 0) {
        countEvenNum++;
    }
    if ((parseInt(lines[index]) % 2) === 1){
        countOddNum++;
    }
}

console.log(`${countEvenNum} valor(es) par(es)
${countOddNum} valor(es) impar(es)
${countPositiveNum} valor(es) positivo(s)
${countNegativeNum} valor(es) negativo(s)`); 


// Make a program that reads five integer values. Count how many of these values are even, odd, positive and negative. Print these
// information like following example.

// Input
// The input will be 5 integer values.

// Output
// Print a message like the following example with all letters in lowercase, indicating how many of these values ​​are even, odd, 
// positive and negative.

// Input Sample	
// -5
// 0
// -3
// -4
// 12

//Output Sample
// 3 valor(es) par(es)
// 2 valor(es) impar(es)
// 1 valor(es) positivo(s)
// 3 valor(es) negativo(s)
