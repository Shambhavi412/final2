





const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var eB1, eT1, b;
var b1, t1, b2, t2, b3, t3, b4, t4, b5, t5, t6, b6;

var t7,t8,t9,t10,t11;

var t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30;

var b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30;

var t31, t32, t33, t34, t35, t36, t37, t38, t39, t40;

var b31, b32, b33, b34, b35, b36, b37, b38, b39, b40;

var b41, b42, b43, b44, b45, b46, b47, b48, b49, b50, b51, b52, b53, b54, b55, b56, b57, b58, b59, b60

var t41, t42, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58, t59, t60;
var ground;

var player;
var plr;

var exp;

var Xp;

var bg;
var t;

var shps;

var angle = 0;

var ob1;

var d;

var gravity;

var r;

var d, d1, d2;

var hit = false;
var hit2 = false;
var hit3 = false;
var hit4 = false;
var hit5 = false;
var hit6 = false;
var hit7  = false;
var hit8 = false;
var hit9 = false;
var hit10 = false;

var hi;
var l;

var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30;
var u1, u2, u3, u4, u5, u6, u7, u8, u9, u10, u11, u12, u13, u14, u15, u16, u17, u18, u19, u20, u21, u22, u23, u24, u25, u26, u27, u28, u29, u30, u31, u32, u33, u34, u35, u36, u37, u38, u39, u40, u41, u42, u43, u44, u45, u46, u47, u48, u49, u50, u51, u52, u53, u54, u55;

var jp;

var kopGroup;
var Kx, Ky;
var gs = 1;
//var kop;
var rules;
var rL;
var rL2

function preload() {
  eT1 = loadImage('images/peace.png');
  eB1 = loadImage('images/lo.png')
  b = loadImage('images/3.jpg');
  bg = loadImage('images/bbb.png');
  l = loadImage("images/love.jpg");
  rL = loadImage("rules/1.jpg")
  rL2 = loadImage("rules/2.jpg")

  //o = loadImage("images/kljk.pdf")
    }



function setup(){
    var canvas = createCanvas(displayWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    /*engine = Engine.create(document.body, {
      world: {
        gravity: { x:0, y:0.17 }
      }
    }*/
    // = createSprite(windowWidth/2, windowHeight, 1000,500);
  //rules.addImage("rules", rL)
    
    //b3 = new JBody(150,b2.body.position.y-69,60,60,'lightblue')
    ground = new JBody(displayWidth/2,625,displayWidth*40,20,eT1);
   
    //ellipseMode(RADIUS);
    player = createSprite(150,300,40,40);
   player.shapeColor = "pink";
    //player = new Player();
    
    exp = createSprite(100,0,200,100);
  // exp.velocityX = 10;
   exp.shapeColor = "white"
   exp.visible = true;

   kopGroup = createGroup()

  
fill(255)


angleMode(DEGREES);

   Engine.update(engine);
}



function draw(){
  background("black");
  /*if(gs = 1)
  {camera.position.x = rules.x;
    camera.position.y = rules.y;

    //var o = createSprite(100,700,100,100);
    
    if(keyIsDown("x"))
    {
      gs = 2;
    }
  }

  if(gs = 2)
  {camera.position.x = rules.x;
    camera.position.y = rules.y;

    rules.changeImage("rules2", rL2)
    
  }

  if(gs = 3)
  {
    o.velocityX = 0
    if(keyIsDown(32))
    {
      gs = 4;
    }
  }

  if(gs = 4)
  {
    o.shapeColor = "blue"
    if(keyIsDown(32))
    {
      gs = 5;
    }
  }
  if(gs = 5)
  {
   o.velocityY = -5
    if(keyIsDown(32))
    {
      gs = "play  ";
    }
  }*/

  

  

  

  
  Bodies1();
  Bodies2();
 

  display1();
  display2();
  
  /*hit = collideRectRect(150, 370, 60, 60, player.x, player.y, 50, 75);

  hit2 = collideRectRect(380, 370, 60, 60, player.x, player.y, 50, 75);

hit3 = collideRectRect(610, 390, 60, 60, player.x, player.y, 50, 75);

hit4 = collideRectRect(840, 430, 60, 60, player.x, player.y, 50, 75);

hit5 = collideRectRect(1070, 540, 60, 60, player.x, player.y, 50, 75);

hit6 = collideRectRect(1300, 595, 60, 60, player.x, player.y, 50, 75);

hit7 = collideRectRect(1530, 540, 60, 60, player.x, player.y, 50, 75);

hit8 = collideRectRect(1760, 500, 60, 60, player.x, player.y, 50, 75);

hit9 = collideRectRect(1820 + 3, 500, 60, 60, player.x, player.y, 50, 75);

hit10 = collideRectRect(1880 + 6, 500, 60, 60, player.x, player.y, 50, 75);



hit11 = collideRectRect(1940+9,500, 60, 60, player.x, player.y, 50, 75);

hit12 = collideRectRect(2179,585+10, 60, 60, player.x, player.y, 50, 75);

hit13 = collideRectRect(2409,525+10, 60, 60, player.x, player.y, 50, 75);

hit14 = collideRectRect(2469+1,525+10, 60, 60, player.x, player.y, 50, 75);

hit15 = collideRectRect(2529+2,525+10, 60, 60, player.x, player.y, 50, 75);

hit15 = collideRectRect(2589+3,525+10, 60, 60, player.x, player.y, 50, 75);

hit16 = collideRectRect(2649+4,525+10, 60, 60, player.x, player.y, 50, 75);

hit17 = collideRectRect(2709+5,525+10, 60, 60, player.x, player.y, 50, 75);

hit18 = collideRectRect(2769+6,525+10, 60, 60, player.x, player.y, 50, 75);

hit19 = collideRectRect(2829+7,525+10, 60, 60, player.x, player.y, 50, 75);

hit20 = collideRectRect(2889+8,525+10, 60, 60, player.x, player.y, 50, 75);

hit21 = collideRectRect(2949+9,525+10, 60, 60, player.x, player.y, 50, 75);

hit22 = collideRectRect(3009+10,525+10, 60, 60, player.x, player.y, 50, 75);

hit23 = collideRectRect(3250,585+10, 60, 60, player.x, player.y, 50, 75);

hit24 = collideRectRect(3480,420+10, 60, 60, player.x, player.y, 50, 75);

hit25 = collideRectRect(3710,420+10, 60, 60, player.x, player.y, 50, 75);

hit26 = collideRectRect(3940,420+10, 60, 60, player.x, player.y, 50, 75);

hit27 = collideRectRect(4170,585+10, 60, 60, player.x, player.y, 50, 75);

hit28 = collideRectRect(4400,450+10, 60, 60, player.x, player.y, 50, 75);

hit29 = collideRectRect(4630,520+10, 60, 60, player.x, player.y, 50, 75);

hit30 = collideRectRect(4860,420+10, 60, 60, player.x, player.y, 50, 75);

hit31 = collideRectRect(5090,windowHeight-253+10, 60, 60, player.x, player.y, 50, 75);

hit32 = collideRectRect(5090,340+10, 60, 60, player.x, player.y, 50, 75);

hit33 = collideRectRect(5320,380+10, 60, 60, player.x, player.y, 50, 75);

hit34 = collideRectRect(5550,420+10, 60, 60, player.x, player.y, 50, 75);

hit35 = collideRectRect(5610+1,420+10, 60, 60, player.x, player.y, 50, 75);

hit36 = collideRectRect(5670+2,420+10, 60, 60, player.x, player.y, 50, 75);

hit37 = collideRectRect(5730+3,420+10, 60, 60, player.x, player.y, 50, 75);

hit38 = collideRectRect(5963,420+10, 60, 60, player.x, player.y, 50, 75);

hit39 = collideRectRect(6023+5,420+10, 60, 60, player.x, player.y, 50, 75);

hit40 = collideRectRect(6083+10,420+10, 60, 60, player.x, player.y, 50, 75);

hit41 = collideRectRect(6143+15,420+10, 60, 60, player.x, player.y, 50, 75);

hit42 = collideRectRect(6388,335+10, 60, 60, player.x, player.y, 50, 75);

hit43 = collideRectRect(6448+5,335+10, 60, 60, player.x, player.y, 50, 75);

hit44 = collideRectRect(6508+10,335+10, 60, 60, player.x, player.y, 50, 75);

hit45 = collideRectRect(6568+15,335+10, 60, 60, player.x, player.y, 50, 75);

hit46 = collideRectRect(6813,500+10, 60, 60, player.x, player.y, 50, 75);

hit47 = collideRectRect(6873+5,500+10, 60, 60, player.x, player.y, 50, 75);

hit48 = collideRectRect(6933+10,500+10, 60, 60, player.x, player.y, 50, 75);

hit49 = collideRectRect(6993+15,500+10, 60, 60, player.x, player.y, 50, 75);

hit50 = collideRectRect(7238,275+10, 60, 60, player.x, player.y, 50, 75);

hit51 = collideRectRect(7298+5,275+10, 60, 60, player.x, player.y, 50, 75);

hit52 = collideRectRect(7358+10,275+10, 60, 60, player.x, player.y, 50, 75);

hit53 = collideRectRect(7598,500+10, 60, 60, player.x, player.y, 50, 75);

hit54 = collideRectRect(7658+5,500+10, 60, 60, player.x, player.y, 50, 75);

hit55 = collideRectRect(7718+10,500+10, 60, 60, player.x, player.y, 50, 75);

hit56 = collideRectRect(7778+15,500+10, 60, 60, player.x, player.y, 50, 75);

hit57 = collideRectRect(7838+20,500+10, 60, 60, player.x, player.y, 50, 75);

hit58 = collideRectRect(7898+25,500+10, 60, 60, player.x, player.y, 50, 75);

hit59 = collideRectRect(8153,275+10, 60, 60, player.x, player.y, 50, 75);

hit60 = collideRectRect(8213+5, 275+10, 60, 60, player.x, player.y, 50, 75);

hit61 = collideRectRect(8273+10,275+10, 60, 60, player.x, player.y, 50, 75);

hit62 = collideRectRect(8513,310+10, 60, 60, player.x, player.y, 50, 75);

hit63 = collideRectRect(8743,370+10, 60, 60, player.x, player.y, 50, 75);

hit64 = collideRectRect(8973,430+10, 60, 60, player.x, player.y, 50, 75);

hit65 = collideRectRect(9203,585+10, 60, 60, player.x, player.y, 50, 75);

hit67 = collideRectRect(9433,430+10, 60, 60, player.x, player.y, 50, 75);

hit68 = collideRectRect(9493+3,430+10, 60, 60, player.x, player.y, 50, 75);

hit69 = collideRectRect(9726,585+10, 60, 60, player.x, player.y, 50, 75);

hit70 = collideRectRect(9786+3,585+10, 60, 60, player.x, player.y, 50, 75);

hit71 = collideRectRect(9846+6,585+10, 60, 60, player.x, player.y, 50, 75);

hit72 = collideRectRect(10082,530+10, 60, 60, player.x, player.y, 50, 75);

hit73 = collideRectRect(10312,490+10, 60, 60, player.x, player.y, 50, 75);

hit74 = collideRectRect(10542,420+10, 60, 60, player.x, player.y, 50, 75);

hit75 = collideRectRect(10772,335+10, 60, 60, player.x, player.y, 50, 75);

hit76 = collideRectRect(11002,240+10, 60, 60, player.x, player.y, 50, 75);

hit77 = collideRectRect(11232,135+10, 60, 60, player.x, player.y, 50, 75);

hit78 = collideRectRect(11462,105+10, 60, 60, player.x, player.y, 50, 75);

hit79 = collideRectRect(11692,135+10, 60, 60, player.x, player.y, 50, 75);

hit80 = collideRectRect(11922,240+10, 60, 60, player.x, player.y, 50, 75);

hit81 = collideRectRect(12152,335+10, 60, 60, player.x, player.y, 50, 75);

hit82 = collideRectRect(12382,420+10, 60, 60, player.x, player.y, 50, 75);

hit83 = collideRectRect(12612,490+10, 60, 60, player.x, player.y, 50, 75);

hit84 = collideRectRect(12842,530+10, 60, 60, player.x, player.y, 50, 75);

hit85 = collideRectRect(13072,490+10, 60, 60, player.x, player.y, 50, 75);

hit86 = collideRectRect(13302,550+10, 60, 60, player.x, player.y, 50, 75);

hit87 = collideRectRect(13362+3,550+10, 60, 60, player.x, player.y, 50, 75);

hit88 = collideRectRect(13595,450+10, 60, 60, player.x, player.y, 50, 75);

hit89 = collideRectRect(13825,380+10, 60, 60, player.x, player.y, 50, 75);

hit90 = collideRectRect(14005,450+10, 60, 60, player.x, player.y, 50, 75);

hit91 = collideRectRect(14285,335+10, 60, 60, player.x, player.y, 50, 75);

hit92 = collideRectRect(14345+5,335+10, 60, 60, player.x, player.y, 50, 75);



bounceTower()
  
  if(hit === true || hit2 === true || hit3 === true || hit4 === true || hit5 === true || hit6 === true || hit7 === true || hit8 === true || hit9 === true || hit10 === true || hit11 === true || hit12 === true || hit13 === true|| hit14 === true || hit15 === true || hit16 === true || hit17 === true|| hit18 === true || hit19 === true || hit20 === true|| hit21 === true || hit22 === true || hit23 === true || hit24 === true || hit25 === true|| hit26 === true || hit27 === true|| hit28 === true|| hit29 === true || hit30 === true || hit31 === true || hit32 === true || hit33 === true || hit34 === true || hit35 === true || hit36 === true || hit37 === true|| hit38 === true || hit39 === true || hit40 === true || hit41 === true|| hit42 === true|| hit43 === true|| hit44 === true|| hit45 === true || hit46 === true || hit47 === true || hit48 === true || hit49 === true || hit50 === true || hit51 === true || hit52 === true || hit53 === true|| hit54 === true || hit55 === true|| hit56 === true|| hit57 === true || hit58 === true || hit59 === true || hit60 === true || hit61 === true  || hit62 === true  || hit63 === true  || hit64 === true  || hit65 === true  || hit67 === true || hit68 === true  || hit69 === true  || hit70 === true || hit71 === true || hit72 === true || hit73 === true || hit74 === true || hit75 === true || hit76 === true || hit77 === true || hit78 === true || hit79 === true || hit80 === true || hit81 === true || hit82 === true || hit83 === true || hit84 === true || hit85 === true || hit86 === true || hit87 === true || hit88 === true || hit89 === true || hit90 === true || hit91 === true || hit92 === true  )
{
    player.shapeColor = "red";
    t1.body.shapeColor = "red";
    console.log('colliding?', hit);

    //player.collide(t1.body);
    player.velocityY=0;
    player.velocityX=0;

    if(keyIsDown(32)) 
      {
        bounceTower();
    
      }
  
}
*/
 
/*if(kopGroup.isTouching(player))
{
  
  if(keyIsDown(32))
  {
 player.velocityY = -5
 }
 /*if(player.velocityY<0)
 {
   player.velocityY = player.velocityY + 0.8
 }*/
 /*else if (player.velocityY !== 0 ){
  player.velocityY = player.velocityY + 0.8
 } else (player.velocityY = 0)
}
*/

 



  
  camera.position.x = exp.x;
  text("P", 150,400, 20)
creatingObstacles();

  drawSprites();
}

function bounceTower()
{
    if(keyIsDown(32) ){
        player.velocityX=5;
        player.velocityY=-5;
    
    }
      else{
        player.velocityY= player.velocityY+0.8;
    }
}




/*
*/ 






/*function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.velocityY = -2
   // player.velocityY = pl
  }
  else(player.velocityY = player.velocityY + 0.8)
  }*/
  

/*
preload - 53;

// setup - 63;

//creation of jbodies start at 74 and end at 257;

//player - 262;

//exp = 266

//hit - 284

calling bounceTower - 286;

conditions incase hit is true starts at - 287 and ends at 302;

display of j bodies starts at 303 and ends at 483;

camera - 485;

console- y - 486

calling creatingObstacles - 489

drawSprites - 491;

defining BounceTower - 504;

*/
