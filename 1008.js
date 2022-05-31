var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = lines.shift();
let hour = lines.shift();
let amount = lines.shift();

let salary = hour * amount;

console.log("NUMBER = " + number);
console.log("SALARY = U$ ", salary.toFixed(2));