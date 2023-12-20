// Population Increase
let input = `6
100 150 1.0 0
90000 120000 5.5 3.5
56700 72000 5.2 3.0
123 2000 3.0 2.0
100000 110000 1.5 0.5
62422 484317 3.1 1.0`;

let lines = input.split('\n');

let t = Number(lines.shift());

if (t >= 1 && t <= 3000) {
    let x = 1;
    while (x <= t) {
        let [pa, pb, g1, g2] = lines.shift().split(' ').map(y => Number(y));
        let message = 'Mais de 1 seculo.';

        g1 /= 100;
        g2 /= 100;
    
        let paYear = 0;
        while (paYear <= 100) {
            pa += Math.floor(pa * g1);
            pb += Math.floor(pb * g2);

            paYear++;
            
            if (pa > pb) {
                break;
            }
        }

        if (paYear <= 100) 
            message = paYear+' anos.';

        console.log(message);

        x++;
    }
}


//Mariazinha wants to solve an interesting problem. Given the population and growing rate of 2 cities (A and B), she would like to know how many years would 
// be necessary to the smaller city (always A) to be greater than the larger city (always B) in population. Of course, she only wants to know the result for cities 
// that the growing rate for city A is bigger than the growing rate for city B, therefore, she separated these test cases for you. Your job is to build a program 
// that print the time in years for each test case.

// However, in some cases the time can be so big and Mariazinha don't want to know the exact time for these cases. In this way, for these test cases, it is enough 
// printing the message "Mais de 1 seculo", that means "More than a Century".

// Input
// The first line of the input contains a single integer T, indicating the number of test cases (1 ≤ T ≤ 3000). Each test case contains four numbers: two integers PA 
// and PB (100 ≤ PA < 1000000, 100 ≤ PB ≤ 1000000, PA < PB) indicating respectively the population of A and B and two numbers G1 and 
// G2 (0.1 ≤ G1 ≤ 10.0, 0.0 ≤ G2 ≤ 10.0, G2 < G1) with one digit after the decimal point each, indicating the populational growing (in percentual) for A and B 
// respectively.

// Pay attention please: The population always is an integer number. So, a growing of 2.5% over a population of 100 will result in 102 (instead of 102.5) and 
// a growing of 2.5% over a population of 1000 will result in 1025. In addition, use double variables to the growing rate.

// Output
// Print, for each test case, how many years would be necessary to the city A became greater than the city B (in inhabitants). Remember that if this time is greater 
// than 100 it will be necessary printing the message: "Mais de 1 seculo". In each one of these cases, maybe would be interesting interrupt the counting, otherwise 
// you'll get "Time Limit Exceeded".

// Input Sample	                Output Sample
// 6
// 100 150 1.0 0                51 anos.
// 90000 120000 5.5 3.5         16 anos.
// 56700 72000 5.2 3.0          12 anos.
// 123 2000 3.0 2.0             Mais de 1 seculo.
// 100000 110000 1.5 0.5        10 anos.
// 62422 484317 3.1 1.0         100 anos.
