//DDD
var input = `11`;
var lines = input.split('\n');

let number = Number(lines[0]);

if (number === 61) {
    console.log("Brasilia");
}else if(number === 71){
    console.log("Salvador");
}
else if(number === 11){
    console.log("Sao Paulo");
}
else if(number === 21){
    console.log("Rio de Janeiro");
}
else if(number === 32){
    console.log("Juiz de Fora");
}
else if(number === 19){
    console.log("Campinas");
}
else if(number === 27){
    console.log("Vitoria");
}
else if(number === 31){
    console.log("Belo Horizonte");
}else{
    console.log("DDD nao cadastrado");
}

// Read an integer number that is the code number for phone dialing. Then, print the destination 
// according to the following table:

// If the input number isn’t found in the above table, the output must be:
// DDD nao cadastrado
// That means “DDD not found” in Portuguese language.

// Input
// The input consists in a unique integer number.

// Output
// Print the city name corresponding to the input DDD. Print DDD nao cadastrado if doesn't exist 
// corresponding DDD to the typed number.

// Input Sample	Output Sample
// 11           Sao Paulo