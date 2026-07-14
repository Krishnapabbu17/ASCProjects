// Part 1 - RANDOM SUM

let randomNum1 = Math.floor(Math.random() * 11);
let randomNum2 = Math.floor(Math.random() * 11);

let sum = randomNum1 + randomNum2;

console.log("Random number #1:", randomNum1);
console.log("Random number #2:", randomNum2);
console.log("Sum:", randomNum1 + " + " + randomNum2 + " = " + sum);

console.log("");

// Part 2 - LUCKY STAR

let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae'];
let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];

let randomDayIndex = Math.floor(Math.random() * days.length);
let randomReactionIndex = Math.floor(Math.random() * reactions.length);

let luckyDay = days[randomDayIndex];
let randomReaction = reactions[randomReactionIndex];

console.log("Your lucky day:", luckyDay);
console.log(randomReaction);

//Random number #1: 4
//Random number #2: 9
//Sum: 4 + 9 = 13

//Your lucky day: Today
//Yay!