var cat,catImage,catSteady,catImage2;
var mouse, mouseImage,mouse2,mouseImage2;
var bg1, bg1Image;


function preload() {
    //load the images here

    mouseImage = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseSteady = loadAnimation("images/mouse2.png");
    mouseImage2 = loadAnimation("images/mouse4.png");

    catImage = loadAnimation("images/cat2.png","images/cat3.png");
    catSteady = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat4.png");

    bg1Image = loadAnimation("images/garden.png");

}

function setup(){
    createCanvas(800,700);
    //create tom and jerry sprites here
      
    //cat   
        cat = createSprite(600,500,20,20);
        cat.scale=0.18;
        cat.addAnimation("catSteady",catSteady);
        cat.addAnimation("catMoving",catImage);
        cat.addAnimation("catStopped",catImage2);
     
    //mouse
        mouse = createSprite(150,500,20,20);
        mouse.scale =0.18;
        mouse.addAnimation("mouseSteady",mouseSteady);
        mouse.addAnimation("mouseTeasing",mouseImage);
        mouse.addAnimation("mouseStopped",mouseImage2);
    
     //animation
       // cat.addAnimation("cat",catImage);
        
    
        bg1 = createSprite(400,350,50,300);
        bg1.addAnimation("image",bg1Image);

}

function draw() {

 // cat.debug =true;
 cat.setCollider("rectangle",100,100,0,0);

 background("black");
//Write condition here to evalute if tom and jerry collide

mouse.depth = bg1.depth;
mouse.depth = mouse.depth+5;

cat.depth = bg1.depth;
cat.depth = cat.depth+1;

keyPressed();

 drawSprites();
}


function keyPressed(){

    if(keyCode === UP_ARROW){
        mouse.changeAnimation("mouseTeasing",mouseImage);
        cat.changeAnimation("catMoving",catImage);
        mouse.frameDelay=25;
    }
    
       if(keyCode===LEFT_ARROW){
       cat.velocityX= -2;
       }
    
       if(cat.isTouching(mouse)){
        mouse.changeAnimation("mouseStopped",mouseImage2);
        cat.changeAnimation("catStopped",catImage2);
     
        cat.velocityX=0;    
        }
    
        


}
