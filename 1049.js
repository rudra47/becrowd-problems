//Animal
var input = `invertebrado
anelideo
onivoro`;
var lines = input.split('\n');

let word1 = lines[0];
let word2 = lines[1];
let word3 = lines[2];

if (word1 === "vertebrado") {
    if (word2 === "ave") {
        if (word3 === "carnivoro") {
            console.log("aguia");
        }else{
            console.log("pomba");
        }
    }else{
        if (word3 === "onivoro") {
            console.log("homen");
        }else{
            console.log("vaca");
        }
    }
}else{
    if (word2 === "inseto") {
        if (word3 === "hematofago") {
            console.log("pulga");
        }else{
            console.log("lagarta");
        }
    }
}



// In this problem, your job is to read three Portuguese words. These words define an animal according to the table below, from left 
// to right. After, print the chosen animal defined by these three words.

// Input
// The input contains 3 words, one by line, that will be used to identify the animal, according to the above table, with all letters 
// in lowercase.

// Output
// Print the animal name according to the given input.

// Input Samples	Output Samples
// vertebrado
// mamifero        homem
// onivoro

// vertebrado
// ave             aguia
// carnivoro


// invertebrado
// anelideo        minhoca
// onivoro