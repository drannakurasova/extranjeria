console.log ("main")
// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameoverScreenNode = document.querySelector("#gameover-screen");
const restartBtnNode = document.querySelector("#restart-btn");
const counterNode= document.querySelector("#counter");
const countdownNode = document.querySelector("#countdown");

let gameObject = null; 

// * STATE MANAGEMENT FUNCTIONS
function startGame() {
  alert (`¡Oh vosotros los que entráis, abandonad toda esperanza!`);
  console.log("starting");

  splashScreenNode.style.display = "none";
  gameoverScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";


  gameObject = new Game(); 
  console.log(gameObject)

  gameObject.gameLoop()
}

// function countFavorable () {
//  let scoreCount = counterNode.createElement ("h3");
//  scoreCount.innerText = 0;
// }

// * EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)
restartBtnNode.addEventListener("click", startGame)


document.addEventListener ('keyup', (event) => {  //todo WHY DOCUNENT NOT GAMEBOXNODE

      if (event.key === 'ArrowUp') {
        gameObject.character.moveUpEffect();   
        console.log ("pressin arrow up")
      } else if (event.key === 'ArrowDown') {
        gameObject.character.moveDownEffect();   
        console.log ("pressin arrow up")
      }
      } )


