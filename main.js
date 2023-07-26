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
const timerNode = document.querySelector("#timer");
const myAudio = document.querySelector('#audio')

const myYeah = new Audio ("yeah.mp3")
const myBlow = new Audio ("blow.mp3")
const myPipe = new Audio ("badpipe.mp3")

let counterDisplayed = document.createElement("h2");
document.querySelector("#counter").append(counterDisplayed);


let timerDisplayed = document.createElement("h2");
document.querySelector("#timer").append(timerDisplayed);



let gameObject = null;

counterNode.style.display = "none"
timerNode.style.display = "none"




// * STATE MANAGEMENT FUNCTIONS
function startGame() {
  alert(`¡Oh vosotros los que entráis, abandonad toda esperanza!`);
  // console.log("starting");

  splashScreenNode.style.display = "none";
  gameoverScreenNode.style.display = "none";
  gamewonScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  counterNode.style.display = "flex"
  timerNode.style.display = "flex"
  
  timerDisplayed.innerHTML = 60;
  counterDisplayed.innerHTML = "FAVORABLE: 0 ";

  gameObject = new Game();
  // console.log(gameObject);

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
    // console.log("pressin arrow up");
  } else if (event.key === "ArrowDown") {
    gameObject.character.moveDownEffect();
  //   console.log("pressin arrow up");
  }
});
