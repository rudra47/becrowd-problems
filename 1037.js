//Interval
var input = `-25.02`;
var lines = input.split('\n');

let a = Number(lines[0]);

if (0 <= a && a <= 25.00) {
    console.log(`Intervalo [0,25]`);
}else if (25.00 < a && a <= 50.00) {
    console.log(`Intervalo (25,50]`);
}else if (50.00 < a && a <=  75.00) {
    console.log(`Intervalo (50,75]`);
}else if (75.00 < a && a <= 100.00) {
    console.log(`Intervalo (75,100]`);
}else{
    console.log('Fora de intervalo');
}