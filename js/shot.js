class Shot {
    constructor(image, x, y) {
        this.image = image
        this.x = x
        this.y = y
        this.width = 30
        this.height = 30
    }

    draw() {

        this.x += 10
        image(game.shotImage, this.x, this.y, this.width, this.height)
        }
    }



