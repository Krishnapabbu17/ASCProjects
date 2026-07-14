//Part 1a
let num = 100;
while (num>=0){
    console.log(num);
    num--;
}

//Part 1b
let num = process.argv[2];
while (num>=0){
    console.log(num);
    num--;
}

//Part 2
//Question 1: 3
//Question 2: infinite 
//Question 3: 5
//Question 4: 2
//Question 5: 
let num = 0;

while (num < 10) {
   console.log("Little Donald Drumpf");
   num++;
}

//Part 3a
let num1 = Math.floor(Math.random()*11);
let num2 = Math.floor(Math.random()*11);

while (num1!=num2){
    console.log("1st random number:", num1, "2nd random number:", num2);
    num1 = Math.floor(Math.random()*11);
    num2 = Math.floor(Math.random()*11);
}
console.log("1st random number:", num1, "2nd random number:", num2);
console.log("Same random numbers! End loop");

//Part 3b
let num1 = Math.floor(Math.random()*11);
let num2 = Math.floor(Math.random()*11);
let tryNum = 1;

while (num1!=num2){
    console.log("Try # -", tryNum, "1st random number:", num1, "2nd random number:", num2);
    num1 = Math.floor(Math.random()*11);
    num2 = Math.floor(Math.random()*11);
    tryNum++;
}
console.log("Try # -", tryNum, "1st random number:", num1, "2nd random number:", num2);
console.log("Same random numbers on try #", tryNum, "! End loop");
