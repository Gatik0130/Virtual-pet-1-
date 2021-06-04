//Create variables here



var dog 
var happydog 
var database
var foodS
var foodStock
function preload()
{
  dogImage = loadImage("images/dogImg.png")
  happydogImage= loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(500, 500);
  



  
  dog= createSprite(250,250,20,20);
  dog.addImage(dogImage)
  dog.scale=0.3

  database=firebase.database()

  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)

  dog.display();

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogImage);
  }
  
 
  //add styles here
  textSize(20)
  fill("red")
  text ("foodStock",100,100)
  
  stroke(1)

  drawSprites();

}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){
  if(x<=0){
    x=0;
} else {
  x=x-1
}
  database.ref("/").update({
    Food : x
  })
 

}


