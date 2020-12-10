var helicopterIMG, helicopterSprite, packageSprite,packageIMG,blocks1,blocks2,blocks3;
var block1,block2,block3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	blocks1=createSprite(400,650,200,20);
	blocks1.shapeColor=color('red');
	
	blocks2=createSprite(500,610,20,100);
	blocks2.shapeColor=color('red');

	blocks3=createSprite(300,610,20,100);
	blocks3.shapeColor=color('red');



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	block1=Bodies.rectangle(400,650,200,20, {isStatic:true} );
	World.add(world, block1);
	block2=Bodies.rectangle(500,610,20,100, {isStatic:true} );
	World.add(world, block2);
	block3=Bodies.rectangle(500,610,20,100, {isStatic:true} );
	World.add(world, block3);

	

	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed() 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false)
    
  }
}



