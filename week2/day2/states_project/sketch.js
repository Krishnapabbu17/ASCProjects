let state = "circle";

function setup() {
  createCanvas(500, 500);
  background(255, 255, 255);
  noStroke();
}

function draw() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  let opacity = random(120, 180);

  fill(r, g, b, opacity);

  let size = random(5, 35);
  let offsetX = random(-25, 25);
  let offsetY = random(-25, 25);

  let x = mouseX + offsetX;
  let y = mouseY + offsetY;

  if (state == "circle") {
    ellipse(x, y, size, size);
  }

  if (state == "square") {
    rect(x, y, size, size);
  }

  if (state == "triangle") {
    triangle(
      x, y - size,
      x - size, y + size,
      x + size, y + size
    );
  }

  fill(0, 0, 0);
  rect(0, 0, 100, 100);

  fill(255, 255, 255);
  textSize(18);
  text("Clear", 15, 35);
  text("Canvas", 15, 60);
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    background(255, 255, 255);
  } else {
    if (state == "circle") {
      state = "square";
    }

    else if (state == "square") {
      state = "triangle";
    }

    else if (state == "triangle") {
      state = "circle";
    }
  }
}