console.log("trump is here.js")

class Character {

  constructor() {
    console.log("trump constructor is here")

//!DOM! COME BACK HERE!
    this.node = document.createElement("img");
    this.node.src = "./images/trump.png";
    gameBoxNode.append(this.node)


    this.x = 100; // posicion eje X
    this.y = 80; // posicion eje Y
    this.w = 80; // ancho
    this.h = 85; // alto


    this.moveSpeed = 40;


    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }



//CHARACTER´s METHODS
  moveEffect = () => {
    this.x -= this.moveSpeed;
    this.positionUpdate()

  }

  positionUpdate = () => {
    this.node.style.top = `${this.y}px`;

  }

}