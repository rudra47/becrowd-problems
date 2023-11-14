//Salary Increase
var input = `800.01`;
var lines = input.split('/n');

let salary = Number(lines[0]);
let increasePercentage = 0;

if (salary > 0) {
    if (salary <= 400.00) {
        increasePercentage = 15;
    }else if(salary > 400.00 && salary <= 800.00){
        increasePercentage = 12;
    }else if(salary > 800.00 && salary <= 1200.00){
        increasePercentage = 10;
    }else if(salary > 1200.00 && salary <= 2000.00){
        increasePercentage = 7;
    }else{
        increasePercentage = 4;
    }

    let increaseAmount = (salary * increasePercentage) / 100;
    let newSalary = salary + increaseAmount;
    
    
console.log(`Novo salario: ${newSalary.toFixed(2)}
Reajuste ganho: ${increaseAmount.toFixed(2)}
Em percentual: ${increasePercentage} %`);
}
    




// PROBLEM : 
// The company ABC decided to give a salary increase to its employees, according to the following 
// table:

// Salary	Readjustment Rate
// 0 - 400.00          15%
// 400.01 - 800.00     12%
// 800.01 - 1200.00    10%
// 1200.01 - 2000.00   7%
// Above 2000.00       4%

// Read the employee's salary, calculate and print the new employee's salary, as well the money earned
// and the increase percentual obtained by the employee, with corresponding messages in Portuguese,
// as the below example.

// Input
// The input contains only a floating-point number, with 2 digits after the decimal point.

// Output
// Print 3 messages followed by the corresponding numbers (see example) informing the new salary, the 
// among of money earned (both must be shown with 2 decimal places) and the percentual obtained by the
// employee. Note:

// Novo salario:  means "New Salary"
// Reajuste ganho: means "Money earned"
// Em percentual: means "In percentage"

// Input Sample	Output Sample
// 400.00

// Novo salario: 460.00
// Reajuste ganho: 60.00
// Em percentual: 15 %

// 800.01

// Novo salario: 880.01
// Reajuste ganho: 80.00
// Em percentual: 10 %

// 2000.00

// Novo salario: 2140.00
// Reajuste ganho: 140.00
// Em percentual: 7 %