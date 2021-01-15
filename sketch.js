var PLAY = 1;
var END = 0;


var gameState = PLAY;
var sword,alien,fruit,alien;
var swordImage,fruit1Image,fruit2Image,fruit3Image,fruit4Image,alienImage,GameOverS,
swordSound,gameoverI;
var fruitG,alienG;
var GameOver;
var score = 0;


function preload(){
  swordImage=loadImage("sword.png");
  
  fruit1Image=loadImage("fruit1.png");
  fruit2Image=loadImage("fruit2.png");
  fruit3Image=loadImage("fruit3.png");
  fruit4Image=loadImage("fruit4.png");
  alienImage=loadImage("alien1.png");

  GameOverS=loadSound("gameover.mp3");
  swordSound=loadSound("knifeSwooshSound.mp3");
  gameoverI=loadImage("gameover.png");

}



function setup(){
  createCanvas (600,600);
  
  sword=createSprite(200,200,20,20);
  sword.addImage(swordImage);
  sword.scale= 0.7;
  
  GameOver=createSprite(300,300,20,20);

  fruitG=new Group();
  
  alienG=new Group();
}






function draw(){
background("white");
  text("Score: "+ score, width/2,50);
  sword.y = World.mouseY;
  sword.x = World.mouseX;
  if (gameState===PLAY){
    fruits();
   aliencreate();
    GameOver.visible= false;
    text("Score: "+ score, width/2,50);
    if(sword.isTouching(fruitG )){
      fruitG.destroyEach();
      score=score+1;
      swordSound.play();
    }
   if(sword.isTouching(fruitG )){
      fruitG.destroyEach();
     score=score+1;
     swordSound.play();
    }
  if(sword.isTouching(fruitG )){
      fruitG.destroyEach();
     score=score+1;
    swordSound.play();
  }
    if(sword.isTouching(fruitG)){
      fruitG.destroyEach();
      score=score+1;
      swordSound.play();
    }
   
    }
    if(sword.isTouching(alienG)){
      alienG.destroyEach();
      GameOverS.play();
      gameState=END;
    }
    
  
  
  if(gameState===END){
    fruitG.destroyEach();
      sword.destroy();
      GameOver.addImage(gameoverI);
    GameOver.visible=true;
    }
  
  
  drawSprites();
}


function fruits() {
   if (frameCount % 60 === 0){
   var fruit = createSprite(600,165,10,40);
   fruit.velocityX = -(6 + score/100);
   
   fruit.y = Math.round(random(80,300));
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1Image);
              break;
      case 2: fruit.addImage(fruit2Image);
              break;
      case 3: fruit.addImage(fruit3Image);
              break;
      case 4: fruit.addImage(fruit4Image);
              break;
      
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    fruit.scale = 0.2;
    fruit.lifetime = 300;
   
   //add each obstacle to the group
    fruitG.add(fruit);
 }

}

function aliencreate(){
if (frameCount % 60 === 0) {
    var alien = createSprite(600,120,40,10);
    alien.y = Math.round(random(80,400));
    alien.addImage(alienImage);
    alien.scale = 0.5;
    alien.velocityX = -3;
    
     //assign lifetime to the variable
    alien.lifetime = 300;
    
    
    //add each cloud to the group
    alienG.add(alien);
  }
}