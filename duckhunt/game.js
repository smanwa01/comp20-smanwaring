// Steven Manwaring
//Comp 20 Lab 5 - Duck Hunt 
//10/7/15

function init(){
	canvas = document.getElementById('game_canvas');
	ctx = canvas.getContext('2d');

	var img = new Image(); 
	img.onload = function() {
		ctx.drawImage(img, 0, 0) 
	}


	img.src = 'duckhunt-background.gif';
}