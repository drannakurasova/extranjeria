class Character {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/trump.png";
    gameBoxNode.append(this.node);

    this.x = 400;
    this.y = 120;
    this.w = 80;
    this.h = 85;

    this.moveSpeed = 20;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }

  //CHARACTER´s METHODS
  moveUpEffect = () => {
    this.y -= this.moveSpeed;
    this.positionUpdate();
  };

  moveDownEffect = () => {
    this.y += this.moveSpeed;
    this.positionUpdate();
  };

  positionUpdate = () => {
    this.node.style.top = `${this.y}px`;
  };
}
