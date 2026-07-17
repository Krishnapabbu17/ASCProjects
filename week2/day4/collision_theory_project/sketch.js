let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

let score = 0;

let playerImage;
let enemyImage;

function preload() {
  playerImage = loadImage("images/togepi.png");
  enemyImage = loadImage("images/clefairy.png");
}

function setup() {
  createCanvas(500, 500);
  noStroke();

  imageMode(CENTER);
}

function draw() {
  background(0);

  fill(255);
  textSize(22);
  text("Score: " + score, 10, 25);

  image(enemyImage, enemyXPos, enemyYPos, 50, 50);

  image(playerImage, myXPos, myYPos, 50, 50);

  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    myYPos -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myYPos += 3;
  }

  myLeft = myXPos - 25;
  myRight = myXPos + 25;
  myTop = myYPos - 25;
  myBottom = myYPos + 25;

  enemyLeft = enemyXPos - 25;
  enemyRight = enemyXPos + 25;
  enemyTop = enemyYPos - 25;
  enemyBottom = enemyYPos + 25;

  if (
    myLeft > enemyRight ||
    myRight < enemyLeft ||
    myTop > enemyBottom ||
    myBottom < enemyTop
  ) {
   
  } else {
    enemyXPos = random(25, 475);
    enemyYPos = random(25, 475);
    score++;
  }
}