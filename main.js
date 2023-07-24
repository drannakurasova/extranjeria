console.log ("main")
// * GLOBAL VARIABLES

const startBtnNode = document.querySelector("#start-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
// const gameoverScreenNode = document.querySelector("#gameover-screen")

let gameObject = null; 

// * STATE MANAGEMENT FUNCTIONS
function startGame() {

  console.log("starting");

  splashScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";


  gameObject = new Game(); 
  console.log(gameObject)

  gameObject.gameLoop()
}

// * ADD EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)

// document.addEventListener("keyup", keyUpHandler, false);
// let upPressed = false;
// function keyUpHandler (event) {
//     if (event.keyCode === 38) {
//         upPressed = true;
//     }
// }
//!! COME BACK HERE
gameBoxNode.addEventListener('click', () => {
    // let arrowKey = event.key;
      
    //     if (arrowKey === 'ArrowUp') {
        gameObject.character.moveUpEffect();   
        console.log ("pressin arrow up")
    } )
//   let character = new Character(); 
//   if (gameObject.isGameOn === true) {
//     gameObject.character.moveEffect()
//   } 

