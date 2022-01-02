var bg;
var pc, pcImg;
var alienImg;
var block1,block2, block3,block4, block5, block6, block7, block9;
var block1left, block1right, block1top, block1bottom;
var block2left, block2right,block2top, block2botton;
var block3left, block3right,block3top, block3botton;
var block4left, block4right,block4top, block4botton;
var block5left, block5right,block5top, block5botton;
var block6left, block6right,block6top, block6botton;
var block7left, block7right,block7top, block7botton;
var block8left, block8right,block8top, block8botton;
var block9left, block9right,block9top, block9botton;
var bullet;
var crystal,crystalImg;
var errCount;
var life1, life2, life3, life4 ,life5;
var goodImg;


var path1211, path1212,path1221, path1222 ,path1223;

var path231,path232;
var path341,path342;
var path451;
var path461,path462,path463, path464;
var path371;
var path781;
var path671;
var path581,path582;
var path891;

var alienGroup1,alienGroup2,alienGroup3,alienGroup4,alienGroup5,alienGroup6,alienGroup7,alienGroup8,alienGroup9;
function preload(){
  bg = loadImage("bg.png")
  pcImg = loadImage("pc.png")
  alienImg = loadImage('alien.png')
  crystalImg = loadImage('crystal.png');
  goodImg = loadImage('download (1).jpg');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  errCount =50
  life1 = createSprite(100,30,30,30);  
  life2 = createSprite(150,30,30,30); 
  life3 = createSprite(200,30,30,30); 
  life4 = createSprite(250,30,30,30); 
  life5 = createSprite(300,30,30,30); 

  block1 = createSprite(260,770,300,150);
  block1left = createSprite(110,770,2,150);
  block1right = createSprite(410,770,2,150);
  block1top = createSprite(260,695,300,2);
  block1bottom = createSprite(260,845,300,2);
  //;;;;

  block2 = createSprite(280,450,200,150);
  block2left = createSprite(180,450,2,150);
  block2right = createSprite(380,450,2,150);
  block2top = createSprite(280,375,200,2);
  block2bottom = createSprite(280,525,200,2);
  //;;;;
  block4 = createSprite(800,800,300,150);
  block4left = createSprite(650,800,2,150);
  block4right = createSprite(950,800,2,150);
  block4top = createSprite(800,725,300,2);
  block4bottom = createSprite(800,875,300,2);
  //;;;;
  block3 = createSprite(750,350,300,150);
  block3left = createSprite(600,350,2,150);
  block3right = createSprite(900,350,2,150);
  block3top = createSprite(750,275,300,2);
  block3bottom = createSprite(750,425,300,2);
  // ;;;;
  block5 = createSprite(1250,800,300,130);
  block5left = createSprite(1100,800,2,130);
  block5right = createSprite(1400,800,2,130);
  block5top = createSprite(1250,735,300,2);
  block5bottom = createSprite(1250,865,300,2);
  //;;;;
  block6 = createSprite(1180,150,300,100);
  block6left = createSprite(1030,150,2,100);
  block6right = createSprite(1330,150,2,100);
  block6top = createSprite(1180,100,300,2);
  block6bottom = createSprite(1180,200,300,2);
  //;;;;
  block8 = createSprite(1300,550,300,150);
  block8left = createSprite(1150,550,2,150);
  block8right = createSprite(1450,550,2,150);
  block8top = createSprite(1300,475,300,2);
  block8bottom = createSprite(1300,625,300,2);
  //;;;;
  block7 = createSprite(1050,410,50,130);
  block7left = createSprite(1025,410,2,130);
  block7right = createSprite(1075,410,2,130);
  block7top = createSprite(1050,345,50,2);
  block7bottom = createSprite(1050,475,50,2);
  //;;;;
  block9 = createSprite(1660,550,150,150);
  block9left = createSprite(1585,550,2,130);
  block9right = createSprite(1735,550,2,130);
  block9top = createSprite(1660,475,50,2);
  block9bottom = createSprite(1660,625,50,2);
  //;;;;
  crystal = createSprite(1715,490,5,5);
  crystal.addImage(crystalImg);
  crystal.scale = 0.3
  path1221 = createSprite(320,650,20,90);
  path1222 = createSprite(350,590,20,60);
  path1222.rotation = 60;
  path1223 = createSprite(370,550,20,60);
  path1211 = createSprite(130,660,20,120);
  path1211.rotation = -30
  path1212 = createSprite(150,560,20,140);
  path1212.rotation = 45;
  path231 = createSprite(255,340,20,90);
  path231.rotation = 45;
  path232 = createSprite(440,320,320,20);
  path341 = createSprite(710,570,20,310);
  path342 = createSprite(820,570,20,310);
  path451 = createSprite(1025,790,150,20);
  path461 = createSprite(710,227,20,100);
  path462 = createSprite(760,190,90,20);
  path463 = createSprite(865,160,20,140);
  path463.rotation = 65;
  path464 = createSprite(975,130,110,20);
  path371 = createSprite(963,360,125,20);
  path781 = createSprite(1100,480,120,20);
  path671 = createSprite(1050,275,20,150);
  path581 = createSprite(1350,710,20,60);
  path582 = createSprite(1395,650,20,120);
  path582.rotation = 55;
  path891 = createSprite(1520,585,150,20);


  pc = createSprite(400, 800, 50, 50);
  pc.addImage(pcImg);
  pc.scale = 0.05;
  pc.setCollider('circle',0,0,30);
  pc.debug = 1;

  alienGroup1 = new Group();
  addSprites(alienGroup1,5,alienImg,0.2,110, 410,695,845)
  alienGroup1.setVelocityXEach(1.5);
  alienGroup1.setVelocityYEach(1.5) 
  alienGroup1.setColliderEach("circle",0,0,30)

  alienGroup2 = new Group();
  addSprites(alienGroup2,5,alienImg,0.2,180,380,375,525)
  alienGroup2.setVelocityXEach(1.5);
  alienGroup2.setVelocityYEach(1.5) 
  alienGroup2.setColliderEach("circle",0,0,30)

  alienGroup3 = new Group();
  addSprites(alienGroup3,5,alienImg,0.2,600,900,275,425)
  alienGroup3.setVelocityXEach(1.5);
  alienGroup3.setVelocityYEach(1.5) 
  alienGroup3.setColliderEach("circle",0,0,30)

  alienGroup4 = new Group();
  addSprites(alienGroup4,5,alienImg,0.2,650,950,725,875)
  alienGroup4.setVelocityXEach(1.5);
  alienGroup4.setVelocityYEach(1.5) 
  alienGroup4.setColliderEach("circle",0,0,30)

  alienGroup5 = new Group();
  addSprites(alienGroup5,5,alienImg,0.2,1100,1400,735,865)
  alienGroup5.setVelocityXEach(1.5);
  alienGroup5.setVelocityYEach(1.5) 
  alienGroup5.setColliderEach("circle",0,0,30)

  alienGroup6 = new Group();
  addSprites(alienGroup6,5,alienImg,0.2,1030,1330,100,200)
  alienGroup6.setVelocityXEach(1.5);
  alienGroup6.setVelocityYEach(1.5) 
  alienGroup6.setColliderEach("circle",0,0,30)

  alienGroup7 = new Group();
  addSprites(alienGroup7,2,alienImg,0.2,1025,1075,345,475)
  alienGroup7.setVelocityXEach(1.5);
  alienGroup7.setVelocityYEach(1.5) 
  alienGroup7.setColliderEach("circle",0,0,30)
  
  alienGroup8 = new Group();
  addSprites(alienGroup8,5,alienImg,0.2,1150,1450,475,625)
  alienGroup8.setVelocityXEach(1.5);
  alienGroup8.setVelocityYEach(1.5)
  alienGroup8.setColliderEach("circle",0,0,30)

  alienGroup9 = new Group();
  addSprites(alienGroup9,5,alienImg,0.2,1585,1735,475,625)
  alienGroup9.setVelocityXEach(1.5);
  alienGroup9.setVelocityYEach(1.5)
  alienGroup9.setColliderEach("circle",0,0,30)
}


function addSprites(spriteGroup, numberOfSprites, spriteImage, scale,randomxX, randomxY,randomyY,randomyX) {
  for (var i = 0; i < numberOfSprites; i++) {
    var x, y;

    //C41 //SA

      x = random(randomxX,randomxY);
      y = random(randomyY,randomyX);
      
    
    var sprite = createSprite(x, y);
    sprite.addImage("sprite", spriteImage);

    sprite.scale = scale;
    spriteGroup.add(sprite);
  }
}

function draw() {
  background(bg); 
  console.log(errCount)
  if(pc.isTouching(block1)
    ||pc.isTouching(block2)
    ||pc.isTouching(block4)
    ||pc.isTouching(block5)
    ||pc.isTouching(block6)
    ||pc.isTouching(block7)
    ||pc.isTouching(block8)
    ||pc.isTouching(block9)
    ||pc.isTouching(path1221)
    ||pc.isTouching(path1222)
    ||pc.isTouching(path1223)
    ||pc.isTouching(path1211)
    ||pc.isTouching(path1212)
    ||pc.isTouching(path231)
    ||pc.isTouching(path232)
    ||pc.isTouching(path341)
    ||pc.isTouching(path342)
    ||pc.isTouching(path451)
    ||pc.isTouching(path461)
    ||pc.isTouching(path462)
    ||pc.isTouching(path463)
    ||pc.isTouching(path464)
    ||pc.isTouching(path371)
    ||pc.isTouching(path781)
    ||pc.isTouching(path671)
    ||pc.isTouching(path581)
    ||pc.isTouching(path582)
    ||pc.isTouching(path891)
    ){
    console.log("touching")
  }
  else{
    console.log("not touching")
    errCount-= 0.1
  }

  if(alienGroup1.isTouching(pc)
  ||alienGroup2.isTouching(pc)
  ||alienGroup3.isTouching(pc)
  ||alienGroup4.isTouching(pc)
  ||alienGroup5.isTouching(pc)
  ||alienGroup6.isTouching(pc)
  ||alienGroup7.isTouching(pc)
  ||alienGroup8.isTouching(pc)
  ||alienGroup9.isTouching(pc)){
    errCount-= 0.3;
  }
  
  if(errCount<40){
    life5.destroy();
  }
  if(errCount<30){
    life4.destroy();
  }
  if(errCount<20){
    life3.destroy();
  }
  if(errCount<10){
    life2.destroy();
  }
  

  alienGroup1.bounceOff(block1left)
  alienGroup1.bounceOff(block1right)
  alienGroup1.bounceOff(block1bottom)
  alienGroup1.bounceOff(block1top)
  alienGroup2.bounceOff(block2left)
  alienGroup2.bounceOff(block2right)
  alienGroup2.bounceOff(block2bottom)
  alienGroup2.bounceOff(block2top)
  alienGroup3.bounceOff(block3left)
  alienGroup3.bounceOff(block3right)
  alienGroup3.bounceOff(block3bottom)
  alienGroup3.bounceOff(block3top)
  alienGroup4.bounceOff(block4left)
  alienGroup4.bounceOff(block4right)
  alienGroup4.bounceOff(block4bottom)
  alienGroup4.bounceOff(block4top)
  alienGroup6.bounceOff(block6left)
  alienGroup6.bounceOff(block6right)
  alienGroup6.bounceOff(block6bottom)
  alienGroup6.bounceOff(block6top)
  alienGroup5.bounceOff(block5left)
  alienGroup5.bounceOff(block5right)
  alienGroup5.bounceOff(block5bottom)
  alienGroup5.bounceOff(block5top)
  alienGroup7.bounceOff(block7left)
  alienGroup7.bounceOff(block7right)
  alienGroup7.bounceOff(block7bottom)
  alienGroup7.bounceOff(block7top)
  alienGroup8.bounceOff(block8left)
  alienGroup8.bounceOff(block8right)
  alienGroup8.bounceOff(block8bottom)
  alienGroup8.bounceOff(block8top)
  alienGroup9.bounceOff(block9left)
  alienGroup9.bounceOff(block9right)
  alienGroup9.bounceOff(block9bottom)
  alienGroup9.bounceOff(block9top)


  if(keyDown("UP_ARROW")){
    pc.y-=2;
   if(keyDown(13)){
     bullet = createSprite(pc.y,pc.x,5,10);
   }
  }
  if(keyIsDown(LEFT_ARROW)){
    pc.rotation = -60;
    pc.y-=2;
    pc.x-=2;
  }
  else if(keyWentUp(LEFT_ARROW)){
    pc.rotation = 0;
  }
  if(keyIsDown(RIGHT_ARROW)){
    
    pc.rotation = 60;
    pc.y-=2;
    pc.x+=2;
  }
  else if(keyWentUp(RIGHT_ARROW)){
    pc.rotation = -0
  }
 if(keyDown("a")){
    pc.rotation = -90
    pc.x-= 2
 }
 else if(keyWentUp("a")){
  pc.rotation = 0;
 }
 if(keyDown("d")){
  pc.rotation = 90
  pc.x+= 2
}
else if(keyWentUp("d")){
  pc.rotation = -0;
 }
 if(keyIsDown(DOWN_ARROW)){
    
  pc.rotation = 180;
  pc.y+=2;
  
}
else if(keyWentUp(DOWN_ARROW)){
  pc.rotation = -0
}
if(errCount<0){
  life1.destroy();
  background("#000000")
  textSize(50)
  stroke("#FFF300")
  text('your city is gone! We, whom you call aliens, have taken it over',500,height/2)
  pc.destroy();
}
if(pc.isTouching(crystal)){
  background(goodImg);
  textSize(50)
  stroke("#FFF300")
  text('Thank you for saving this city from the aliens',500,height/2)
  alienGroup1.destroyEach();
  alienGroup2.destroyEach()
  alienGroup3.destroyEach()
  alienGroup4.destroyEach()
  alienGroup5.destroyEach()
  alienGroup6.destroyEach()
  alienGroup7.destroyEach()
  alienGroup8.destroyEach()
  alienGroup9.destroyEach()
  
}
  drawSprites();
}
