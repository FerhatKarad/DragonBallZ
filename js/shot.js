class Shot {
    constructor(image) {
        this.image = image
        this.x = game.player.x
        this.y = game.player.y
        this.width = 20
        this.height = 20
    }

    draw() {

       // this.x += 5
        image(game.shotImage, 100,100,100,100)


        }
    }

