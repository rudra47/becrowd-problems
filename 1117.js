// Score Validation
let input = `-3.5
3.5
11.0
10.0`;
let lines = input.split('\n');

let count = 0;
let totalScore = 0;
for (let index = 0; index < lines.length; index++) {
    let score = lines[index];
    if (score<0 || score>10) {
        console.log('nota invalida');
    }else{
        count++;
        totalScore += Number(lines[index]);
    }
}

// Write a program that reads two scores of a student. Calculate and print the average of these scores. Your program must accept just valid scores [0..10]. Each 
// score must be validated separately.

// Input
// The input file contains many floating-point numbers​​, positive or negative. The program execution will be finished after the input of two valid scores.

// Output
// When an invalid score is read, you should print the message "nota invalida".
// After the input of two valid scores, the message "media = " must be printed followed by the average of the student. The average must be printed with 2 numbers 
// after the decimal point.

// Input Sample	Output Sample
// -3.5
// 3.5
// 11.0
// 10.0

// nota invalida
// nota invalida
// media = 6.75