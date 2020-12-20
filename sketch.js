const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var bob1, bob2, bob3, bob4, bob5;

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/2);
	engine = Engine.create();
	world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse:canvasmouse
    } 
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
	//Create the Bodies Here.
	bob1 = new Pendulum(300, 600, "yellow");
	bob2 = new Pendulum(350, 600, "yellow");
	bob3 = new Pendulum(400, 600, "yellow");
	bob4 = new Pendulum(450, 600, "yellow");
	bob5 = new Pendulum(500, 600, "yellow");
	sling1 = new Sling(bob1.body, {x:300, y:50});
	sling2 = new Sling(bob2.body, {x:350, y:50});
	sling3 = new Sling(bob3.body, {x:400, y:50});
	sling4 = new Sling(bob4.body, {x:450, y:50});
	sling5 = new Sling(bob5.body, {x:500, y:50});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
}