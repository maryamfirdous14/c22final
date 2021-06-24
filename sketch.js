var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star1,star2,star3,star4;
var  starBody1,starBody2, starBody3, starBody4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 600);
	
	fairy = createSprite(130, 320);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star1 = createSprite(650,30);
	star1.addImage(starImg);
	star1.scale = 0.1;


	myengine = Engine.create();
	myworld = myengine.world;

	starBody1 = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});

	World.add(myworld, starBody1);
	
	Engine.run(myengine);

}


function draw() {
  background(bgImg);

  star1.x= starBody1.position.x 	
  star1.y= starBody1.position.y 

  
   

  if(star1.y > 470 && starBody1.position.y > 470 ){
  	Matter.Body.setStatic(starBody1,true);
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody1,false); 
	}
}
