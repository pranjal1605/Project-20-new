var car,car2,car3, wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(400, 200, 50, 50);
  car2 = createSprite(200,100,50,50);
  car3 = createSprite(800,300,50,50);
  wall = createSprite(1300,200,60,200);
  wall.shapeColor = "blue";
  car.velocityX = 10;
  car2.velocityX = 15;
  car3.velocityX = 5;
}

function draw() {
  background(255,400,255);  
  if(wall.x - car.x < (wall.width + car.width)/2){
    car.velocityX = 0;
   deformation();
  }

  if(wall.x - car2.x < (wall.width + car.width)/2){
    car2.velocityX = 0;
    deformation2();
  }
  
  if(wall.x - car3.x < (wall.width + car3.width)/2){
    car3.velocityX = 0;
    deformation3();
  }

  drawSprites();
}

function deformation(){
  var deformation = 0.5 * weight * speed * speed/22509
    if(deformation>180){
      car.shapeColor = "red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }
    if(deformation<100){
      car.shapeColor = "green";
    }
}

function deformation2(){
  var deformation = 0.5 * weight * speed * speed/22509
    if(deformation>180){
      car2.shapeColor = "green";
    }
    if(deformation<180 && deformation>100){
      car2.shapeColor = "red";
    }
    if(deformation<100){

      car2.shapeColor = "yellow";
    }
}

function deformation3(){
  var deformation = 0.5 * weight * speed * speed/22509
    if(deformation>180){
      car3.shapeColor = "black"
    }
    if(deformation<180 && deformation>100){
     car3.shapeColor = "purple"
    }
    if(deformation<100){
     car3.shapeColor = "pink"
    }
}