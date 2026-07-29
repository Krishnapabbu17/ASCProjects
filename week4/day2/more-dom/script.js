/*  @TODO - Add references to the elements we want to use  */
let changeButton = document.getElementById('change_button');
let addButton = document.getElementById('add_button');
let deleteButton = document.getElementById('delete_button');
let imageDiv = document.getElementById('image_div');
let firstImage = document.getElementById('first_image');

/*  @TODO - Create an array of Pokemon to select from  */
const pokemonArray = ['bulbasaur','charmander','pikachu','squirtle'];
/*  @TODO - Create a Function for our changeButton to change first Pokemon  */
let counter = 0;

changeButton.onclick = function(){
    imageDiv.children[0].src = `images/${pokemonArray[counter]}.png`;

    counter++;
    if (counter > pokemonArray.length - 1) {
        counter = 0;
    }
}

/*  @TODO - Create a Function for our addButton to Add New Pokemon  */
let index = 0;
addButton.onclick = function(){
    let newPokemon = document.createElement('img');
    newPokemon.src = 'images/' + pokemonArray[index] + '.png';

    imageDiv.appendChild(newPokemon);

    index++;
    if(index > pokemonArray.length-1){
        index = 0;
    }
}
/*   @TODO - Create a Function for our deleteButton to Delete the First Pokemon   */
deleteButton.onclick = function(){
    imageDiv.removeChild(imageDiv.children[0]);
}