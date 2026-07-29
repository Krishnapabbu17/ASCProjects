// Get references to the HTML elements
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjectiveInput = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");
let mainTitle = document.getElementById("main_title");
let storyResult = document.getElementById("story_result");
let formContainer = document.querySelector(".form_container");

titleInput.onkeyup = function () {
  mainTitle.innerHTML = titleInput.value;
};

submitButton.onclick = function (event) {
  event.preventDefault();

  let title = titleInput.value;
  let noun = nounInput.value;
  let verb = verbInput.value;
  let adjective = adjectiveInput.value;

  if (title === "" || noun === "" || verb === "" || adjective === "") {
    alert("Please fill in all fields");
    return;
  }

  storyResult.innerHTML =
    "Last night I ate a " +
    noun +
    ", and today I just had to " +
    verb +
    ". What a " +
    adjective +
    " day!";

  formContainer.style.display = "none";
};
