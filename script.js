const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5,
  snakeY = 10;
let velocityX = 0,
  velocityY = 0;
let snakeBody = [];

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
    snakeBody.push([foodX, foodY]);
  }
  for (let i = snakeBody.length - 1; i > 0; i--) {
    //
    snakeBody[i] = snakeBody[i - 1];
  }

  snakeBody[0] = [snakeX, snakeY]; // set first snake position

  //updating snake head position
  snakeX += velocityX;
  snakeY += velocityY;

  for (let i = 0; i < snakeBody.length; i++) {
    //add div for snake body
    htmlMrkup += `<div class="head" style="grid-area : ${snakeBody[i][1]} / ${snakeBody[i][0]}"> <i class="fa fa-user"></i></div>`;
  }
  playBoard.innerHTML = htmlMrkup;
};
changeFoodPosition();
//move after 125 milisecond
setInterval(initGame, 125);

document.addEventListener("keydown", changeDirextion);
