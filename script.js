const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5,
  snakeY = 10;

const changeFoodPosition = () => {
  //change random position of food
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};
const initGame = () => {
  let htmlMrkup = `<div class="food" style="grid-area : ${foodY} / ${foodX}"><i class="fa-solid fa-egg"></i></div>`;
  htmlMrkup += `<div class="head" style="grid-area : ${snakeY} / ${snakeX}"></div>`;
  playBoard.innerHTML = htmlMrkup;
};
changeFoodPosition();
initGame();
