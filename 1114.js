//Fixed Password
let input = `2200
1020
2022
2002`;
let lines = input.split('\n');

for (let index = 0; index < lines.length; index++) {
    let testCase = Number(lines[index]);
    
    if (testCase !== 2002) {
        console.log("Senha Invalida");
    }else{
        console.log('Acesso Permitido');
        break;
    }
}


// Write a program that keep reading a password until it is valid. For each wrong password read, write the message "Senha inválida". When the password is typed 
// correctly print the message "Acesso Permitido" and finished the program. The correct password is the number 2002.

// Input
// The input file contains several tests cases. Each test case contains only an integer number.

// Output
// For each number read print a message corresponding to the description of the problem.

// Input Sample	Output Sample
// 2200         Senha Invalida
// 1020         Senha Invalida
// 2022         Senha Invalida
// 2002         Acesso Permitido

