class Game {
   constructor() {

      this.backgroundImages
      this.playerImage
      this.coinImage
      this.shotImage

   }

   setup() {
      this.background = new Background()
      this.player = new Player()
      this.obstacles = []
     // this.shots = []

   }

   preload() {

      this.backgroundImages = [
         { src: loadImage('/js/Background/background0.png'), x: 0, speed: 0 },
         { src: loadImage('/js/Background/background1.png'), x: 0, speed: 1 },
         { src: loadImage('/js/Background/background2.png'), x: 0, speed: 2 },
         { src: loadImage('/js/Background/background3.png'), x: 0, speed: 3 },
         { src: loadImage('/js/Background/background4.png'), x: 0, speed: 4 },
         { src: loadImage('/js/Background/background5.png'), x: 0, speed: 0.5 },
      ]
      this.playerImage = loadImage('/js/player/Goku.gif')
      this.coinImage = loadImage('/js/Asteroids/Dragonball.gif')
      this.shotImage = loadImage('js/shoot/shoot1.png')


   }


   draw() {

      clear()
      this.background.draw()
      this.player.draw()

      


      if (frameCount % 1300 === 0) {
         this.obstacles.push(new Obstacle(this.coinImage))
      }
      this.obstacles.forEach(function (obstacle) {
         obstacle.draw()
      })
      this.obstacles = this.obstacles.filter(obstacle => {
         if (obstacle.collision(this.player) || obstacle.x < 0 - obstacle.width) {
            return false
         } else {
            return true
         }
      })

   }



}








