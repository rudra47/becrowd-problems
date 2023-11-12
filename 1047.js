//Game Time With Minutes
var input = `7 10 8 9`;
var lines = input.split(' ');

let initialHour     = Number(lines[0]);
let initialMinute   = Number(lines[1]);
let finalHour       = Number(lines[2]);
let finalMinute     = Number(lines[3]);
let hourDuration    = 0;
let minuteDuration  = 0;

if (finalHour > initialHour) {
    hourDuration = finalHour - initialHour;
}else if (initialHour === finalHour) {
    hourDuration = 24;
}else{
    hourDuration = (24 - initialHour) + finalHour;
}

hourDuration = initialMinute > finalMinute ? --hourDuration : hourDuration;

if (finalMinute > initialMinute) {
    minuteDuration = finalMinute - initialMinute;
}else if (initialMinute === finalMinute) {
    minuteDuration = 0;
}else{
    minuteDuration = (60 - initialMinute) + finalMinute;
}

console.log("O JOGO DUROU "+hourDuration+" HORA(S) E "+minuteDuration+" MINUTO(S)");

//Problem: 

// Read the start time and end time of a game, in hours and minutes (initial hour, initial minute, final hour, final minute). 
// Then print the duration of the game, knowing that the game can begin in a day and finish in another day,

// Obs.: With a maximum game time of 24 hours and the minimum game time of 1 minute.

// Input
// Four integer numbers representing the start and end time of the game.

// Output
// Print the duration of the game in hours and minutes, in this format: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . Which means: 
//the game lasted XXX hour(s) and YYY minutes.

// Input Sample	Output Sample
// 7 8 9 10

// O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)

// 7 7 7 7

// O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)

// 7 10 8 9

// O JOGO DUROU 0 HORA(S) E 59 MINUTO(S)