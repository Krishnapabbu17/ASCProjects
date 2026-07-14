//Part 1
function evenOrOdd(num){
    if(num%2==0){
        console.log(num, "is even");
    }
    else{
        console.log(num, "is odd");
    }

}

//evenOrOdd(67);

//Part 2
function divisor(num1,num2){
    if (num1%num2 == 0){
        console.log(num1, "is divisible by", num2);
    }
    else{
        console.log(num1, "is NOT divisible by", num2);
    }
}

//divisor(6,3);

//Part 3
function distanceCalculator(name1, x1, y1, name2, x2, y2){
    let distance = Math.sqrt(((x2-x1)**2 + (y2-y1)**2));
    console.log(name1, "and", name2, "are", distance, "meter(s) apart");
}
distanceCalculator("Krishna", 6, 7, "Alisha", 6, 9);

//Part 4
function arrayHandler(array){
    for (let i = 0; i < array.length; i++){
        if(typeof array[i] === "string"){
            console.log(array[i]);
        }
    }
}

arrayHandler([1, "a", 2, "b", 3, "c"]);
arrayHandler(["H", "E", "L", false, true, 1, 2, 55, "L", "O"]);
arrayHandler(["string numbers", "1", "2", "3"]);