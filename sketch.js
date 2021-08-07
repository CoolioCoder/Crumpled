
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(200,500,10,ball_options);
	World.add(world,ball);
	Engine.run(engine);
	groundObj =new Ground(width/2,670,width,20);
	leftSide =new Ground(1100,600,20,120);
	rightSide =new Ground(1200,600,20,120);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  groundObj.display();
  leftSide.display();
  rightSide.display();
}



