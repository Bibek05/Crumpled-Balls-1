
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  bin1 = new DustBin(200,200,20,20);
  bin1.display();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bin1 = new DustBin(200,200,20,20);



  bin1.display();
  
  drawSprites();
 
}



