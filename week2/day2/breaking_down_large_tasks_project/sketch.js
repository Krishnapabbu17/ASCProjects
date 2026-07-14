//Step 1: Create a 500 by 500 canvas.

//Step 2: Set the starting colors to red, green, and blue.

//Step 3: Clear the canvas with a black background during every frame.

//Step 4: Draw three squares at different vertical positions.

//Step 5: Use mouseX as the horizontal position of each square.

//Step 6: Randomly change all three colors when the mouse is clicked.

let r1 = 255;
let g1 = 0;
let b1 = 0;

let r2 = 0;
let g2 = 255;
let b2 = 0;

let r3 = 0;
let g3 = 0;
let b3 = 255;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(0);

  fill(r1, g1, b1);
  rect(mouseX - 30, 70, 60, 60);

  fill(r2, g2, b2);
  rect(mouseX - 30, 220, 60, 60);

  fill(r3, g3, b3);
  rect(mouseX - 30, 370, 60, 60);
}

function mouseClicked() {
  r1 = random(0, 256);
  g1 = random(0, 256);
  b1 = random(0, 256);

  r2 = random(0, 256);
  g2 = random(0, 256);
  b2 = random(0, 256);

  r3 = random(0, 256);
  g3 = random(0, 256);
  b3 = random(0, 256);
}