class Game {
  constructor() {
    this.character = new Character();
    console.log("this trump");

    this.obstaclesArr = [];
    this.prizesArr = [];

    this.frames = 0;
    this.isGameOn = true;
  }

  obstaclePopUp = () => {
    if (this.obstaclesArr.length === 0 || this.frames % 120 === 0) {
      let randomPositionY = Math.floor(Math.random() * +300); // -200 y 0

      let newObstacleTop = new Obstacle(randomPositionY, true);
      this.obstaclesArr.push(newObstacleTop);

      let newObstacleBottom = new Obstacle(randomPositionY + 400, false);
      this.obstaclesArr.push(newObstacleBottom);
    }
  };

  prizePopUp = () => {
    if (this.prizesArr.length === 0 || this.frames % 180 === 0) {
      let randomPositionY = Math.floor(Math.random() * +300); // -200 y 0

      let newPrize = new Prize(randomPositionY, true);
      this.prizesArr.push(newPrize);
    }
  };

  collisionCharacterObstacle = () => {
    this.obstaclesArr.forEach((eachObstacle) => {
      if (
        this.character.x < eachObstacle.x + eachObstacle.w &&
        this.character.x + this.character.w > eachObstacle.x &&
        this.character.y < eachObstacle.y + eachObstacle.h &&
        this.character.y + this.character.h > eachObstacle.y
      ) {
        this.gameOver();
      }
    });
  };

  collisionCharacterPrize = () => {
    this.prizesArr.forEach((eachPrize) => {
      if (
        this.character.x < eachPrize.x + eachPrize.w &&
        this.character.x + this.character.w > eachPrize.x &&
        this.character.y < eachPrize.y + eachPrize.h &&
        this.character.y + this.character.h > eachPrize.y
      ) {
        console.log("Collision with a prize detected!");
      }
    });
  };

  gameOver = () => {
    this.isGameOn = false; // detiene la recursion
    gameScreenNode.style.display = "none"; // ocultar la pantalla de juego
    gameoverScreenNode.style.display = "flex"; // mostrar la pantalla final
    console.log("game over");
  };

  // LATER extrapointsPopUp, extrapointsVanish

  //GAME METHODS
  gameLoop = () => {
    this.frames++;

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop); //??
    }

    //OBSTACLE and PRIZES
    this.obstaclePopUp();
    this.prizePopUp();

    this.obstaclesArr.forEach((eachObstacle) => {
      eachObstacle.automaticMovement();
    });

    this.prizesArr.forEach((eachPrize) => {
      eachPrize.automaticMovement();
    });

    this.collisionCharacterObstacle();
    this.collisionCharacterPrize();
  };
}
