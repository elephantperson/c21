var bullet, wall;
var speed, weight;
var thickness


function setup() {
  createCanvas(1600,400);
  
speed=random(223,321);
weight=random(30,52);

thickness=random(22,83)

bullet = createSprite(50,200,50,25);
bullet.velocityX = speed; 
bullet.shapeColor="white";

wall = createSprite(1500,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0); 
  
  damage = (0.5 * weight * speed * speed) / (thickness**3);

  
  
  if(damage > 10){
    wall.shapeColor = color(0, 255, 0);
  
  }if(damage < 10){
    wall.shapeColor = color(225, 0, 0);
  }
  
    if(wall.x-bullet.x<(wall.width+bullet.width)/2)
  {
    bullet.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100)
   {
      bullet.shapeColor=color(0,255,0);
   }
  }

  drawSprites();
}