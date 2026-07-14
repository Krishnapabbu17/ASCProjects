//Part 1
function combineStrings(str1, str2){
    let combinedStr = str1 + str2;
    return combinedStr;
}

let s1 = combineStrings("ABC", "DEF");
let s2 = combineStrings("poke", "mon");
let s3 = combineStrings("friend", "ship");
let s4 = combineStrings("1", "2");


console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

//Part 2
//Program 1: 
//[ 'a', 'b', 'c' ]
//[ 'panda', 'bee', 'squirrel' ]
//[ 55, 100, -7 ]
//Program 2:
//1
//5
//0
//Program 3:
//2.5
//15
//5

//Part 3
function checkAnswer(num1,num2,strOp,answer){
    if((num1 + num2 == answer) || (num1-num2==answer)){
        return true;
    }
    else{
        return false;
    }
}

let b1 = checkAnswer(3, 5, "+", 8);
let b2 = checkAnswer(9, 8, "+", 15);
let b3 = checkAnswer(5, 4, "-", 1);
let b4 = checkAnswer(0, 1, "-", -2);


console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);

//Part 4
function oddNumberCatcher(arr){
    for(let i = 0; i<arr.length;i++){
        if (arr[i]%2!=0){
            return i;
        }
    }
    return -1;
}

let i1 = oddNumberCatcher([8, 22, 10, 15, 2, 50, 28]);
let i2 = oddNumberCatcher([1, 2, 3, 4, 5]);
let i3 = oddNumberCatcher([2, 2, 2, 2, 2, 2, 2, 2]);
let i4 = oddNumberCatcher([]);


console.log(i1);
console.log(i2);
console.log(i3);
console.log(i4);
