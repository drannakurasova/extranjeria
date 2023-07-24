console.log("this is game.js");

class Game {

  constructor() {

   

    this.character = new Character();
    console.log(this.character);

    this.obstaclesArr = [];
    this.prizesArr = [];

    this.frames = 0;
    this.isGameOn = true;
  }

//   gameOver = () => {

//     })

//   }

    obstaclePopUp = () => {
       
        if (this.obstaclesArr.length === 0 || this.frames % 120 === 0) {
    
          let randomPositionY = Math.floor( Math.random() * +300 ) // -200 y 0
 
    
          let newObstacleTop = new Obstacle(randomPositionY, true)
          this.obstaclesArr.push( newObstacleTop )
          
          let newObstacleBottom = new Obstacle(randomPositionY + 400, false)
          this.obstaclesArr.push( newObstacleBottom )
      
        }
    
      }
    
    prizePopUp = () => {
       
        if (this.prizesArr.length === 0 || this.frames % 180 === 0) {
    
          let randomPositionY = Math.floor( Math.random() * +300 ) // -200 y 0
      
    
          let newPrize = new Prize (randomPositionY, true)
          this.prizesArr.push( newPrize )

        }
    
      }

      collisionCharacterObstacle = () => {

        // el pollito => this.pollito
        this.obstaclesArr.forEach((eachObstacle) => {
          // los obstaculos => cadaObstaculo
          if (
            this.character.x < eachObstacle.x + eachObstacle.w &&
            this.character.x + this.character.w > eachObstacle.x &&
            this.character.y < eachObstacle.y + eachObstacle.h &&
            this.character.y + this.character.h > eachObstacle.y
          ) {
            console.log ( "Collision detected!")
            this.gameOver()
          }
        })
    
      }




// LATER extrapointsPopUp, extrapointsVanish

//   collisioncharacterTickets = () => {
//
//   }
//   }


//GAME METHODS
  gameLoop = () => {
    this.frames++;

    if (this.isGameOn === true) {
      requestAnimationFrame( this.gameLoop )  //??
    } 

    //OBSTACLE
    this.obstaclePopUp();
    this.prizePopUp();

    this.obstaclesArr.forEach((eachObstacle) => {
      eachObstacle.automaticMovement();
    })

    this.prizesArr.forEach((eachPrize) => {
        eachPrize.automaticMovement();
      })
}
}