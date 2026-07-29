// Get references to the buttons and divs
let paragraphButton = document.getElementById('p-button');
let imageButton = document.getElementById('img-button');
let paragraphDiv = document.getElementById('p-div');
let imageDiv = document.getElementById('img-div');

// Show the paragraph div and add a new paragraph
paragraphButton.onclick = function(){
    paragraphDiv.style.display = 'block';
    imageDiv.style.display = 'none';

    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = 'This is a new paragraph!';

    paragraphDiv.appendChild(newParagraph);
}

// Show the image div and add a new image
imageButton.onclick = function(){
    imageDiv.style.display = 'block';
    paragraphDiv.style.display = 'none';

    let newImage = document.createElement('img');
    newImage.src = '../more-dom/images/pikachu.png';
    newImage.style.width = '200px';

    imageDiv.appendChild(newImage);
}
