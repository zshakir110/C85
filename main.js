var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

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
	if(keyPressed == '87')
	{
		new_image('https://www.clipartkey.com/mpngs/m/35-356544_iron-man-helmet-png.png'); 
		console.log("f");
	}
	if(keyPressed == '71')
	{
		new_image('https://dynamic.zacdn.com/oAdkAGQ6oBQMPmYBT1ZboEtHwtA=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.ph.zalora.net/p/marvel-9035-4627671-1.jpg'); 
		console.log("b");
	}
	if(keyPressed == '76')
	{
		new_image('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8124f09d-1321-4c57-a01b-325b469bc351/de5nm3a-6a4a8965-ad21-4bee-8b7b-a13a4e998f84.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODEyNGYwOWQtMTMyMS00YzU3LWEwMWItMzI1YjQ2OWJjMzUxXC9kZTVubTNhLTZhNGE4OTY1LWFkMjEtNGJlZS04YjdiLWExM2E0ZTk5OGY4NC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.QzMuEjHSpu0g3FA37I7zzCt2miOnkBgvKMC3xB5qOV0'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		new_image('https://www.clipartmax.com/png/middle/106-1064375_aluminum-frame-construction-cartoon-superhero-arms.png'); 
		console.log("ra");
	}
	if(keyPressed == '82')
	{
		new_image('https://thumbs.dreamstime.com/b/superhero-arm-flexing-14842341.jpg'); 
		console.log("lr");
	}
	if(keyPressed == '89')
	
	}
	
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}