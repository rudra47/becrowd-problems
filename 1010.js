var input = `12 1 5.30
16 2 5.10`;
var lines = input.split('\n');



const [productCode1, productQuantity1, productPrice1] = lines[0].split(' ').map(parseFloat);
const [productCode2, productQuantity2, productPrice2] = lines[1].split(' ').map(parseFloat);

let multiply1 =  Number(productQuantity1) * Number(productPrice1);
let multiply2 =  Number(productQuantity2) * Number(productPrice2);

let total = multiply1 + multiply2; 

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));