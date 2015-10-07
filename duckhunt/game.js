// Steven Manwaring
//Comp 20 Lab 5 - Duck Hunt 
//10/7/15


function init(){
	canvas = document.getElementById('game_canvas');
	ctx = canvas.getContext('2d');

	//load background
	var background_img = new Image(); 
	background_img.onload = function(){
		ctx.drawImage(background_img, 0, 0); 
	} 
	background_img.src = 'duckhunt-background.gif';
	
	//load first duck
	var duck_1 = new Image();
	duck_1.onload = function(){
		ctx.drawImage(duck_1, 38, 120, 35, 35, 70, 65, 35, 35); 
	}
	duck_1.src = 'duckhunt_various_sheet.png';
	//load second duck
}

