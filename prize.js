class Prize {

    constructor(positionY) {
    
  
      this.node = document.createElement("img");
      this.node.src = "./images/doc-approved.png"
      
      gameBoxNode.append(this.node)
  
     
      this.x = gameBoxNode.offsetWidth; 
      this.y = positionY;
      this.w = 30;
      this.h = 35;
  
      // ajustar el tamaño y posición inicial del pollito
      this.node.style.width = `${this.w}px`;
      this.node.style.height = `${this.h}px`;
      this.node.style.position = "absolute";
      this.node.style.top = `${this.y}px`;
      this.node.style.left = `${this.x}px`;
    }
  
    // PRIZE´S METHODS
    automaticMovement = () => {
      this.x -= 8;
      this.y += 2;
      this.positionUpdate();
    }
  
    positionUpdate = () => {
      this.node.style.left = `${this.x}px`;
      this.node.style.top = `${this.y}px`;
    }
  
  }