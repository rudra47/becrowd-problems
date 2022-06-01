var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let name = lines.shift();
let fixed_salery = lines.shift();
let total_sale = lines.shift();

let total_salery = parseFloat(fixed_salery) + parseFloat(total_sale) * 0.15;

console.log("TOTAL = R$ " + total_salery.toFixed(2));