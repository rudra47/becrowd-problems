//Age in Days
var input = `10.0 3.0 5.0`;
// var input = `5 6 7 8`;
var lines = input.split(' ');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);

let rootDigit = Math.pow(b, 2) - (4 * a * c);

if (a === 0 || rootDigit < 0) {
    console.log('Impossivel calcular');
}else{
    let x1 = (-b + Math.sqrt(rootDigit)) / (2 * a);
    let x2 = (-b - Math.sqrt(rootDigit)) / (2 * a);

console.log(`R1 = ${x1.toFixed(5)}
R2 = ${x2.toFixed(5)}`);

}
