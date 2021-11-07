canvas = document.getElementById('myCanvas')
ctx. canvas.getContext("2d")

greencarWidth = 75;
greencarHeight = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


carX=5
carY=225

function add() {
	backgroundTag = new Image();
	backgroundTag.onload = uploadBackground;
	backgroundTag.src = background_image;

	carTag = new Image();
	carTag.onload = uploadgreencar;
	carTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(backgroundTag, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(carTag, carX, carY, greencarWidth, greencarHeight)
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
	if(carY >= 0)
	{
		carY = carY - 10;
		console.log("When up arrow is pressed, x =" + carX + " | y = " + carY)
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(carY <= 300)
	{
		carY = carY + 10;
		console.log("When up arrow is pressed, x =" + carX + " | y = " + carY)
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(carX >= 0)
	{
		carX = carX - 10;
		console.log("When up arrow is pressed, x =" + carX + " | y = " + carY)
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(carX <= 700)
	{
		carX = carX + 10;
		console.log("When up arrow is pressed, x =" + carX + " | y = " + carY)
		uploadBackground();
		uploadgreencar();
	}
}
