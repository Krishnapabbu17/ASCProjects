let div1 = document.querySelector("#box-one");
let div2 = document.querySelector("#box-two");

div1.onmouseover = function(){
    div1.style["background-color"] = 'purple';
}

div1.onmouseout = function(){
    div1.style.backgroundColor = 'lightgreen';
}


