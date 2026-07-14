let userGuess = process.argv[2];
let answer = 5;

if (userGuess == answer){
    console.log("Correct Guess!");
}
else if (userGuess < answer){
    console.log("Too low!");
}
else{
    console.log("Too high!");
}

let first;
let second;

first = 4 < 7;
second = 6 > 3;

if (first || second){
    console.log("This is true!");
}
else{
    console.log("This is false!");
}