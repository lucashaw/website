//font
let EDITORIAL
var scrollerluca = 150
var scrollerluca2 = 40
var scrollerhand = 140
var scrollerhand2 = 15
var speed = 1 
let INSTA
let ULITA
let ANIM
var SHOP
let INFO
let CANVAS
let FIRE
let PAINTicon
let CLOSEPAINT
let REPEAT1
let RED
let SKETCH
let PROG
let FEEL
let WHTA1
let WHTA2
let WHTA3
let WHTA4
let WHTAP
let COCOHAND
let BROWN
let REDSUN
let PROG2
let POETRY
let HANDUNDER
let RED2
let COCO2
let AGNESFULL1
let AGNESFULL2
let REDSUN2
let FAIRY 
let HANDFAIRY 
let HANDCURSOR
let MEDIEVAL
let ARC
let SQUIG
let FIREWORK
let IRON
let HALFSUN
let FLOWER
let BIOPIC





function preload () {

  EDITORIAL=loadFont('EditorialNew-Light.otf');
  FIRE=loadImage('fireneck.png');
  RED=loadImage('inred.png');
  REPEAT1=loadImage('repeat.png');
  PAINTicon=loadImage('painting.png');
  SKETCH=loadImage('sketchbook.png');
  PROG=loadImage('lyricprogramme.png');
  FEEL=loadImage('FeelofMeMore.png');
  WHTA1=loadImage('whtacrop2.jpg');
  WHTA2=loadImage('whtacrop3.jpg');
  WHTA3=loadImage('whtacrop.jpg');
  WHTA4=loadImage('whtacrop6.jpg');
  BROWN=loadImage('brown.png');
  REDSUN=loadImage('redsun.png');
  PROG2=loadImage('lyricprog.png');
  POETRY=loadImage('poetry.png');
  HANDUNDER=loadImage('handunder.png');
  RED2=loadImage('red2.png');
  AGNESFULL1=loadImage('AGNESFULL1.jpg');
  AGNESFULL2=loadImage('AGNESFULL2.jpg');
  REDSUN2=loadImage('redsun2.png');
  FAIRY=loadImage('fairytales.jpg');
  HANDFAIRY=loadImage('handfairy.png');
  MEDIEVAL=loadImage("medieval1.png");
  ARC=loadImage('arc.png');
  SQUIG=loadImage('squigglearc.png');
  FIREWORK=loadImage('firework.png');
  IRON=loadImage('ironline.png');
  HALFSUN=loadImage('halfsun.png');
  FLOWER=loadImage('flower.png');
  CLOSEPAINT=loadImage('closeup.jpg');
  BIOPIC=loadImage('biopic6.jpg');

}

function windowResized() {
  resizeCanvas (1700,1250);
}


function setup() {
  // canvas
  CANVAS = createCanvas(1700,1250);
  CANVAS.position(0,0);
  CANVAS.style('display','grid');
  //buttons
  ANIM=createA('https://vimeo.com/user112067226','animation');
  INSTA=createA('https://www.instagram.com/luca.visual/','insta');
  ULITA=createA('http://ulita.uk/','ulita');
  SHOP=createA('https://www.etsy.com/shop/lucashaw','shop');
  
  ULITA.position(30,100);
  ULITA.style("font-size","20px");
  ULITA.style("color","red");
  ULITA.style("border-left","3px dotted red");
  ULITA.style("text-decoration","none");
  ULITA.style("writing-mode","vertical-lr");
  ULITA.style("transform","rotate(180deg)");
  SHOP.position(30,170);
  SHOP.style("font-size","20px");
  SHOP.style("color","red");
  SHOP.style("border-left","3px dotted red");
  SHOP.style("text-decoration","none");
  SHOP.style("writing-mode","vertical-lr");
  SHOP.style("transform","rotate(180deg)");
  INSTA.position(30,240);
  INSTA.style("font-size","20px");
  INSTA.style("color","red");
  INSTA.style("border-left","3px dotted red");
  INSTA.style("text-decoration","none");
  INSTA.style("writing-mode","vertical-lr");
  INSTA.style("transform","rotate(180deg)");
  ANIM.position(30,300);
  ANIM.style("font-size","20px");
  ANIM.style("color","red");
  ANIM.style("border-left","3px dotted red");
  ANIM.style("text-decoration","none");
  ANIM.style("writing-mode","vertical-lr");
  ANIM.style("transform","rotate(180deg)");
  value = (40+1);
}
  
    
function draw() {
  background(300,250,200);
  cursor('handcursorcopy.png');
  
  textFont('EDITORIAL');
  fill(500,0,0);
  textSize(20);
  noStroke();
  textStyle(NORMAL);
  text('luca shaw',scrollerluca,scrollerluca2);
  image(HANDUNDER,scrollerhand,scrollerhand2,130,80);
  text('info',700,40);
 
  
  scrollerluca = scrollerluca + speed
  scrollerhand = scrollerhand + speed
  
  if (scrollerluca > 200) {
  speed = -1
  }
  
  if (scrollerluca < 150) {
  speed = 1
  } 
  
  if (scrollerhand >200) {
  speed = -1
  }
  
  if (scrollerhand < 140) {
  speed = 1 
  }

 
  image(FIRE,560,130,350,470);
  image(PAINTicon,930,450,190,270);
  image(SKETCH,260,210,180,130);
  image(RED,80,380,280,370);
  image(REPEAT1,1280,180,190,260);
  image(FEEL,360,530,240,320);
  image(WHTA3,1140,770,100,210);
  image(WHTA1,1250,670,100,210);
  image(PROG,1110,600,250,170);
  image(REDSUN,1500,450,200,275);
  image(BROWN,700,800,240,330);
  image(HANDFAIRY,970,80,190,250);
  image(PROG2,1300,1000,250,170);
  image(POETRY,220,990,240,190);
  image(FIREWORK,10,30,70,70);
  image(FIREWORK,10,380,70,70);
  image(HALFSUN,1250,-5,100,100);
  image(FLOWER,600,10,60,60);
  image(SQUIG,680,20,80,80);
 
  
  
  textSize(15);
  textStyle(BOLD);
  text('contact:',1050,40);
  textStyle(NORMAL);
  text('lucamshaw@gmail.com',1110,40);
  
  if (mouseX>560 && mouseX<910 && mouseY>130 && mouseY<600){
    background(300,250,200);
    image(FIRE,650,60,450,610);
    image(FIREWORK,10,30,70,70);
    image(FIREWORK,10,380,70,70);
    textFont('EDITORIAL');
    textStyle(NORMAL);
    textSize(15);
    text("'fire'",400,600);
    text('screenprint',400,620);
    text('2020',400,660);
    image(IRON,330,580,80,80);
  }
  if (mouseX>700 && mouseX<940 && mouseY>800 && mouseY<1130){
    background(300,250,200);
    image(BROWN,430,460,450,610);
     image(FIREWORK,10,30,70,70);
  image(FIREWORK,10,380,70,70);
    textFont('EDITORIAL');
    textStyle(NORMAL);
    textSize(15);
    text("'housed'",200,1000);
    text('screenprint',200,1020);
    text('2020',200,1060);
    image(IRON,130,980,80,80);
 
  }
  if (mouseX>80 && mouseX<360 && mouseY>380 && mouseY<740){
    background(300,250,200);
    image(RED2,330,90,450,610);
     image(FIREWORK,10,30,70,70);
  image(FIREWORK,10,380,70,70);
      textFont('EDITORIAL');
    textStyle(NORMAL);
    textSize(15);
    text("'in red'",1000,600);
    text('risograph print',1000,620);
    text('2019',1000,660);
    image(IRON,930,580,80,80);
  
  }
  
  if (mouseX>260 && mouseX<440 && mouseY>210 && mouseY<340){
    background(300,250,200);
    image(SKETCH,480,70,610,450);
     image(FIREWORK,10,30,70,70);
  image(FIREWORK,10,380,70,70);
      textFont('EDITORIAL');
    textStyle(NORMAL);
    textSize(15);
    text("'sketchbook'",200,500);
    //text('screenprint',400,620);
    text('2020',200,540);
    image(IRON,130,480,80,80);

  }
  
  if (mouseX>360 && mouseX<600 && mouseY>530 && mouseY<850){
    background(300,250,200);
    image(FEEL,530,150,450,610);
     image(FIREWORK,10,30,70,70);
  image(FIREWORK,10,380,70,70);
      textFont('EDITORIAL');
    textStyle(NORMAL);
    textSize(15);
    text("'ancestral'",300,700);
    text('monoprint',300,720);
    text('2019',300,760);
    image(IRON,230,680,80,80);
    
  
  }
   
  if (mouseX>1280 && mouseX<1470 && mouseY>180 && mouseY<440){
    background(300,250,200);
    image(REPEAT1,630,50,450,610);
     image(FIREWORK,10,30,70,70);
  image(FIREWORK,10,380,70,70);
       textFont('EDITORIAL');
    textStyle(NORMAL);
    textSize(15);
    text("'repeat'",400,500);
    text('digital collage',400,520);
    text('2019',400,560);
    image(IRON,330,480,80,80);

  }
  
  if (mouseX>970 && mouseX<1160 && mouseY>80 && mouseY<330){
    background(300,250,200);
    image(FAIRY,330,80,520,520);
     image(FIREWORK,10,30,70,70);
  image(FIREWORK,10,380,70,70);
    textFont('EDITORIAL');
    textStyle(NORMAL);
    textSize(15);
    text("'femme fairytale'",1000,500);
    text('risograph print',1000,520);
    text('2020',1000,560);
    image(IRON,930,480,80,80);
  
  }
  
  if (mouseX>1300 && mouseX<1550 && mouseY>1050 && mouseY<1220){
    background(300,250,200);
    image(PROG2, 500,700,660,470);
     image(FIREWORK,10,30,70,70);
  image(FIREWORK,10,380,70,70);
    textFont('EDITORIAL');
    textStyle(NORMAL);
    textSize(15);
    text('lyrics programme ',1200,700);
    text("'What Happened to Agnes' 2020 tour",1200,720);
    text('2020',1200,760);
    image(IRON,1130,680,80,80);

  }
  
  if (mouseX>1140 && mouseX<1240 && mouseY>770 && mouseY<980){
    background(300,250,200);
    image(AGNESFULL1,330,500,430,610);
     image(FIREWORK,10,30,70,70);
  image(FIREWORK,10,380,70,70);
      textFont('EDITORIAL');
    textStyle(NORMAL);
    textSize(15);
    text('animated projection mapping ',1000,700);
    text("'What Happened to Agnes' 2020 tour",1000,720);
    text('2020',1000,760);
    image(IRON,930,680,80,80);
 
  }
  
  if (mouseX>1250 && mouseX<1350 && mouseY>670 && mouseY<880){
    background(300,250,200);
    image(AGNESFULL2,400,500,610,460);
     image(FIREWORK,10,30,70,70);
  image(FIREWORK,10,380,70,70);
        textFont('EDITORIAL');
    textStyle(NORMAL);
    textSize(15);
    text('animated projection mapping ',1300,800);
    text("'What Happened to Agnes' 2020 tour",1300,820);
    text('2020',1300,860);
    image(IRON,1230,780,80,80);
 
  }
  
  if (mouseX>1500 && mouseX<1700 && mouseY>450 && mouseY<725){
    background(300,250,200);
    image(REDSUN2,800,200,500,500); 
     image(FIREWORK,10,30,70,70);
  image(FIREWORK,10,380,70,70);
    textFont('EDITORIAL');
    textStyle(NORMAL);
    textSize(15);
    text("'red sun'",500,600);
    text("for Anna Mcluckie - single release",500,620);
    text('risograph print',500,660);
    text('2019',500,680)
    image(IRON,420,580,80,80);
    
 
  }
  
  if (mouseX>930 && mouseX<1120 && mouseY>450 && mouseY<720){
    background(300,250,200);
    image(CLOSEPAINT,600,200,500,500);
     image(FIREWORK,10,30,70,70);
  image(FIREWORK,10,380,70,70);
    textFont('EDITORIAL');
    textStyle(NORMAL);
    textSize(15);
    text("'together'",300,600);
    text("monoprint and watercolour pencil",300,620);
    text('2019',300,640)
    image(IRON,220,580,80,80);
  }
  
  if (mouseX>700 && mouseX<750 && mouseY>20 && mouseY<40){
    background(300,250,200);
     image(FIREWORK,10,30,70,70);
  image(FIREWORK,10,380,70,70);
  image(HALFSUN,1250,-5,100,100);
  image(FLOWER,600,10,60,60);
  image(SQUIG,680,20,80,80);
    image(IRON,100,100,80,80);
    image(IRON,100,200,80,80);
    image(IRON,100,300,80,80);
    image(IRON,100,400,80,80);
    image(IRON,100,500,80,80);
    image(BIOPIC,900,400,400,400);
    textFont('EDITORIAL');
    textSize(20);
     text('info',700,40);
    textSize(15);
    textStyle(BOLD);
  text('contact:',1050,40);
  textStyle(NORMAL);
  text('lucamshaw@gmail.com',1110,40);
   textSize(18);
    textStyle(NORMAL);
   text('I am an artist and illustrator based in Stockport, UK. My work extends across drawing, printmaking, illustration, animation and theatre production. I’m interested in how my work can thread through these various disciplines whilst still retaining a clear visual language.',200,100,600,800);
    text('My project interests lie in the domestic, familiar, habitual and historic. I investigate the themes that permeate my own existence such as gender; the body; physical spaces and historical and familial totems. Intimate and personal storytelling compound these thematic interests.',200,210,600,800);
    textStyle(BOLD);
    text('Clients include:',200,330,600,800);
    textStyle(NORMAL);
    text('The Marian Consort, Opera North, Anna McLuckie, Confingo Publishing, Tide Press, Trafford Council, Creative Industries Trafford',200,360,600,800);
    textStyle(BOLD);
    text('Exhibitions/shows:',200,430,600,800);
    textStyle(NORMAL);
    text('*POSTPONED* ROOM//INNATE, A drawing and print series, Rare Mags, Stockport',200,460,600,800);
    text('2020 UK TOUR What Happened to Agnes, Ulita. Set design and series of projection mapped animations.',200,510,600,800);
    textStyle(BOLD);
    text('Online',200,580,600,800);
    textStyle(NORMAL);
    text("It's Nice That, 2020",200,610,600,800);
    textStyle(BOLD);
    text('Contact:',200,660,600,800);
    textStyle(NORMAL);
    text('lucamshaw@gmail.com',200,690,600,800);
    
    
    
    
 
    
    
   
    
  


  }
  
  
}