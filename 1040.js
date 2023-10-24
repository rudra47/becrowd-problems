//Snack
var input = `2.0 4.0 7.5 8.0
6.4`;
var lines = input.split('\n');
let score = lines[0].split(' ');

let n1 = Number(score[0]);
let n2 = Number(score[1]);
let n3 = Number(score[2]);
let n4 = Number(score[3]);

let avg = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / (2+3+4+1);

console.log('Media: '+ avg.toFixed(1));

if (avg >= 7.0) {
    console.log('Aluno aprovado.');
}else if (avg < 5.0) {
    console.log('Aluno reprovado.');
}else if (avg >= 5.0 && avg <= 6.9) {
    console.log('Aluno em exame.');
    console.log('Nota do exame: '+ lines[1]);

    let avg2 = (avg + Number(lines[1])) / 2;

    if (avg2 >= 5.0) {
        console.log('Aluno aprovado.');
    }else{
        console.log('Aluno reprovado.');
    }

    console.log("Media final: " + avg2.toFixed(1));
}