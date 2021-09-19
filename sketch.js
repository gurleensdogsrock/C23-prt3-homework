const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var playerArcher;
var arrow;



function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

  PlayerArcher=new PlayerArcher(playerBase.position.x+125,playerBase.position.y-100,100,100);

  arrow=new PlayerArrow(playerBase.position.x+150,playerBase.positiony-100,50,50);
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)
PlayerArcher.display();
arrow.display();
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}

function keyReleased(){
  if (keyCode===DOWN_ARROW){
  arrow.shoot();
  }
}


