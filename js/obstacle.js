class Obstacle {
	constructor(image) {
		this.image = image
		this.x = width
		this.y = (Math.random() * height) / 1.5
		this.width = 50
		this.height = 50
	}
    collision(playerInfo) {
		
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2
		
		const obstacleX = this.x + this.width / 2
		const obstacleY = this.y + this.height / 2
		if (dist(obstacleX, obstacleY, playerX, playerY) > 50) {
			
			return false
		} else {
			
			return true
		}


    }

 draw () {
    
		this.x--
		image(this.image, this.x, this.y, this.width, this.height)

        
	}
 
}