let divRef = document.querySelector("div");
let buttonRef = document.getElementById("click-me");
buttonRef.onclick = function()
{
    if (divRef.style.backgroundColor == "orange"){
        divRef.style.backgroundColor = "aqua";
        divRef.style.backgroundColor = "I am a squirtle";
    } else {
        divRef.style.backgroundColor = "orange";
        divRef.innerHTML ="I am a charmander";
    }
}
divRef.style.backgroundColor = "orange";

let displayButton = document.getElementById('display-btn');
displayButton.onclick = function () {
    if(divRef.style.display != "none") {
        divRef.style.display = "none";
        displayButton.innerHTML ="show";
    } else {
        divRef.style.display = "block";
        displayButton.innerHTML = "hide"
    }
}

divRef.onmouseover = function() {
    divRef.innerHTML = "Ouch";
    divRef.style.opacity="0.6";
}

divRef.onmouseout = function() {
    divRef.innerHTML = "The mouse is NOT on me right now."
    divRef.style.opacity = "1";
}