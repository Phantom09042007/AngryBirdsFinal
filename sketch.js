//arrays

var array1 = [1,2,3,4,5];
console.log(array1[0]);
console.log(array1[3]);

var array2 = ["rudraa",13,true,null]
console.log(array2[1])
console.log(array2[3]);
console.log(array2)

array1.push(6,7,8);
array1.pop();
console.log(array1)

// array in an array

var array3 = [[1,2],[3,4],[5,6],[7,8]];
console.log(array3[0][1]);
console.log(array3[3][0]);
console.log(array3)

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var background_IMG
var slingshot1;
var Score = 0;
function preload(){
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920, 320, 70, 70);
    box3 = new Box(700, 220, 70, 70);
    box4 = new Box(920, 220, 70, 70);
    box5 = new Box(810, 150, 70, 70);
    pig1 = new Pig(810, 300, 50 ,50);
    pig2 = new Pig(810, 200, 50 ,50);
    log1 = new Log(810, 275, 20, 300, PI/2);
    log2 = new Log(810, 175, 20, 300, PI/2);
    log3 = new Log(730, 150, 20, 150, PI/7);
    log4 = new Log(890, 150, 20, 150, PI/-4);
    bird1 = new Bird(220,50,40,40);
    ground = new Ground(600,380,1200,10);
    slingshot1 = new SlingShot(bird1.body,{x:220,y:50});
    ground2 = new Ground(150,300,300,150);


    
}

function draw(){
    if(background_IMG){
        background(background_IMG);

    }else{
        background("white");
    }
    
    fill("red");
    textSize(20);
    strokeWeight(0);
    text("Score = "+Score, 600,100);
    Engine.update(engine);
  //  console.log(box2.body.position.x);
  //  console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig1.Score();
    pig2.display();
    pig2.Score();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
    slingshot1.display();
    ground2.display();


  
    
   
}

function mouseDragged(){
    if (bird1.body.position.x <= 220){
        Matter.Body.setPosition(bird1.body, {x:mouseX, y:mouseY});

    }
    
} 

function mouseReleased(){
    slingshot1.detach();
}

function keyPressed(){
    if (keyCode === 32){
        Matter.Body.setPosition(bird1.body,{x:220, y:50})

        slingshot1.attach(bird1.body);
        bird1.trajectory = []
    }
}

async function getTime(){ 
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var DT = responseJSON.datetime
    console.log(DT);
    var hour = DT.slice(11,13);
    console.log(hour);
    if (hour>=06 && hour<=19){
        background_IMG = loadImage("sprites/bg.png");
    }else{
        background_IMG = loadImage("sprites/bg2.jpg");
    }

    
}