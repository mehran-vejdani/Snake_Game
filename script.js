const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5,
  snakeY = 10;
let velocityX = 0,
  velocityY = 0;

const changeFoodPosition = () => {
  //change random position of food
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};
const changeDirextion = (event) => {
  if (event.key === "ArrowUp") {
    velocityX = 0;
    velocityY = -1;
  } else if (event.key === "ArrowDown") {
    velocityX = 0;
    velocityY = 1;
  } else if (event.key === "ArrowLeft") {
    velocityX = -1;
    velocityY = 0;
  } else if (event.key === "ArrowRight") {
    velocityX = 1;
    velocityY = 0;
  }
};
const initGame = () => {
  let htmlMrkup = `<div class="food" style="grid-area : ${foodY} / ${foodX}"><i class="fa-solid fa-egg"></i></div>`;
  if (snakeX === foodX && snakeY === foodY) {
    changeFoodPosition();
  }
  //updating snake head position
  snakeX += velocityX;
  snakeY += velocityY;
  htmlMrkup += `<div class="head" style="grid-area : ${snakeY} / ${snakeX}"> <i class="fa fa-user"></i></div>`;
  playBoard.innerHTML = htmlMrkup;
};
changeFoodPosition();
//move after 125 milisecond
setInterval(initGame, 125);

document.addEventListener("keydown", changeDirextion);
