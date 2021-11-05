class Player {
    constructor() {
        this.width = 90;
        this.height = 130;
        this.x = 0;
        this.y = height - this.height;
        this.shot
    }
    
    moveUp() {

        if (this.y >= 0) {
            this.y -= 5;
        }

    }
    moveDown() {
        if (this.y <= 600 - this.height) {
            this.y += 5;
        }
    }

    moveRight() {
        if (this.x <= 1000 - this.width) {
            this.x += 5;
        }
    }

    moveLeft() {
        if (this.x >= 0) {
            this.x -= 5;
        }
    }


    draw() {
        if (game.score >= 4){
            game.kaiokenSound.play()
            
            image(game.newPlayerImage,this.x,this.y,this.width,this.height)
          //  game.kaiokenSound.pause()
        }
        image(game.playerImage, this.x, this.y, this.width, this.height)

        if (keyIsDown(37)) {
            this.moveLeft()
        }


        if (keyIsDown(38)) {
            this.moveUp()
        }


        if (keyIsDown(39)) {
            this.moveRight()
        }


        if (keyIsDown(40)) {
            this.moveDown()
        }

        if (keyIsDown(32)) {
        }
    }
}
