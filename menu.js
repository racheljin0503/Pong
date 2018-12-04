var menu;
var menuContext;
var spacePressed = false;

window.onload = function start() {
  menu = document.getElementById("menuCanvas");
  menuContext = canvas.getContext("2d");
  setInterval(function(){main()}, 4);
}

function main() {
  menuTitle();
  pressStart();
}

function menuTitle() {
  canvasContext.fillStyle = "#153ba0";
  canvasContext.fillRect(0,0, canvas.width, canvas.height);
  menuContext.fillStyle "#ECF0F1";
  menuContext.font = "50px Times New Roman";
  menuContext.fillText("Press Space to Start", 50, 375);
}

function pressStart() {
  if(spacePressed) {
    window.location = "script.js";
  }
}

document.addEventListener("keyup", keyUpHolder, false);
document.addEventListener("keydown", keyDownHolder, false);

function keyUpHolder(event) {
  if(event.keyCode == 32) {
    spacePressed = false;
  }
}

function keyDownHolder(event) {
  if(event.keyCode == 32) {
    spacePressed = true;
  }
}