
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball = []
var bar = []
var divisions= []

var divHeight=300











function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

d1=new Division(0,650,10,300)
d2=new Division(80,650,10,300)
d3=new Division(160,650,10,300)
d4=new Division(240,650,10,300)
d5=new Division(320,650,10,300)
d6=new Division(400,650,10,300)
d7=new Division(480,650,10,300)

g=new Ground(240,800,500,10)

for(var j = 40; j<=480; j=j+50){
  bar.push(new Bar(j,75))
}

for(var j = 15; j<=480; j=j+50){
  bar.push(new Bar(j,145))
}
for(var j = 40; j<=480; j=j+50){
  bar.push(new Bar(j,215))
}
for(var j = 15; j<=480; j=j+50){
  bar.push(new Bar(j,285))
}




  
}

function draw() {
  background("black");  
  Engine.update(engine);
  g.display();
  d1.display();
  d2.display()
  d3.display()
  d4.display()
  d5.display()
  d6.display()
  
  for(var j = 0; j<bar.length; j++){
   bar[j].display()
  }

  if (frameCount%60===0){
    ball.push(new Ball(random(width/2-10,width/2+10),10,7))
  }
  for(var a= 0;a<ball.length;a++){
    ball[a].display();
  }
  
 
  drawSprites();
}