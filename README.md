# extranjeria
a game aiming at annoying you rather than anything else




Extranjeria
      -characters (assigned randomly)
      -set in an extranjeria office
      -start with the chairs, to get out of the door

     To  win:
     - collect 5 papers
     - get 50 points
     screen: out of the door, sunlight
    if lost, screen: extranjeria table, come back next month

    Obstacles:
    - tickets (lose points)
    - extra level: tables

    
    Max 5 mins


# EXTRANJERIA

## [Play the Game!](https://drannakurasova.github.io/extranjeria/)

![Game Logo](./images/logo.png)


# Description

This game aims at annoying you rather than anything else // Este juego está hecho para frustrarte más que nada


# Main Functionalities

- Puedes (intentar a) elegir tu personaje
- Hay una cuenta atrás de 60 segundos para obtener 5 trofeos
- También hay cuenta de los trofeos obtenidos
- Van apareciendo los obstáculos
- El personaje se mueve arriba y abajo
- Si colisionas con un papel denegado o no obtienes 5 papeles antes de que se acabe un minuto, pierdes

# Backlog Functionalities

- Tener más personajes y la asignación aleatoria
- La velocidad sube en cuanto obtengas 3 papeles
- Otro nivel

# Technologies used

- HTML
- CSS
- DOM Manipulation
- JS Classes
- JS Audio ()

# States

- Start Screen
- Choose Your Character Screen
- Instructions Screen
- Game Screen
- Game Won Screen
- Gome Over Screen

# Project Structure

- List here sections for your your different JS files.
- One for main.js to manage DOM elements, one for the Game class and one for each other class file of your game.
- Inside each file you can list the functions, clases, properties and methods of your code.

Example:

## main.js

-chooseCharacter();
-enterGame();
-startGame();


## Game.js

- Game () {
    this.character;
    this.ObstaclesArr;
    this.prizesArr;
    this.frames;
    this.count;
    this.counterNodeNum;

    this.obstaclePopUp();
    this.prizePopUp();
    this.collisionCharacterObstacle();
    this.collisionCharacterPrize();

    gameWon();
    gameOver();
    timer();
    mosquitoSound();
    gameLoop()
}
- 

## Character.js 

- Character () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- moveUpEffect () 
- moveDownEffect ()
- positionUpdate() 

## Prize.js 

- Prize () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- automaticMovement ()
- positionUpdate() 

## Obstacle.js 

- CharaObstaclecter () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- automaticMovement ()
- positionUpdate() 


# Extra Links 

### Sketch
[Link](https://excalidraw.com/#json=QTzNCQ7a66QPDgYXlG7fQ,3xCe_PzRs85MgfyUsgvAhw)

### Trello
[Link](https://trello.com/b/0srYCozu/ironhack-project-1
)
### Slides
[Link](www.your-slides-url-here.com)

## Deploy
[Link](https://drannakurasova.github.io/extranjeria/)