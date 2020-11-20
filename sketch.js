
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1, b2, b3;
var paper, ground;
var qwe = 0;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,330,50,50);

	b01 = createSprite(width / 1.2, 350, 200, 20);
	b01.shapeColor = "white";

	b02 = createSprite(890, 310, 20, 100);
	b02.shapeColor = "white";

	b03 = createSprite(1110, 310, 20, 100);
	b03.shapeColor = "white";

	b1 = Bodies.rectangle(width / 1.2, 350, 200, 20, {isStatic:true});
	World.add(world, b1);

	b2 = Bodies.rectangle(890, 310, 20, 100, {isStatic:true});
	World.add(world, b2);

	b3 = Bodies.rectangle(1110, 310, 20, 100, {isStatic:true});
	World.add(world, b3);

	groundSprite = createSprite(width / 2, height-35, width,10);
	groundSprite.shapeColor = "yellow";

	ground = Bodies.rectangle(width / 2, height-35, width, 10, {isStatic:true});
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	
	
	paper.display()

	keyPressed();

	drawSprites();
 
}

function keyPressed(){ 
	if(qwe === 0){
		if(keyCode === UP_ARROW){ 
			Matter.Body.applyForce(paper.body,paper.body.position,{x:150, y:-100}); 
			qwe = 1;
		} 
	}
} 

