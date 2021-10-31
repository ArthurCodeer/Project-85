canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d");

carHeight = 100;
carWidth = 75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carX = 5;
carY = 225;

function add() {
	backgroundTag = new Image();
	backgroundTag.onload = uploadgreencar;
	backgroundTag.src = greencar_image;

	carTag = new Image();
	carTag.onload = uploadBackgroud;
	carTag.src = background_image;
}

function uploadBackground() {
	ctx.drawImage(backgroundTag, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(carTag, carX, carY, carWidth, carHeight)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(carY >=0)
	{
		carY = carY - 10;
		console.log("when up arrow is pressed,  x = " + carX + " | y + " +carY)
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(carY <=300)
	{
		carY = carY + 10;
		console.log("when down arrow is pressed,  x = " + carX + " | y + " +carY)
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(carX >=0)
	{
		carX = carX - 10;
		console.log("when left arrow is pressed,  x = " + carX + " | y + " +carY)
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(carY <=700)
	{
		carX = carX = 10;
		console.log("when right arrow is pressed,  x = " + carX + " | y + " +carY)
		uploadBackground();
		uploadgreencar();
	}
}
