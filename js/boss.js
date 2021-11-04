class Boss {
constructor(){
        this.width = 90;
        this.height = 180;
        this.x = 800;
        this.y = 200;
            
}

draw(){
    this.x ++
    image(game.bossImage, this.x, this.y, this.width, this.height)
 }
}