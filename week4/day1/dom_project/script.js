const body = document.querySelector("body");
body.style.backgroundColor = "darkblue";

const mainHeading = document.querySelector("h1");
mainHeading.style.fontSize = "100%";
mainHeading.style.padding = "5px";

const secondHeading = document.querySelector("h2");
secondHeading.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";
secondHeading.style.textAlign = "center";
secondHeading.style.fontSize = "70%";

const startersImage = document.querySelector("#starters_image_div img");
startersImage.style.width = "200px";
startersImage.style.border = "2px dotted white";
startersImage.style.padding = "3px";

const starterList = document.querySelector(".list");
starterList.style.fontSize = "80%";

const pokemonImages = document.getElementsByClassName("pokemon_images");

for (let i = 0; i < pokemonImages.length; i++) {
    pokemonImages[i].style.width = "90px";
    pokemonImages[i].style.paddingTop = "10px";
    pokemonImages[i].style.paddingBottom = "5px";
    pokemonImages[i].style.border = "1px dotted white";
}

const imageContainers =
    document.getElementsByClassName("each_pokemon_container");

for (let i = 0; i < imageContainers.length; i++) {
    imageContainers[i].style.padding = "10px";
}

const bulbasaurContainer =
    document.getElementById("bulbasaur_container");

bulbasaurContainer.style.backgroundColor = "#3F9999";
bulbasaurContainer.style.padding = "10px";
bulbasaurContainer.style.border = "2px solid #FDEFA6";
bulbasaurContainer.style.borderRadius = "10px";

const charmanderContainer =
    document.getElementById("charmander_container");

charmanderContainer.style.backgroundColor = "#F3B284";
charmanderContainer.style.padding = "10px";
charmanderContainer.style.border = "2px solid #FDEFA6";
charmanderContainer.style.borderRadius = "10px";

const squirtleContainer =
    document.getElementById("squirtle_container");

squirtleContainer.style.backgroundColor = "#8EC4CE";
squirtleContainer.style.padding = "10px";
squirtleContainer.style.border = "2px solid #FDEFA6";
squirtleContainer.style.borderRadius = "10px";

const pokemonNames =
    document.getElementsByClassName("pokemon_names");

for (let i = 0; i < pokemonNames.length; i++) {
    pokemonNames[i].style.fontSize = "120%";
    pokemonNames[i].style.marginTop = "5px";
    pokemonNames[i].style.marginBottom = "10px";
}

const pokemonDescriptions =
    document.getElementsByClassName("pokemon_description");

for (let i = 0; i < pokemonDescriptions.length; i++) {
    pokemonDescriptions[i].style.fontSize = "70%";
}

const footer = document.querySelector("footer");

footer.innerHTML = "All Star Code - DOM Project";
footer.style.paddingTop = "50px";
footer.style.paddingLeft = "10px";
footer.style.fontSize = "80%";
footer.style.textDecoration = "underline";