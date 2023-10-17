var input = `1.0 7.0
5.0 9.0`;
var lines = input.split('\n');
let p1 = lines[0].split(' ');
let p2 = lines[1].split(' ');

let x1 = Number(p1[0]);
let x2 = Number(p2[0]);
let y1 = Number(p1[1]);
let y2 = Number(p2[1]);

let square = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
let root = Math.sqrt(square);

console.log(root.toFixed(4));
