//Step 3
function randNumGenerator(num){
    return Math.floor(Math.random()* num);
}

//Step 4
function getHome(){
    let homes = ["Mansion", "Castle", "Shack","House"];

    let userHome = process.argv[2];

    if (userHome != undefined){
        homes.push(userHome);
    }

    return homes[randNumGenerator(homes.length)];
}

//Step 5
function getTravelCount(){
    return randNumGenerator(101);
}

//Step 6
function getPet() {
  let randomPets = [
    "dog",
    "cat",
    "dragon",
    "dinosaur",
    "hamster",
    "Rayquaza"
  ];

  let userPet = process.argv[3];


  if (userPet != undefined && randNumGenerator(2) === 1) {
    return userPet;
  }

  return randomPets[randNumGenerator(randomPets.length)];
}

//Step 10

function getCollege() {
  let colleges = [
    "Harvard",
    "MIT",
    "Stanford",
    "Northwestern",
    "University of Illinois"
  ];

  return colleges[randNumGenerator(colleges.length)];
}


function getJob() {
  let jobs = [
    "software engineer",
    "doctor",
    "professional athlete",
    "business owner",
    "astronaut"
  ];

  return jobs[randNumGenerator(jobs.length)];
}

//Final mash function
function mash() {
  return (
    "You will live in a " +
    getHome() +
    ", travel to " +
    getTravelCount() +
    " countries, have a pet " +
    getPet() +
    ", attend " +
    getCollege() +
    ", and become a " +
    getJob() +
    "!"
  );
}

let result = mash();
console.log(result);