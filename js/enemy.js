class Enemy {
    constructor(image) {
        this.image = image
        this.x = width
        this.y = (Math.random() * height) / 1.5
        this.width = 70
        this.height = 100
        this.kills = 0

    }

    draw() {

        this.x -= 6
        image(this.image, this.x, this.y, this.width, this.height)

    }

    collisionGoku(enemyInfo) {
        const enemyX = enemyInfo.x + enemyInfo.width / 2
        const enemyY = enemyInfo.y + enemyInfo.height / 2

        const playerX = this.x + this.width / 2
        const playerY = this.y + this.height / 2
        if (dist(enemyX, enemyY, playerX, playerY) > 50) {

            return false 
        } else {
            console.log('collisionGoku')
            
            return true
        }
    }

  

}