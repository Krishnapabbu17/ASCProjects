function setup() {
  createCanvas(500, 500);
  background(255, 255, 255);
}

function draw() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  let opacity = random(120, 180);

  fill(r, g, b, opacity);
  noStroke();

  let size = random(5, 35);
  let offsetX = random(-25, 25);
  let offsetY = random(-25, 25);

  ellipse(mouseX + offsetX, mouseY + offsetY, size, size);
}

function mouseClicked() {
  background(255, 255, 255);
}