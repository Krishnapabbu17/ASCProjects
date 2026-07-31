let themeButton = document.getElementById("themeButton");
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
