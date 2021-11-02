class Player {

    constructor() {
        this.width = 40;
        this.height = 40;
        this.x = 0;
        this.y = height - this.height;

    }

    moveUp() {

        if (this.y >= 0) {
            this.y -= 10;
        }

    }
    moveDown() {
        if (this.y <= 600 - this.height) {
            this.y += 10;
        }
    }

    moveRight() {
        if (this.x <= 1000 - this.width) {
            this.x += 10;
        }
    }

    moveLeft() {
        if (this.x >= 0) {
            this.x -= 10;
        }
    }


    draw() {


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

    }
}
