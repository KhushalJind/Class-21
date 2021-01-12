var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite (400,100,100,50);
  rect2 = createSprite (600,100,100,50);
  rect3 = createSprite (200,100,100,50);
  rect4 = createSprite(100,100,10,10);
  rect4.velocityX = 9;
  rect5 = createSprite(800,100,10,10);
  rect5.velocityX = -9;
}

function draw() {
  background(0);  
  rect1.shapeColor = "green"
  rect1.debug = true;  
  rect2.shapeColor = "green"
  rect2.debug = true; 
  rect2.x = mouseX;
  rect2.y = mouseY;
  Touching(rect1,rect2);
  Touching(rect2,rect3);
  BounceOff(rect4,rect5);
  console.log (rect2.x-rect1.x);
  drawSprites();
}

function Touching(object1,object2){
  if(object2.x-object1.x < object2.width/2+object1.width/2&&
    (object1.x-object2.x < object1.width/2+object2.width/2)&&
    (object2.y-object1.y < object2.height/2+object1.height/2)&&
    (object1.y-object2.y < object1.height/2+object2.height/2)){
      object1.shapeColor = "red";
      object2.shapeColor = "red";
  }
  else{
    object1.shapeColor = "green"
    object2.shapeColor = "green"
  }
}

function BounceOff(object3,object4){
  if(object4.x-object3.x < object4.width/2+object3.width/2 &&
    (object3.x-object4.x < object3.width/2+object4.width/2)){
     object3.velocityX = object3.velocityX*(-1);
     object4.velocityX = object4.velocityX*(-1); 
    }
    if(object4.y-object3.y < object4.height/2+object3.height/2&&
    (object3.y-object4.y < object3.height/2+object4.height/2)){
      object3.velocityY = object3.velocityY*(-1);
     object4.velocityY = object4.velocityY*(-1); 
    }
  }