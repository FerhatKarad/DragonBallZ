class Attacks {
    constructor(image){
        this.image = image
        this.x = width
        this.y = (Math.random() * height) 
        this.width = 60
        this.height = 100
    }


    shotCollision(playerInfo) {
		
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2
		
		const shotX = this.x + this.width / 2
		const shotY = this.y + this.height / 2
		if (dist(shotX, shotY, playerX, playerY) > 50) {
			
			return false
		} else {
			
			return true
		}

    }

draw(){

    this.x -= 9
        image(this.image, this.x, this.y, this.width, this.height)
}
}