
var input = `500
35.0`;
var lines = input.split('\n');

let totalKm = Number(lines[0]);
let totalFuel = Number(lines[1]);

let result = totalKm / totalFuel;

console.log(result.toFixed(3) + " km/l");
