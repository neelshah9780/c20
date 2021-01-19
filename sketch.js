var speed,weight;
var wall;
var car;

function setup() {
  createCanvas(400,400);

speed=random(55,90);
weight=random(400,1500);

car=createSprite(50,50,15,15);
car.shapeColor=90;
car.debug=true;

wall=createSprite(350,50,15,50);
wall.debug=true;
}

function draw() {
  background(100);  
  
  car.collide(wall);

stroke("white");  
line(0,100,400,100);

if(keyDown("RIGHT_ARROW")){
  car.velocityX=speed;
}

if(wall.x-car.x,(car.width+wall.width)/2){
 var deformation= "0.5*weight*speed*speed " /22500; 
  }
  if(deformation<180){
car.shapeColor=color(0,255,0);
  }
  if(deformation<180 && deformation>100){
   car.shapeColor=color(230,230,0);
  }
  if(deformation<100){
   car.shapeColor=color(0,255,0);
  }

  
  drawSprites();
}