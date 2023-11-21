//EVENT TIME
var input = `5
08 : 12 : 23
9
06 : 13 : 23`;
var lines = input.split('\n');

let startDay = Number(lines[0]);
let startTime = lines[1].split(":");
let endDay = Number(lines[2]);
let endTime = lines[3].split(":");
let totalDay = 0;
let totalHour = 0;
let totalMinute = 0;
let totalSecond = 0;

totalDay = endDay - startDay;

totalHour = Number(endTime[0]) - Number(startTime[0]);
if (totalHour < 0) {
    totalHour = 24 + totalHour;
    totalDay--;
}

totalMinute = Number(endTime[1]) - Number(startTime[1]);
if (totalMinute < 0) {
    totalMinute = 60 + totalMinute;
    totalHour--;
    
    if (totalHour < 0) {
        totalHour = 24 + totalHour;
    }
}

totalSecond = Number(endTime[2]) - Number(startTime[2]);
if (totalSecond < 0) {
    totalSecond = 60 + totalSecond;
    totalMinute--;
    
    if (totalMinute < 0) {
        totalMinute = 60 + totalMinute;
    }
}
totalDay=totalDay ? totalDay : 0;
console.log(`${totalDay} dia(s)
${totalHour} hora(s)
${totalMinute} minuto(s)
${totalSecond} segundo(s)`);




// Peter is organizing an event in his University. The event will be in April month, beginning and finishing within April month. 
// The problem is: Peter wants to calculate the event duration in seconds, knowing obviously the begin and the end time of the event.

// You know that the event can take from few seconds to some days, so, you must help Peter to compute the total time corresponding 
// to duration of the event.

// Input
// The first line of the input contains information about the beginning day of the event in the format: “Dia xx”. The next line 
// contains the start time of the event in the format presented in the sample input. Follow 2 input lines with same format, 
// corresponding to the end of the event.

// Output
// Your program must print the following output, one information by line, considering that if any information is null for example, 
// the number 0 must be printed in place of W, X, Y or Z:

// W dia(s)
// X hora(s)
// Y minuto(s)
// Z segundo(s)

// Obs: Consider that the event of the test case have the minimum duration of one minute. “dia” means day, “hora” means hour, 
// “minuto” means minute and “Segundo” means second in Portuguese.

// Input Sample	
//START TIME
// Dia 5
// 08 : 12 : 23

//END TIME
// Dia 9
// 06 : 13 : 23


// Output Sample
// 3 dia(s)
// 22 hora(s)
// 1 minuto(s)
// 0 segundo(s)
