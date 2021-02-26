
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowman,girl;



function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  

 snowman=new Snowman(800, 200);
}

function draw() {
  background("white");
  


  snowman.display();

  Engine.update(engine);
    
  drawSprites();
}
