
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1900, 1000);


	engine = Engine.create();
	world = engine.world;

	boy = new Boy(0,0,200,500)
	tree = new Tree(100,800,800,1000)
	stone = new Stone(140,750,30)

	mango1 = new Mango(1500,160,30)
	mango2 = new Mango(1400,150,30)
	mango3 = new Mango(1350,260,30)
	mango4 = new Mango(1600,200,30)
	mango5 = new Mango(1700,380,30)
	mango6 = new Mango(1600,100,30)
	mango7 = new Mango(1600,300,30)
	mango8 = new Mango(1300,380,30)
	mango9 = new Mango(1450,260,30)
	mango10 = new Mango(1300,500,30)
	mango11 = new Mango(1800,500,30)
	mango12 = new Mango(1450,360,30)
	mango13 = new Mango(1700,280,30)
	mango14 = new Mango(1200,300,30)

	launcher = new Launcher(stone.body,{x:140,y:750})

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);

  background("lightblue");
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  stone.display();
  launcher.display(); 

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
  detectollision(stone,mango13);
  detectollision(stone,mango14);
}

function detectollision(pstone,pmango){
	mangoBodyPosition=pmango.body.position;
	stoneBodyPosition=pmango.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	
	if(distance<=pmango+pstone.r){
		Matter.Body.setStatic(pmango.body,false)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcher.attach(stone.body);
	}
}

