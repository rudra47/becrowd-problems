var input = "3.0 4.0 5.2";
var lines = input.split(' ');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);

let triangulo = (a * c) / 2;
let circulo = 3.14159 * Math.pow(c, 2);
let trapezio = ((a + b)/2) * c;
let quadrado = Math.pow(b, 2);
let retangulo = a * b;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}
CIRCULO: ${circulo.toFixed(3)}
TRAPEZIO: ${trapezio.toFixed(3)}
QUADRADO: ${quadrado.toFixed(3)}
RETANGULO: ${retangulo.toFixed(3)}`);