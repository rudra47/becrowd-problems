//BANKNOTES 
var input = `11257`;
var lines = input.split('\n');

let value = Number(lines[0]);

if (0 < value && 1000000 > value) {
    let bankNote100 = Math.floor(value / 100);
    let availableAmount = Math.floor(value % 100);

    let bankNote50 = Math.floor(availableAmount / 50);
    availableAmount = Math.floor(availableAmount % 50); 

    let bankNote20 = Math.floor(availableAmount / 20);
    availableAmount = Math.floor(availableAmount % 20); 

    let bankNote10 = Math.floor(availableAmount / 10);
    availableAmount = Math.floor(availableAmount % 10); 

    let bankNote5 = Math.floor(availableAmount / 5);
    availableAmount = Math.floor(availableAmount % 5); 

    let bankNote2 = Math.floor(availableAmount / 2);
    availableAmount = Math.floor(availableAmount % 2); 
    
    let bankNote1 = Math.floor(availableAmount / 1);

console.log(`${value}
${bankNote100} nota(s) de R$ 100,00
${bankNote50} nota(s) de R$ 50,00
${bankNote20} nota(s) de R$ 20,00
${bankNote10} nota(s) de R$ 10,00
${bankNote5} nota(s) de R$ 5,00
${bankNote2} nota(s) de R$ 2,00
${bankNote1} nota(s) de R$ 1,00`);
}