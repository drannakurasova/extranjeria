console.log("main");
// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameoverScreenNode = document.querySelector("#gameover-screen");
const gamewonScreenNode = document.querySelector("#gamewon-screen");
const restartBtn1Node = document.querySelector("#restart-btn1");
const restartBtn2Node = document.querySelector("#restart-btn2");
const counterNode = document.querySelector("#counter");
const timerNode = document.querySelector("#countdown");

let counterNodeNum = 0;
let counterDisplayed = document.createElement("h2");
document.querySelector("#counter").append(counterDisplayed);

let timerNodeNum = 60;
let timerDisplayed = document.createElement("h2");
document.querySelector("#timer").append(timerDisplayed);

let gameObject = null;

// * STATE MANAGEMENT FUNCTIONS
function startGame() {
  alert(`¡Oh vosotros los que entráis, abandonad toda esperanza!`);
  console.log("starting");

  splashScreenNode.style.display = "none";
  gameoverScreenNode.style.display = "none";
  gamewonScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObject = new Game();
  console.log(gameObject);

  gameObject.gameLoop();
}

// * EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);
restartBtn1Node.addEventListener("click", startGame);
restartBtn2Node.addEventListener("click", startGame);

document.addEventListener("keydown", (event) => {
  //todo WHY DOCUNENT NOT GAMEBOXNODE

  if (event.key === "ArrowUp") {
    gameObject.character.moveUpEffect();
    console.log("pressin arrow up");
  } else if (event.key === "ArrowDown") {
    gameObject.character.moveDownEffect();
    console.log("pressin arrow up");
  }
});
