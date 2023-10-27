//Snack
var input = `-14 21 7`;
var lines = input.split(' ');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);
let temp = 0;

if (a > b) {
    temp = a;
    a = b;
    b = temp;
}
if (a > c) {
    temp = a;
    a = c;
    c = temp;
}
if (b > c) {
    temp = b;
    b = c;
    c = temp;
}

console.log(`${a}
${b}
${c}
`);

input.split(' ').map((value)=>{
    console.log(Number(value));
});