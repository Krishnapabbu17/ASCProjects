let backgroundRef = document.getElementById("color-display");
let aquaRef = document.getElementById("aqua");
let tealRef = document.getElementById("teal");
let pinkRef = document.getElementById("pink");
let purpleRef = document.getElementById("purple");
let colorlessRef = document.getElementById("colorless");

aquaRef.onclick = function()
{
    backgroundRef.style.backgroundColor = "aqua";
    backgroundRef.innerHTML = "aqua";
   
}

tealRef.onclick = function()
{
    backgroundRef.style.backgroundColor = "teal";
    backgroundRef.innerHTML = "teal";
   
}


pinkRef.onclick = function()
{
    backgroundRef.style.backgroundColor = "pink";
    backgroundRef.innerHTML = "pink";
   
}


purpleRef.onclick = function()
{
    backgroundRef.style.backgroundColor = "purple";
    backgroundRef.innerHTML = "purple";
   
}

colorlessRef.onclick = function()
{
    backgroundRef.style.backgroundColor = "white";
    backgroundRef.innerHTML = "colorless";
   
}




//backgroundRef.style.backgroundColor = "white";
//backgroundRef.text
