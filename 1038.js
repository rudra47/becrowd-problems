//Snack
var input = '4 3';
var lines = input.split(' ');

let code = Number(lines[0]);
let value = Number(lines[1]);
let totalValue = 0;

if (code === 1) {
    totalValue = value * 4.00;
    console.log(`Total: R$ ${totalValue.toFixed(2)}`);
}
if (code === 2) {
    totalValue = value * 4.50;
    console.log(`Total: R$ ${totalValue.toFixed(2)}`);
}
if (code === 3) {
    totalValue = value * 5.00;
    console.log(`Total: R$ ${totalValue.toFixed(2)}`);
}
if (code === 4) {
    totalValue = value * 2.00;
    console.log(`Total: R$ ${totalValue.toFixed(2)}`);
}
if (code === 5) {
    totalValue = value * 1.50;
    console.log(`Total: R$ ${totalValue.toFixed(2)}`);
}
