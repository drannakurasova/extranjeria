class Game {
  constructor() {
    this.character = new Character();

    this.obstaclesArr = [];
    this.prizesArr = [];

    this.frames = 0;
    this.isGameOn = true;

    this.count = 60;

    this.counterNodeNum = 0;
  }

  obstaclePopUp = () => {
    if (this.obstaclesArr.length === 0 || this.frames % 120 === 0) {
      let randomPositionY = Math.floor(Math.random() * +300);

      let newObstacleTop = new Obstacle(randomPositionY, true);
      this.obstaclesArr.push(newObstacleTop);

      let newObstacleBottom = new Obstacle(randomPositionY + 400, false);
      this.obstaclesArr.push(newObstacleBottom);
    }
  };

  prizePopUp = () => {
    if (this.prizesArr.length === 0 || this.frames % 180 === 0) {
      let randomPositionY = Math.floor(Math.random() * +300);

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
        myBlow.play();
        // myBlow.volume = 0.05;
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
        eachPrize.node.remove();
        this.prizesArr.splice(this.prizesArr.indexOf(eachPrize), 1);
        myYeah.play();
        // myYeah.volume = 0.1;

        this.counterNodeNum++;

        counterDisplayed.innerHTML = "FAVORABLE: " + this.counterNodeNum;

        if (this.counterNodeNum === 5) {
          this.gameWon();
        }
      }
    });
  };

  gameWon = () => {
    gameBoxNode.innerHTML = "";
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameoverScreenNode.style.display = "none";
    counterNode.style.display = "none";
    timerNode.style.display = "none";

    gamewonScreenNode.style.display = "flex";

    myAudio.pause();
    myPipe.play();
  };

  gameOver = () => {
    gameBoxNode.innerHTML = "";

    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gamewonScreenNode.style.display = "none";
    counterNode.style.display = "none";
    timerNode.style.display = "none";
    gameoverScreenNode.style.display = "flex";
    myAudio.pause();
  };

  timer = () => {
    if (this.frames % 60 === 0) {
      this.count--;
      timerNode.innerText = this.count;
    } else if (this.count === 0) {
      this.gameOver();
    }
  };

  mosquitoSound = () => {
    if (this.gameOn === false) {
      myAudio.pause();
    } else {
      myAudio.play();
      myAudio.volume = 0.05;
    }
  };

  //GAME METHODS
  gameLoop = () => {
    this.frames++;

    this.mosquitoSound();

    //OBSTACLE and PRIZES
    this.obstaclePopUp();
    this.prizePopUp();

    this.prizesArr.forEach((eachPrize) => {
      eachPrize.automaticMovement();
    });

    this.obstaclesArr.forEach((eachObstacle) => {
      eachObstacle.automaticMovement();
    });

    this.collisionCharacterObstacle();
    this.collisionCharacterPrize();

    this.timer();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
