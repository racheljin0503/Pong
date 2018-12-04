var menu;
var menuContext;
var spacePressed = false;

window.onload = function start() {
  menu = document.getElementById("menuCanvas");
  menuContext = menu.getContext("2d");
  setInterval(function(){main()}, 4);
}

function main() {
  menuTitle();
  pressStart();
}

function menuTitle() {
  menuContext.fillStyle = "#153ba0";
  menuContext.fillRect(0,0, menu.width, menu.height);
  menuContext.fillStyle = "#ECF0F1";
  menuContext.font = "50px Times New Roman";
  menuContext.fillText("Press Space to Start", 50, 375);
}

function pressStart() {
  if(spacePressed) {
    window.location = "game.html";
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