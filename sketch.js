
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin1,dustbin2,dustbin3,paper,ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin1 = new Dustbin(550,620,20,100);
	dustbin2 = new Dustbin(610,660,100,20);
	dustbin3= new Dustbin(670,620,20,100);

	paper = new Paper(180,600,10);
	ground= new Ground(400,680,800,20)

  
}


function draw() {
	background("black");
  rectMode(CENTER);
  background(0);


  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 ground.display();
  
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{
 x: 12,
 y: -13

});

}

}



