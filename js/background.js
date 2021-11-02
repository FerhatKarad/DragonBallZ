class Background {
	draw() {
		
		game.backgroundImages.forEach(function (img) {
			img.x -= img.speed
			image(img.src, img.x, 0, width, height)
			 
			image(img.src, img.x + width, 0, width, height)
			
			if (img.x <= - width) {
				img.x = 0
			}
		})
	}
}