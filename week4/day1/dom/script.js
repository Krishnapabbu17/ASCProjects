const heading = document.getElementById("heroes");

console.log(heading);

heading.style.color = "red";
heading.style.fontSize = "45px";
heading.style.backgroundColor = "grey";

const firstHero = document.querySelector("p");
firstHero.style.color =  "lightgreen";

// note: const theHeading = document.querySelector("title");

const allHeroes = document.querySelectorAll(".heroes");

console.log(allHeroes);

for(let i = 0; i < allHeroes.length; i++){
    console.log(allHeroes[i]);
    allHeroes[i].style.fontWeight = "bold";
}

//Note: const heroes = document.getElementByClassName("heroes");
heading.innerHTML = "Worst Marvel Characters";
heading.innerHTML += " - The Worst List of All Time";
heading.innerHTMl += "<p>These people suck</p>"