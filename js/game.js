class Game {
   constructor() {
      this.backgroundImages
      this.playerImage
      this.coinImage
      this.shotImage
      this.enemyImage
      this.audio
   }

   setup() {
      this.background = new Background()
      this.player = new Player()
      this.obstacles = []
      this.shots = []
      this.enemies = []
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
      this.coinImage = loadImage('/js/Dragonball/Dragonball.gif')
      this.shotImage = loadImage('/js/shoot/shoot1.png')
      this.enemyImage = loadImage('/js/shoot/Saibament.png')


      this.audio = new Audio('./js/music/DragonBallSound.mp3');
   }


   draw() {

      if (frameCount === 2) this.audio.play()

      clear()
      this.background.draw()
      this.player.draw()
      this.drawObstacles()
      this.drawShots()
      this.drawEnemies()
      this.hitEnemy()
    //  this.collisionGoku()
   
    this.enemies = this.enemies.filter(enemy => {
      if (enemy.collisionGoku(this.player))  {
         return false
      } else {
         return true
      }
      })
    
}
   drawObstacles() {
      if (frameCount % 1000 === 0) {
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

   drawShots() {

      this.shots.forEach(function (shot) {
         shot.draw()
      })

      this.shots = this.shots.filter(shot => {
         if (shot.x > 1000 + shot.width) {
            return false
         } else {
            return true
         }
      })
   }


   drawEnemies() {
      if (frameCount % 100 === 0) {
         this.enemies.push(new Enemy(this.enemyImage))
      }
      this.enemies.forEach(function (enemy) {
         enemy.draw()
      })


      this.enemies = this.enemies.filter(enemy => {
         if (this.hitEnemy(enemy) || enemy.x < 0 - enemy.width) {
            return false
         } else {
            return true
         }
      })

   }

   hitEnemy(enemy) {

      if (!enemy) return false
      if ((this.shots.length === 0)) return false;


      const enemyX = enemy.x
      const enemyY = enemy.y + 10

      for (let [index, shot] of this.shots.entries()) {
         const shotX = shot.x
         const shotY = shot.y
         if (dist(shotX, shotY, enemyX, enemyY) < 50) {
            this.shots.splice(index, 1)
            return true
         }
      }
      return false
   }





   shoot() {
      this.shots.push(new Shot(this.shotImage, this.player.x + 40, this.player.y + 30))
   }

}

