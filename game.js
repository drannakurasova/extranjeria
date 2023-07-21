console.log("this is game.js");

class Game {

  constructor() {

    this.character = new Character()
    console.log(this.character)


//     this.obstaculosArr = [];

    this.frames = 0;
    this.isGameOn = true;
  }

//   gameOver = () => {

//     })

//   }


//   ticketsAparecen = () => {
//   }

//   ticketsDesaparecen = () => {


//     }

// papersAparecen

//papersDesaparecen

// LATER extrapointsPopUp, extrapointsVanish

//   collisioncharacterTickets = () => {
//
//   }
//   }


//GAME METHODS
  gameLoop = () => {
    this.frames++;

    this.character.x += 1;
    this.character.node.style.top = `${this.character.x}px`;

    this.character.moveEffect();


    if (this.isGameOn === true) {
      requestAnimationFrame( this.gameLoop )
    } 

  }


}

//POLLITO PLAN
// planificacion

// propiedades
// el pollo => x, y, w, h CHECK
// los tubos => x, y, w, h CHECK

// metodos
// randomizar los tubos CHECK
// colisiones de pollo con los tubos
// colisiones de pollo el suelo
// el movimiento de los tubos CHECK
// movimiento caida del pollo  CHECK
// accion del salto => addEventListener CHECK
// gameover accion

// Extra
// propiedad de el score
// metodo incrementar una puntuacion
// efecto de aumentar la velocidad (complejo)
// reinicio del juego

// EXTRA EXTRA
// sonidos