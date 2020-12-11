var fixrec,movrec;
var car,wall;

function setup() {
  createCanvas(800,400);
  fixrec=createSprite(400, 200, 50, 50);
  movrec=createSprite(800, 200, 50, 100);
  fixrec.shapeColor="red";
  movrec.shapeColor="red";

  car=createSprite(200, 300, 50, 50);
  wall=createSprite(800, 300, 50, 100);
  car.velocityX=10;

}

function draw() {
  background(255,255,255);  

  movrec.x=World.mouseX;
  movrec.y=World.mouseY;

  isTouching(); 
  
  bounceoff();

  drawSprites();
}

 function isTouching(){
  if(movrec.x-fixrec.x<movrec.width/2+fixrec.width/2 && fixrec.x-movrec.x<fixrec.width/2+movrec.width/2
    && movrec.y-fixrec.y<movrec.height/2+fixrec.height/2&&fixrec.y-movrec.y<movrec.height/2+fixrec.height/2){
    fixrec.shapeColor="blue";
    movrec.shapeColor="blue";
  }else {
    fixrec.shapeColor="red";
    movrec.shapeColor="red";
  }

 }

  function bounceoff(){
    if(car.x-wall.x<car.width/2+wall.width/2 && wall.x-car.x<wall.width/2+car.width/2){
      car.velocityX=car.velocityX*-1;
    }
  }