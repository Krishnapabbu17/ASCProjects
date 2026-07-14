//Part 1
//Program A
//B
//D
//undefined

//Program B
//Mon
//Sun
//7
//undefined
//Sun

//Program C
//['Do,'Re','Mi','Fa','So']
//['Do','Re']
//[]

//Part 2
let scores = [85, 93, 65, 65, 92, 81, 93];

let total = scores[0] + scores[1] + scores[2] + scores[3] + scores[4] + scores[5] + scores[6];

let average = total / scores.length;

console.log("Average:", average);

//Part 3
//Tranformation 1
let myArray = ['a', 'b', 'c', 'd'];

console.log("Before:", myArray);

myArray.reverse();

console.log("After:", myArray);

//Before: [ 'a', 'b', 'c', 'd' ]
//After: [ 'd', 'c', 'b', 'a' ]

//Tranformatiom 2
let myArray = ['a', 'b', 'c', 'd'];

console.log("Before:", myArray);

myArray.push(1, 2);

console.log("After:", myArray);

//Before: [ 'a', 'b', 'c', 'd' ]
//After: [ 'a', 'b', 'c', 'd', 1, 2 ]

//Tranfrmation 3
let myArray = ['a', 'b', 'c', 'd'];

console.log("Before:", myArray);

myArray.pop();

console.log("After:", myArray);

//Before: [ 'a', 'b', 'c', 'd' ]
//After: [ 'a', 'b', 'c' ]

//tranformation 4
let myArray = ['a', 'b', 'c', 'd'];

console.log("Before:", myArray);

myArray.splice(1, 1);
myArray.push('e');

console.log("After:", myArray);

//Before: [ 'a', 'b', 'c', 'd' ]
//After: [ 'a', 'c', 'd', 'e' ]

//Tranformation 5\
let myArray = ['a', 'b', 'c', 'd'];

console.log("Before:", myArray);

myArray.pop();
myArray.reverse();
myArray.unshift('f', 'e');

console.log("After:", myArray);

//Before: [ 'a', 'b', 'c', 'd' ]
//After: [ 'f', 'e', 'c', 'b', 'a' ]