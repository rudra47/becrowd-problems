//Age in Days
var input = `2 3 2 6`;
// var input = `5 6 7 8`;
var lines = input.split(' ');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);
let d = Number(lines[3]);

if ((b > c && d > a) && ((c+d) > (a+b)) && (c > 0 && d > 0) && (a%2 == 0)) {
    console.log('Valores aceitos');
}else{
    console.log("Valores nao aceitos");
}