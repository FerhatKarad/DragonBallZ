class Enemy {
    constructor(image) {
        this.image = image
        this.x = width
        this.y = (Math.random() * height) / 1.5
        this.width = 70
        this.height = 100

    }

    draw() {

        this.x -= 5
        image(this.image, this.x, this.y, this.width, this.height)

    }

}