
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box1=new Dustbin(500,650)
paper1=new Paper(200,300,30)
ground=new Ground(400,680,1000,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 box1.display()
 paper1.display()
 ground.display()

}
function keyPressed(){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:25,y:-27})
}


