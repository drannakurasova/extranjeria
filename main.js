console.log ("main")
// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
// const gameoverScreenNode = document.querySelector("#gameover-screen")

let gameObj = null; 

// * STATE MANAGEMENT FUNCTIONS
function startGame() {

  console.log("starting");

  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";


  gameObj = new Game(); //!COME BACK HERE
  console.log(gameObj)

  gameObj.gameLoop()
}

// * ADD EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)
gameBoxNode.addEventListener("keydown", () => {
    if (keydown.keyCode === 39) {
        gameObj.character.moveEffect();   
      }

  let character = new Character(); //! COME BACK HERE
  if (gameObj.isGameOn === true) {
    gameObj.character.moveEffect()
  } 
})