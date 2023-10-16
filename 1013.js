var input = "7 14 106";
var lines = input.split(' ');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);

let maiorAB = (a+b+ Math.abs(a-b)) / 2;
let maior = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(maior + " eh o maior");