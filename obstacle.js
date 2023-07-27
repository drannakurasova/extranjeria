class Obstacle {
  constructor(positionY) {
    this.node = document.createElement("img");
    this.node.src = "./images/doc-denied.png";

    gameBoxNode.append(this.node);

    this.x = gameBoxNode.offsetWidth;
    this.y = positionY;
    this.w = 50;
    this.h = 50;

    // ajustar el tamaño y posición inicial del pollito
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  // OBSTACLE´S METHODS
  automaticMovement = () => {
    this.x -= 4;
    this.y -= 1;
    // if (this.x === gameBoxNode - 20 || this.y === gameBoxNode - 20) {
    //   this.x += 4;
    //   this.y += 1;
    // }
    this.positionUpdate();
  };

  automaticMovementFaster = () => {
    this.x += 20;
    this.y += 2;
    // if (this.x === gameBoxNode - 20 || this.y === gameBoxNode - 20) {
    //   this.x += 6;
    //   this.y += 1;
    // }
    this.positionUpdate();
    console.log ("faster")
  };

  positionUpdate = () => {
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  };
}
