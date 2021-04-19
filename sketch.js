var pacman,pacmanImage,out,outImage;
var ghost,ghostImage;
var edges
var obstacle,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacleImage1,obstacleImage2,obstacleImage3,obstacleImage5,obstacleImage4,obstacleImage6;

function preload(){
  pacmanImage = loadAnimation("Images/Closed.png","Images/open.png");
  obstacleImage1=loadImage("Images/obstacle1.png")
  obstacleImage2=loadImage("Images/obstacle2.png")
  obstacleImage3=loadImage("Images/obstacle3.png")
  obstacleImage4=loadImage("Images/obstacle4.png")
  obstacleImage5=loadImage("Images/obstacle5.png")
  obstacleImage6=loadImage("Images/obstacle6.png")
      ghostImage=loadImage("Images/Ghost.png")
 

}

function setup() {
  createCanvas(1280,570);
  edges = createEdgeSprites();
  //createSprite(400, 200, 50, 50);
  pacman = createSprite(50,60,15,15)
  pacman.addAnimation("pacman",pacmanImage)
  pacman.scale=0.5;

  ghost = createSprite(550,100,100,50)
  ghost.addImage("ghost",ghostImage)
  ghost.scale=0.8
 

  obstacle1 = createSprite(270,350,100,50)
  obstacle1.addImage("obstacle1",obstacleImage1)
  obstacle1.scale=6.0

 
  obstacle2 = createSprite(530,360,100,50)
  obstacle2.addImage("obstacle2",obstacleImage2)
  obstacle2.scale=5.0

  obstacle3 = createSprite(660,290,1050,50) 
  obstacle3.addImage("obstacle3",obstacleImage3)
  obstacle3.scale=5.0

  obstacle4 = createSprite(900,270,100,50)
  obstacle4.addImage("obstacle4",obstacleImage4)
  obstacle4.scale=5.0

  
  obstacle5 = createSprite(1150,300,100,50)
  obstacle5.addImage("obstacle5",obstacleImage5)
  obstacle5.scale=2.0

  obstacle6 = createSprite(700,500,100,50)
  obstacle6.addImage("obstacle6",obstacleImage6)
  obstacle6.scale=3.5

  

  

  
  
  


}


function draw() {
  background(0); 
 
  if (pacman.isTouching(edges)){
   if(pacman.x > 1280){
     pacman.x=10;
   }

   if(pacman.x<0){
     pacman.x=1250;
   }
   if(pacman.y>570){
     pacman.y=10;
   }
   if(pacman.y<0){
     pacman.y=550
   }
 }

 if(ghost.isTouching(edges)){
  ghost.bounceOff(edges);
}

  
    if(ghost.isTouching(obstacle1)){
        ghost.bounceOff(obstacle1);
    }
    if(ghost.isTouching(obstacle2)){
      ghost.bounceOff(obstacle2);
  }
 /* if(ghost.isTouching(obstacle3)){
    ghost.bounceOff(obstacle3);
}*/
if(ghost.isTouching(obstacle4)){
  ghost.bounceOff(obstacle4);
}
if(ghost.isTouching(obstacle5)){
  ghost.bounceOff(obstacle5);
}
//if(ghost.isTouching(obstacle6)){
  //ghost.bounceOff(obstacle6);
//}
    

  if(keyDown("RIGHT_ARROW")){
      pacman.rotation=360
      pacman.setSpeedAndDirection(5,360);
      GhostSpeedAndDirection()
  }

  if(keyDown("LEFT_ARROW")){
    pacman.rotation=180
    pacman.setSpeedAndDirection(5,180);
     GhostSpeedAndDirection()
}

if(keyDown("UP_ARROW")){
  pacman.rotation=270
  pacman.setSpeedAndDirection(5,270);
  GhostSpeedAndDirection()
}

if(keyDown("DOWN_ARROW")){
  pacman.rotation=90
  pacman.setSpeedAndDirection(5,90);
  GhostSpeedAndDirection()
}
  drawSprites();
  
}

function GhostSpeedAndDirection(){
  if(pacman.x < ghost.x){
    ghost.setSpeedAndDirection(5,180)
  }
  if(pacman.x > ghost.x){
    ghost.setSpeedAndDirection(5,360)
  }
   
  if(pacman.y < ghost.y){
    ghost.setSpeedAndDirection(5,270)
  }
  if(pacman.y > ghost.y){
    ghost.setSpeedAndDirection(5,90)
  }

}
