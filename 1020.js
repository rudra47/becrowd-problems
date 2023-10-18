//Age in Days
var input = `800`;
var lines = input.split('\n');

let totalDays = Number(lines[0]);

let year = Math.floor(totalDays / 365);
let availableDays = Math.floor(totalDays % 365);

let month = Math.floor(availableDays / 30);
let days = Math.floor(availableDays % 30);

console.log(`${year} ano(s)
${month} mes(es)
${days} dia(s)`);