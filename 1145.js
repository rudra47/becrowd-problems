// Logical Sequence 2
let input = `3 99`;
let lines = input.split(' ');

let x = Number(lines[0]);
let y = Number(lines[1]);

if (x > y) {
    let b = x;
    x = y;
    y = x;
}

if ((x < y && y < 1000) && (x > 1 && x < 20)) {
    let digit = 0;
    let k = y / x;
    
    for (let i = 0; i < k; i++) {
        let output = '';
        for (let j = 1; j <= x; j++) {
            digit++;
            if (j != x) {
                output += digit + " "
            }else{
                output += digit
            }
    
            if (digit === y) {
                break;
            }
        }
    
        console.log(output);
    
        if (digit === y) {
            break;
        }
    }
}



// Write an program that reads two numbers X and Y (X < Y). After this, show a sequence of 1 to y, passing to the next line to each X numbers.

// Input
// The input contains two integer numbers X (1 < X < 20) and Y (X < Y < 100000).

// Output
// Each sequence must be printed in one line, with a blank space between each number, like the following example.

// Input Sample	
// 3 99

//Output Sample
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12
// ...
// 97 98 99