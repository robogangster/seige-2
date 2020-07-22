const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0;
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

async function r(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson=await response.json()
var hour=responseJson.datetime.slice(11,13)
if(hour>=5 && hour<=16){
    backgroundImg = loadImage("sprites/bg.png");

}else{
    backgroundImg=loadImage("sprites/bg2.jpg")
}
}


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    b1=new Box(430,235,30,40);
b2=new Box(460,335,30,40);
b3=new Box(490,335,30,40);
b4=new Box(520,335,30,40);
b5=new Box(550,335,30,40);
b6=new Box(460,395,30,40);
b7=new Box(520,295,30,40);
b8=new Box(490,255,30,40);

b9=new Box(630,335,30,40);
b10=new Box(660,335,30,40);
b11=new Box(690,335,30,40);
b12=new Box(720,335,30,40);
b13=new Box(750,335,30,40);
b14=new Box(660,295,30,40);
b15=new Box(720,295,30,40);
b16=new Box(690,255,30,40);

   
    bird=new Bird(200,50)
    slingshot = new SlingShot(bird.body,{x:200, y:50});
   

    //log6 = new Log(230,180,80, PI/2);
   
}

function draw(){


    if(backgroundImg)
    background(backgroundImg);
   
    Engine.update(engine);
    //strokeWeight(4);
    text("x:"+mouseX+"y:"+mouseY,mouseX,mouseY);
    text("score :"+score,750,40)
    ground.display();
   b1.display();
   b2.display();
   b3.display();
   b4.display();
   b5.display();
   b6.display();
   b7.display();
   b8.display();
   b9.display();
   b10.display();
   b11.display();
   b12.display();
   b13.display();
   b14.display();
   b15.display();
   b16.display();
    
    bird.display();
   b1.score();
   b2.score();
   b3.score();
   b4.score();
   b5.score();
   b6.score();
   b7.score();
   b8.score();
   b9.score();
   b10.score();
   b11.score();
   b12.score();
   b13.score();
   b14.score();
   b15.score();
   b16.score();
   
    //log6.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}