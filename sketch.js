const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var left;
var right;
var ball;

function preload()
{
	
}

function setup() {
createCanvas(1000, 800);
engine = Engine.create();
world = engine.world;

ground = new Ground(500,700,1000,20);
right = new Ground(900,550,20,300);
left = new Ground(750,600,20,200);

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:1,
	density:1.2
}

//Create the Bodies Here.
ball = Bodies.circle(200, 200, 15, ball_options);
World.add(world, ball);

Engine.run(engine);
}


function draw() 
{
  rectMode(CENTER);
  background(100,149,237);
  
drawSprites();  
ground.display();
right.display();
left.display(); 
Engine.update(engine);

ellipse(ball.position.x, ball.position.y, 40);
}

function keyPressed ()
{
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce (ball,{x:0, y:0}, {x:40, y:-40});
  }
}
