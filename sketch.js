  var peppa,peppaImage,peppa_collidedImage;

  var house,houseImage;

  var platform,platformImage;

  var mouseicon,mouseiconImage;

  var playbutton,playbuttonImage;

  var background2,background2Image;

  var gamelogo,gamelogoImage;

  var name1,name1Image;

  var leftarrow,leftarrowImage;

  var rightarrow,rightarrowImage;

  var homeicon,homeiconImage;

  var about,aboutImage;

  var info,infoImage;

  var shop,shopImage;;

  var boundary1;

   var coins,coinsImage;
  
  var coins2,coins2Image;

  var scene,sceneImage;

  var jump,jumpImage;

  var to,toImage;

















function preload() {

  toImage = loadImage("platform.png");

  jumpImage = loadImage("32.png");

   houseImage = loadImage("peppa house.jpg");

   sceneImage = loadImage("peppa back.png");

   coins2Image = loadImage("654.png");

   coinsImage = loadImage("346 (2).png");

  shopImage = loadImage("png.png");

  infoImage = loadImage("untitled (2).png");

  aboutImage = loadImage("icow.png");

   homeiconImage = loadImage("icn.jpg");

   leftarrowImage = loadImage("left.jpg");

   rightarrowImage = loadImage("right.jpg");

   peppaImage = loadImage("pippa.png");

  platformImage = loadImage("pla.jpg");

  name1Image = loadImage("4.png");

  gamelogoImage = loadImage("2.jpg"); 

  background2Image = loadImage("123.png");

  mouseiconImage = loadImage("download.jpg");

  playbuttonImage = loadImage("hj.jpg")

 
}





function setup () {

  createCanvas(600,400);

  if(keyDown("space")&& peppa.y >= 100) {
   peppa.velocityY = -13;
  }
  
 


  background2 = createSprite(300,200);
  background2.addImage(background2Image);
  background2.scale=0.5;


       gamelogo = createSprite(300,50);
       gamelogo.addImage(gamelogoImage);
       gamelogo.scale=0.2;
    

  playbutton = createSprite(300,350,10,10);
  playbutton.addImage(playbuttonImage);
  playbutton.scale=0.2;

  mouseicon = createSprite(300,200,10,10);
  mouseicon.addImage(mouseiconImage);
  mouseicon.scale=0.3;

  name1 = createSprite(500,380);
  name1.addImage(name1Image);
  name1.scale=0.2;

 
  
  homeicon = createSprite(50,20);
  homeicon.addImage(homeiconImage);
  homeicon.scale=0.1;
   

  about = createSprite(550,20);
  about.addImage(aboutImage);
  about.scale=0.1;


  peppa = createSprite(100,320,40,10);
  peppa.addImage(peppaImage)  
  peppa.scale=0.2;
 
  rightarrow = createSprite(550,350);
  rightarrow.addImage(rightarrowImage);
  rightarrow.scale=0.3;


  leftarrow = createSprite(50,350);
  leftarrow.addImage(leftarrowImage);
  leftarrow.scale=0.3;

  shop = createSprite(550,300);
  shop.addImage(shopImage);
  shop.scale=0.1;

  boundary1 = createSprite(650,200,10,400);


 


  coins = createSprite(200,200);
  coins.addImage(coinsImage);
   coins.scale=0.5;

 
     

  coins2 = createSprite(500,200);
  coins2.addImage(coins2Image);
    coins2.scale=0.5;



    jump = createSprite(50,280);
    jump.addImage(jumpImage);
    jump.scale=0.1;

    to = createSprite(300,350);
    to.addImage(toImage);
  
   rightarrow.visible=false;
   leftarrow.visible=false;
   rightarrow.destroy();
   leftarrow.destroy();
   peppa.destroy();
   coins2.destroy();
   coins.destroy();
   jump.destroy();
  to.destroy();
   to.visible=false;
}

function draw () {
   background(128);

   if(mouseicon.isTouching(jump)&& peppa.y >= 100) {
    peppa.velocityY = -13;
  }

 peppa.velocityY = peppa.velocityY + 0.8
  

 peppa.collide(to);  
 
   mouseicon.x = World.mouseX
   mouseicon.y = World.mouseY


              if (peppa.isTouching(boundary1)) {


               scene = createSprite(300,200);
               scene.addImage(sceneImage);
               scene.scale=0.5;

               peppa = createSprite(100,320,40,10);
               peppa.addImage(peppaImage)  
               peppa.scale=0.2;
               
               
               mouseicon = createSprite(300,200,10,10);
               mouseicon.addImage(mouseiconImage);
               mouseicon.scale=0.3;
                     
               homeicon = createSprite(50,20);
               homeicon.addImage(homeiconImage);
               homeicon.scale=0.1;
                

               to = createSprite(300,400);
               to.addImage(toImage);
               
   rightarrow = createSprite(550,350);
   rightarrow.addImage(rightarrowImage);
   rightarrow.scale=0.3;


   leftarrow = createSprite(50,350);
   leftarrow.addImage(leftarrowImage);
   leftarrow.scale=0.3;

    
   jump = createSprite(50,260);
   jump.addImage(jumpImage);
   jump.scale=0.1;
  
  

      
              }

    if (mouseicon.isTouching(rightarrow)) {  
        peppa.x=peppa.x+5;

    }


       if (mouseicon.isTouching(leftarrow)) {
         peppa.x=peppa.x-5;
       }


         if (mouseicon.isTouching(shop)) {
            coins = createSprite(200,200);
            coins.addImage(coinsImage);
             coins.scale=0.5;

           
               

            coins2 = createSprite(500,200);
            coins2.addImage(coins2Image);
              coins2.scale=0.5;
         }

    if (mouseicon.isTouching(about)) {
       info = createSprite(300,200);
       info.addImage(infoImage);
        info.scale=0.5;


       homeicon = createSprite(50,20);
       homeicon.addImage(homeiconImage);
       homeicon.scale=0.1;
    }





   if (mouseicon.isTouching(homeicon)) {

    rightarrow.destroy();
    leftarrow.destroy();

    background2 = createSprite(300,200);
    background2.addImage(background2Image);
    background2.scale=0.5;
  
    homeicon = createSprite(50,20);
    homeicon.addImage(homeiconImage);
    homeicon.scale=0.1;
     
  
    about = createSprite(550,20);
    about.addImage(aboutImage);
    about.scale=0.1;
  
   
         gamelogo = createSprite(300,50);
         gamelogo.addImage(gamelogoImage);
         gamelogo.scale=0.2;
      
  
    playbutton = createSprite(300,350,10,10);
    playbutton.addImage(playbuttonImage);
    playbutton.scale=0.2;
  
    mouseicon = createSprite(300,200,10,10);
    mouseicon.addImage(mouseiconImage);
    mouseicon.scale=0.3;
  
    name1 = createSprite(500,380);
    name1.addImage(name1Image);
    name1.scale=0.2;
  

    shop = createSprite(550,300);
    shop.addImage(shopImage);
    shop.scale=0.1;
  
   }





  


   if (mouseicon.isTouching(playbutton)) {
   playbutton.destroy();
    about.destroy();
    shop.destroy();
      coins.destroy();
      coins2.destroy();
     
      to.visible=false;
    about.visible=true;
    about.visible=true;

     platform = createSprite(300,200);
     platform.addImage(platformImage);


     to = createSprite(300,400);
     to.addImage(toImage);


 peppa = createSprite(100,320,40,10);
  peppa.addImage(peppaImage)  
  peppa.scale=0.2;


   rightarrow = createSprite(550,350);
    rightarrow.addImage(rightarrowImage);
    rightarrow.scale=0.3;


    leftarrow = createSprite(50,350);
    leftarrow.addImage(leftarrowImage);
    leftarrow.scale=0.3;

     
  jump = createSprite(50,260);
  jump.addImage(jumpImage);
  jump.scale=0.1;

  
  
 

    mouseicon = createSprite(300,200,10,10);
    mouseicon.addImage(mouseiconImage);
    mouseicon.scale=0.3;


  
    homeicon = createSprite(50,20);
  homeicon.addImage(homeiconImage);
  homeicon.scale=0.1;
  
 

 
   

  boundary1 = createSprite(700,200,10,400);
  

   }
 

  
   drawSprites();

}