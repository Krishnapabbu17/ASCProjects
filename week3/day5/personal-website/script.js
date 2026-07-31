let themeButton = document.getElementById("theme-button");
let body = document.querySelector("body");

themeButton.onclick = function()
{
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode"))
    {
        themeButton.innerHTML = "Light Mode";
    }
    else
    {
        themeButton.innerHTML = "Dark Mode";
    }
};

let learnMoreButtons = document.getElementsByClassName("learn-more-button");
let extraInformation = document.getElementsByClassName("extra-info");

for (let i = 0; i < learnMoreButtons.length; i++)
{
    learnMoreButtons[i].onclick = function()
    {
        if (extraInformation[i].style.display == "block")
        {
            extraInformation[i].style.display = "none";
            learnMoreButtons[i].innerHTML = "Learn More";
        }
        else
        {
            extraInformation[i].style.display = "block";
            learnMoreButtons[i].innerHTML = "Show Less";
        }
    };
}
