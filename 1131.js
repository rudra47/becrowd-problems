//Several Scores with Validation
let input = `3 2
1
2 3
1
3 1
2`;

let lines = input.split("\n");

let grenalCount = 0;
let interWon = 0
let gremioWon = 0
let draw = 0;
let num;

for (i = 0; i < lines.length; i++) {
    num = lines[i].split(' ');

    if (num.length === 2) {
        grenalCount++;

        if (Number(num[0]) > Number(num[1])) {
            interWon++;
        }else if(Number(num[0]) < Number(num[1])) {
            gremioWon++;
        }else{
            draw++;
        }
        console.log('Novo grenal (1-sim 2-nao)');
    }

    if(Number(num[0]) === 2 && num.length != 2){
        break;
    }
}

console.log(`${grenalCount} grenais
Inter:${interWon}
Gremio:${gremioWon}
Empates:${draw}`);

if (interWon > gremioWon) {
    console.log('Inter venceu mais');
}else if (interWon < gremioWon) {
    console.log('Gremio venceu mais');
}else{
    console.log('Não houve vencedor');
}

// The Federação Gaúcha de Futebol invited you to write a program to present a statistical result of several GRENAIS. Write a program that read the number of goals scored by Inter 
// and the number of goals scored by Gremio in a GRENAL. Write the message "Novo grenal (1-sim 2-nao)" and request a response. If the answer is 1, two new numbers must be read 
// (another input case) asking the number of goals scored by the teams in a new departure, otherwise the program must be finished, printing:

// - How many GRENAIS were part of the statistics.
// - The number of victories of Inter.
// - The number of victories of Gremio.
// - The number of Draws.
// - A message indicating the team that won the largest number of GRENAIS (or the message: "Não houve vencedor" if both team won the same quantity of GRENAIS).

// Input
// The input contains two integer values​​, corresponding to the goals scored by both teams. Then there is an integer (1 or 2), corresponding to the repetition of the algorithm.

// Output
// After each reading of the goals it must be printed the message "Novo grenal (1-sim 2-nao)". When the program is finished, the program must print the statistics as the example 
// below.

// Input Sample	
// 3 2
// 1
// 2 3
// 1
// 3 1
// 2

// Output Sample
// Novo grenal (1-sim 2-nao)
// Novo grenal (1-sim 2-nao)
// Novo grenal (1-sim 2-nao)
// 3 grenais
// Inter:2
// Gremio:1
// Empates:0
// Inter venceu mais
