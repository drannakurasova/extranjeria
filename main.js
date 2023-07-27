console.log("main");
// * GLOBAL VARIABLES

const startBtn1Node = document.querySelector("#start-btn1");
const splashScreen1Node = document.querySelector("#splash-screen1");

const characterContainerNode = document.querySelector("#character-container");
const trumpFirstNode = document.querySelector("#trump-first");
const ceasarFirstNode = document.querySelector("#ceasar-first");
const startBtn2Node = document.querySelector("#start-btn2");

const startBtn3Node = document.querySelector("#start-btn3");
const splashScreen2Node = document.querySelector("#splash-screen2");

const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const counterNode = document.querySelector("#counter");
const timerNode = document.querySelector("#timer");
const myAudio = document.querySelector("#audio");

const gameoverScreenNode = document.querySelector("#gameover-screen");
const gamewonScreenNode = document.querySelector("#gamewon-screen");
const restartBtn1Node = document.querySelector("#restart-btn1");
const restartBtn2Node = document.querySelector("#restart-btn2");

const myYeah = new Audio("yeah.mp3");
const myBlow = new Audio("blow.mp3");
const myPipe = new Audio("badpipe.mp3");

let counterDisplayed = document.createElement("h2");
document.querySelector("#counter").append(counterDisplayed);

let timerDisplayed = document.createElement("h2");
document.querySelector("#timer").append(timerDisplayed);

let gameObject = null;

counterNode.style.display = "none";
timerNode.style.display = "none";

// * STATE MANAGEMENT FUNCTIONS
function chooseCharacter(character) {
  splashScreen1Node.style.display = "none";
  splashScreen2Node.style.display = "none";
  gameoverScreenNode.style.display = "none";
  gamewonScreenNode.style.display = "none";
  gameScreenNode.style.display = "none";

  counterNode.style.display = "none";
  timerNode.style.display = "none";

  characterContainerNode.style.display = "flex";

  switch (character) {
    case "trump":
      document.getElementById("img").src = "./images/trump-first.jpg";
      document.getElementById("name").innerHTML = " Donald Trump ";
      document.getElementById("start-btn2").innerHTML = "Soy Trump";
      break;
    case "ceasar":
      document.getElementById("img").src = "./images/ceasar-first.jpg";
      document.getElementById("name").innerHTML = " Julius Caesar ";
      document.getElementById("start-btn2").innerHTML = "Soy Caesar";
  }
}

function enterGame() {
  if (document.getElementById("start-btn2").innerHTML === "Soy Trump") {
    alert(`¿En serio? Vale, venga`);
  } else if (document.getElementById("start-btn2").innerHTML === "Soy Caesar") {
    alert(`Lo siento pero tus preferencias no importan, todos somos Trump`);
  }

  splashScreen2Node.style.display = "flex";
  characterContainerNode.style.display = "none";
  splashScreen1Node.style.display = "none";
  gameoverScreenNode.style.display = "none";
  gamewonScreenNode.style.display = "none";
  gameScreenNode.style.display = "none";

  counterNode.style.display = "none";
  timerNode.style.display = "none";
}

function startGame() {
  alert(`¡Oh vosotros los que entráis, abandonad toda esperanza!`);
  // console.log("starting");
  characterContainerNode.style.display = "none";
  splashScreen1Node.style.display = "none";
  splashScreen2Node.style.display = "none";
  gameoverScreenNode.style.display = "none";
  gamewonScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  counterNode.style.display = "flex";
  timerNode.style.display = "flex";

  timerDisplayed.innerHTML = 60;
  counterDisplayed.innerHTML = "FAVORABLE: 0 ";

  gameObject = new Game();
  // console.log(gameObject);

  gameObject.gameLoop();
}

// * EVENT LISTENERS
startBtn1Node.addEventListener("click", chooseCharacter);
startBtn2Node.addEventListener("click", enterGame);
startBtn3Node.addEventListener("click", startGame);
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
