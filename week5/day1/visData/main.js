let userContainer = document.getElementById("userContainer");
let count = document.getElementById("count");

let allButton = document.getElementById("allButton");
let femaleButton = document.getElementById("femaleButton");
let maleButton = document.getElementById("maleButton");


function displayUsers(users) {
    userContainer.innerHTML = "";

    count.innerHTML = users.length + " profiles currently displayed";

    for (let i = 0; i < users.length; i++) {
        let user = users[i];

        let fullName = user.name.first + " " + user.name.last;

        let card = document.createElement("div");

        card.className = "user-card";

        card.innerHTML = `
            <img src="${user.picture.large}" alt="Picture of ${fullName}">

            <h2>${fullName}</h2>

            <p>
                <strong>Age:</strong>
                ${user.dob.age}
            </p>

            <p>
                <strong>Location:</strong>
                ${user.location.city}, ${user.location.country}
            </p>

            <p>
                <strong>Email:</strong>
                ${user.email}
            </p>

            <p>
                <strong>Phone:</strong>
                ${user.phone}
            </p>
        `;

        userContainer.appendChild(card);
    }
}


function displayGender(gender) {
    let matchingUsers = [];

    for (let i = 0; i < data.results.length; i++) {
        let user = data.results[i];

        if (user.gender === gender) {
            matchingUsers.push(user);
        }
    }

    displayUsers(matchingUsers);
}


allButton.onclick = function() {
    displayUsers(data.results);
};


femaleButton.onclick = function() {
    displayGender("female");
};


maleButton.onclick = function() {
    displayGender("male");
};


displayUsers(data.results);