var input = `10
85`;
var lines = input.split('\n');

let tripTimeHour = Number(lines[0]);
let averageSpeed = Number(lines[1]);

let totalDistance = tripTimeHour * averageSpeed;
let requiredFuel = totalDistance / 12;

console.log(requiredFuel.toFixed(3));