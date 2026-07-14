//Part 1
//Program 1: @#
//Program 2: @
//Program 3: @
//Program 4: 7
//Program 5: true blocks are executed

//Part 2
let userInput = process.argv[2];
let randomNum = Math.floor(Math.random() * 101);

if (userInput == randomNum){
    console.log("YOU GUESSED RIGHT!!");
}
else if (userInput > randomNum){
    console.log("Your guess is TOO HIGH");
}
else{
    console.log("Your guess is TOO LOW");
}

//Part 3
let score = 0;
let input = process.argv[2];

console.log("Initial Score:", score);
if (input == 'A' || input == 'B'){
    score -= 1;
    console.log("Wrong answer :(");
    console.log("Final score:", score);
}
else if (input == 'C'){
    score += 5;
    console.log("RIGHT ANSWER! WOHOO!!!");
    console.log("Final Score:", score);
}
else if (input == 'D'){
    score -= 50;
    console.log("Bad bad bad...");
    console.log("Final Score:", score);
}
else if (input == 'I.KNOW.THE.SECRET'){
    score += 1000000;
    console.log("Welcome to NIRVANA");
    console.log("Final Score:", score);
}
else{
    console.log("Invalid response...");
    console.log("Final Score:", score);
}

