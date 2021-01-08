const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[]; 
var divisionsHeight=300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();   //.world
  world = engine.world;

  border1 = new Ground(width/2,790,width,30);
  border2 = new Ground(width/2,0,width,20);
  border3 = new Ground(0,height/2,20,height);
  border4 = new Ground(480,height/2,20,height); 
  
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divider(k, height-divisionsHeight/2, divisionsHeight));
  } 
  
  for (var p = 90; p <=width-60; p=p+70){
    plinkos.push(new Plinko(p,100,20))
  }
  for (var p = 60; p <=width; p=p+70){
    plinkos.push(new Plinko(p,200,20))
  }
  for (var p = 90; p <=width-60; p=p+70){
    plinkos.push(new Plinko(p,300,20))
  }
  for (var p = 60; p <=width; p=p+70){
    plinkos.push(new Plinko(p,400,20))
  }
}


function draw() {
  background("black"); 

  Engine.update(engine);   

  for (var k = 0; k < divisions.length; k++) { 
    divisions[k].display();
  } 

  for (var p = 0; p < plinkos.length; p++){
    plinkos[p].display();
  }

  if(frameCount%50===0){
    particles.push(new Particle(random(100,700),50,10))
  }
  
  for (var n = 0;n< particles.length;n++){
    particles[n].display()
  }

  border1.display();
  border2.display();
  border3.display(); 
  border4.display();
}

