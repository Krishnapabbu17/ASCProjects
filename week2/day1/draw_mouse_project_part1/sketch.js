//Part 1
function setup() {
    createCanvas(500, 500);
    background(0, 0, 0);
    noStroke();
}

function draw() {
    
}

function mouseClicked() {
    let r = random(0, 256);
    let g = random(0, 256);
    let b = random(0, 256);

    let diameter = random(25, 101);

    fill(r, g, b);
    ellipse(mouseX, mouseY, diameter, diameter);
}

//Part 2
let r = 0;
let g = 0;
let b = 0;

function setup() {
    createCanvas(500, 500);
    background(0,0,0);
    noStroke();

    r = random(0, 256);
    g = random(0, 256);
    b = random(0, 256);
}

function draw() {
    fill(r, g, b);
    ellipse(mouseX, mouseY, 25, 25);
}

function mouseClicked() {
    background(0,0,0);

    r = random(0, 256);
    g = random(0, 256);
    b = random(0, 256);
}