var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1500,400);

  speed = random(30,52);
  weight = random(223,321);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 60, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1500,200,thickness,200);
  wall.shapeColor = rgb(80,80,80);

}

function draw() {
  background(0); 

if(isTouching(bullet,wall)){

  var deformation = (0.5 * weight * speed * speed)/(thickness*thickness*thickness);
  bullet.velocityX = 0;

  if(deformation<10){

    wall.shapeColor = "green";
  }
  if (deformation>10) {
    
    wall.shapeColor = "red";
  }
}
  drawSprites();
}
