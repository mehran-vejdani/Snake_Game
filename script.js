const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5,
  snakeY = 10;
let velocityX = 0,
  velocityY = 0;
let snakeBody = [];
let gameOver = false;
let setIntervalId;

const changeFoodPosition = () => {
  //change random position of food
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

const handleGameOver = () => {
  clearInterval(setIntervalId);
  alert("Game Over");
  location.reload();
};
const changeDirextion = (event) => {
  if (event.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (event.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (event.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (event.key === "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
};
const initGame = () => {
  if (gameOver) return handleGameOver();
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
  if (snakeX <= 0 || snakeX > 30 || snakeY < 0 || snakeY > 30) {
    gameOver = true;
  }
  for (let i = 0; i < snakeBody.length; i++) {
    //add div for snake body
    htmlMrkup += `<div class="head" style="grid-area : ${snakeBody[i][1]} / ${snakeBody[i][0]}"> <i class="fa fa-user"></i></div>`;
    //game ove after hit the body
    if (
      i !== 0 &&
      snakeBody[0][1] === snakeBody[i][1] &&
      snakeBody[0][0] === snakeBody[i][0]
    ) {
      gameOver = true;
    }
  }
  playBoard.innerHTML = htmlMrkup;
};
changeFoodPosition();
//move after 125 milisecond
setIntervalId = setInterval(initGame, 125);

document.addEventListener("keydown", changeDirextion);
