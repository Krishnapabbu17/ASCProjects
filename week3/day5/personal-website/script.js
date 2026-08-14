const themeButton = document.getElementById("theme-button");
const body = document.body;

function setTheme(theme) {
    const isDark = theme === "dark";
    body.classList.toggle("dark-mode", isDark);
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.textContent = isDark ? "Light mode" : "Dark mode";
}

const savedTheme = localStorage.getItem("portfolio-theme");
setTheme(savedTheme || "light");

themeButton.addEventListener("click", function () {
    const nextTheme = body.classList.contains("dark-mode") ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
});

document.querySelectorAll(".details-button").forEach(function (button) {
    button.addEventListener("click", function () {
        const detailPanel = document.getElementById(button.getAttribute("aria-controls"));
        const isOpen = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!isOpen));
        button.textContent = isOpen ? "Project details" : "Hide details";
        detailPanel.hidden = isOpen;
    });
});

document.getElementById("current-year").textContent = new Date().getFullYear();
