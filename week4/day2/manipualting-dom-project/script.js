let paragraphButton = document.getElementById('p-button');
let imageButton = document.getElementById('img-button');
let paragraphDiv = document.getElementById('p-div');
let imageDiv = document.getElementById('img-div');

paragraphButton.onclick = function(){
    paragraphDiv.style.display = 'block';
    imageDiv.style.display = 'none';

    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = 'This is a new paragraph!';

    paragraphDiv.appendChild(newParagraph);
}

imageButton.onclick = function(){
    imageDiv.style.display = 'block';
    paragraphDiv.style.display = 'none';

    let newImage = document.createElement('img');
    newImage.src = '../more-dom/images/pikachu.png';
    newImage.style.width = '200px';

    imageDiv.appendChild(newImage);
}
