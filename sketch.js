
var trex ,trex_running;
var ground
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(20,180);
 trex.addAnimation("trexrunning",trex_running);
 trex.scale=0.5;
 trex.x=40
 ground = createSprite(300,199,600,5);
  edges = createEdgeSprites();
}


function draw(){
  background("pink");
  if(keyDown("space")){
    trex.velocityY=-10;
  }
//to add gravity
trex.velocityY=trex.velocityY+0.5
trex.collide(ground);
  drawSprites();
}
