var canvas;
var canvasContext;
var ballx = 280;
var bally = 280;
var movementx = Math.random();
var movementy = Math.random();
var paddlex = 215;
var paddley = 500;
var leftPressed = false;
var rightPressed = false;
var score = 0;

// var movementx = 3;
// var movementy = 2;

window.onload = function start() {
  canvas = document.getElementById("mainCanvas");
  canvasContext = canvas.getContext("2d");
  setInterval(function(){main()}, 4);
}

function main() {
  movement();
  draw();
  endGame();
}

function movement() {
  if(ballx + 40 >= paddlex && ballx +40 <= paddlex + 170 && bally + 40 >= paddley && bally + 45 <= paddley) {
    movementy *= -1;
    score += 10;
  }
  ballx += movementx;
  bally += movementy;
  if(ballx >= 560 || ballx <= 0) {
    movementx *= -1;
  }
  if(bally <= 0 || bally >= 560) {
    movementy *= -1;
  }
  // paddleMovement
    if(leftPressed && paddlex >= 0) {
    paddlex -= 1;
  }
  else if(rightPressed && paddlex <= 430) {
    paddlex += 1;
  }
}

function draw() {
  canvasContext.fillStyle = "#153ba0";
  canvasContext.fillRect(0,0, canvas.width, canvas.height);
  canvasContext.fillStyle = "#ECF0F1";
  canvasContext.fillRect(ballx, bally, 40, 40);
  canvasContext.fillRect(paddlex, paddley, 170, 40);
  canvasContext.font = "20px Times New Roman";
  canvasContext.fillText("Score:"+ score, 40, 40);
}
  
document.addEventListener("keydown", keyDownHolder, false);
document.addEventListener("keyup", keyUpHolder, false);

function keyDownHolder(event) {
  if(event.keyCode == 37) {
    leftPressed = true;
  }
  else if(event.keyCode == 39) {
    rightPressed = true;
  }
}

function keyUpHolder(event) {
  if(event.keyCode == 37) {
    leftPressed = false;
  }
  else if(event.keyCode == 39) {
    rightPressed = false;
  }
}

function endGame() {
  if(bally + 40 >= canvas.height) {
    // alert("Game Over");
    // document.location.reload();
  }
}
