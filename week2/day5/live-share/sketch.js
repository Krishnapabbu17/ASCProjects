
let leftScore = 0;
let rightScore = 0;

let ballXSpeed = 4;
let ballYSpeed = 5;

let ballX = 350;
let ballY = 225;

let leftPaddleX = 30;
let leftPaddleY = 180;

let rightPaddleX = 655;
let rightPaddleY = 180;

let paddleWidth = 15;
let paddleHeight = 90;
let paddleSpeed = 6;


let ballImage; 
function preload()
{
    ballImage = loadImage("images/ball.png");
}

function setup(){
    createCanvas(700,450);
    //background(0);

    imageMode(CENTER);
}
function draw(){
    background(0);

    stroke(255);
    strokeWeight(3);
    line(width/2,0,width/2,height);
    
    noStroke();

    fill(255);
    image(ballImage, ballX, ballY, 20, 20);
    
    fill(255);
    rect(leftPaddleX, leftPaddleY, paddleWidth, paddleHeight);
    rect(rightPaddleX, rightPaddleY, paddleWidth, paddleHeight);

    
    
    //movement 
    
    if(keyIsDown(UP_ARROW)){
        rightPaddleY -= paddleSpeed;
    }
    if(keyIsDown(DOWN_ARROW)){
        rightPaddleY += paddleSpeed;
    }
    if(keyIsDown(87)){
        leftPaddleY -= paddleSpeed;
    }
    if(keyIsDown(83)){
        leftPaddleY += paddleSpeed;
    }

    //keeping paddles on the screen
    if(leftPaddleY < 0){
        leftPaddleY = 0;
    }

    if(leftPaddleY + paddleHeight > height){
        leftPaddleY = height - paddleHeight;
    }

    if(rightPaddleY < 0){
        rightPaddleY = 0;
    }

    if(rightPaddleY + paddleHeight > height){
        rightPaddleY = height - paddleHeight;
    }

    //move ball
    ballX += ballXSpeed;
    ballY += ballYSpeed;
    

    // Left paddle
    if ( ballX + 10 < leftPaddleX || ballX - 10 > leftPaddleX + paddleWidth || ballY + 10 < leftPaddleY || ballY - 10 > leftPaddleY + paddleHeight)
    {

    }
    else
    {
        ballXSpeed *= -1.2;
        ballX = leftPaddleX + paddleWidth + 10;
    }

    // Right paddle
    if (
        ballX + 10 < rightPaddleX || ballX - 10 > rightPaddleX + paddleWidth || ballY + 10 < rightPaddleY || ballY - 10 > rightPaddleY + paddleHeight
    )
    {

    }
    else
    {
        ballXSpeed *= -1.2;
        ballX = rightPaddleX - 10;
    }


    //top and bttom 
    if(ballY <= 10 || ballY >= height -10){
        ballYSpeed *=-1;
    }
    
    
    
    //score 

    if(ballX > width){
        leftScore = leftScore + 1;
        ballX = width / 2;
        ballY = height / 2;

        ballXSpeed = 0;
        ballYSpeed = 0;
        
    }
    
    if(ballX < 0){
        rightScore = rightScore + 1;

        ballX = width / 2;
        ballY = height / 2;

        ballXSpeed = 0;
        ballYSpeed = 0;
    }


    // score display
    fill(255);
    textSize(20);
    textFont("Helvetica-Light");
    text("Player 1 Score: " + leftScore, 50,50);
    text(" Player 2 Score: " + rightScore, 550,50);

    if(leftScore == 5){
        ballXSpeed = 0;
        ballYSpeed = 0;
        textSize(25);
        textFont("Helvetica-Light");
        text("Player 1 Wins!", width/2 - 70,height/2 - 50);
    }
    else if (rightScore == 5){
        ballXSpeed = 0;
        ballYSpeed = 0;
        textSize(25);
        textFont("Helvetica-Light");
        text("Player 2 Wins!",width/2 - 70,height/2 - 50);
    }
    

    

   
}
function mouseClicked(){
    if(ballXSpeed == 0 && leftScore < 11 && rightScore < 11){
        let r = random(0,2);

        if(r<1){
            ballXSpeed = -4;
        }
        else{
            ballXSpeed = 4;
        }

        ballYSpeed = 5;
    }
}