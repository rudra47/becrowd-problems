var input = '3';
var lines = input.split('\n');

let radius = parseFloat(lines[0]);
let pi = 3.1416;

let result = (4/3) * pi * Math.pow(radius, 3);

console.log('VOLUME = ' + result.toFixed(3));