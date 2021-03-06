const game = new Game();

function preload() {
	game.preload()
}

function setup() {
	createCanvas(1000, 600)
	game.setup()	
}

function draw() {
	    clear()
	    game.draw()	 
	  text('DragonBalls', 50, 50);
      textFont("Roboto Mono");
      textSize(25);
      text(game.score, 200, 50);
      text('Kills', 50, 100);
      text(game.kills, 200, 100)
}        


function keyPressed() {
	if (keyCode === 37) {
		game.player.moveLeft()
	}
	if (keyCode === 39) {
		game.player.moveRight()
	}
	if (keyCode === 38) {
		game.player.moveUp()
	}

	if (keyCode === 40) {
		game.player.moveDown()
	}

	if (keyCode === 32) {
		game.shoot();
		
	}

	if (keyCode === ENTER){
		game.gameStart = true ;
	}
}