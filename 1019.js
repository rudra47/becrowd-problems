var input = `140153`;
var lines = input.split('\n');

let totalSecond = Number(lines[0]);


let hour = Math.floor(totalSecond / (60 * 60));
let availableSecond = Math.floor(totalSecond % (60 * 60));
let minute = Math.floor(availableSecond / 60);
let second = Math.floor(availableSecond % 60);

console.log(hour+':'+minute+':'+second);