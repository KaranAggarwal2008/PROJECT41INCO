const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var tANIMATION;
var boy;
var thunder;
var boyAni1;
var maxDrops =100;
var drops = [];
function preload(){
    boyAni1 = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    tANIMATION = loadAnimation("1.png","2.png","3.png","4.png");
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var boyOptions={
        isStatic:true,
        restitution:0.1
    }
    boy = Bodies.rectangle(200,380,30,60,boyOptions);
    thunder = Bodies.rectangle(random(0,400),random(0,180),30,40);
    World.add(world,boy);
}

function draw(){
    for(var i=0; i<=maxDrops;i++){
       drops.push(new createDrop(random(0,400),random(0,400)));
    }
    imageMode(CENTER);
    image(boyAni1,boy.position.x,boy.position.y,30,60);
    if(drops[i].position.y>400){
      Matter.Body.setPosition(drops[i],{x:random(0,400),y:random(0,400)})
    }
}   

