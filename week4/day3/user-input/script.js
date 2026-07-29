// get references
let textbox = document.getElementById('boxtext');
let clickButton = document.querySelector('button');
let screenDiv = document.querySelector('div');
let bodyRef = document.querySelector('body');

// set up onclick for clickButton
clickButton.onclick = function(event){

// prevent the page from reloading
event.preventDefault();
// capture user input
let userInput = textbox.value;
console.log(userInput);
// change backgroundColor based on userInput
bodyRef.style.backgroundColor = userInput;
// show userInput on the screen
screenDiv.innerHTML = userInput;
// Clear input
textbox.value ='';

}