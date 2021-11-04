class Game {
   constructor() {
      this.backgroundImages
      this.playerImage
      this.coinImage
      this.shotImage
      this.enemyImage
      this.explosionImage
      this.gameOverImage
      this.startImage
      this.isGameOver = false;
      this.score = 0;
      this.kills = 0;
      this.gameStart = false;

   }

   setup() {
      this.background = new Background()
      this.player = new Player()
      this.song = new Audio('./js/music/Dbz.mp3')
      this.hitSound = new Audio('./js/music/kill.mp3');
      this.shotSound = new Audio('./js/music/shot1.wav');
      this.collectSound = new Audio('./js/music/collect.mp3');
      this.endSound = new Audio('./js/music/freezer.mp3');
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
      this.gameOverImage = loadImage('/js/shoot/gameover.png')
      this.explosionImage = loadImage('/js/explosion/explosion.gif')
      this.startImage = loadImage(('/js/shoot/startgame1.jpg'))


      //  song = loadSound ('./js/music/DragonBallSound.mp3');
      //  song = loadSound ('./js/music/Ki.mp3')
   }


   draw() {
      
      if (this.gameStart === false) {
         image(this.startImage, 0, 0, 1000, 600)
      } else if (this.gameStart === true) {
         if (!this.isGameOver) {
            this.song.play()
            this.background.draw()
            this.player.draw()
            this.drawObstacles()
            this.drawShots()
            this.drawEnemies()
            this.hitEnemy()
            this.hitGoku()

         } else {
            if (this.isGameOver) {
               this.song.pause()
               this.endSound.play()
               image(this.gameOverImage, 250, 150, 500, 300)
            }

         }
         text('DragonBalls', 50, 50);
         textFont("Roboto Mono");
         textSize(25);
         text(this.score, 200, 50);
         text('Kills', 50, 100);
         text(this.kills, 200, 100);
      }

      // if (!this.isGameOver) {

      //    this.background.draw()
      //    this.player.draw()
      //    this.drawObstacles()
      //    this.drawShots()
      //    this.drawEnemies()
      //    this.hitEnemy()
      //    this.hitGoku()

      // } else {
      //    if (this.isGameOver) {
      //       image(this.gameOverImage, 250, 150, 500, 300)
      //    }

      // }
      // text('DragonBalls', 50, 50);
      // textFont("Roboto Mono");
      // textSize(25);
      // text(this.score, 200, 50);
      // text('Kills', 50, 100);
      // text(this.kills, 200, 100);




   }
   hitGoku() {
      this.enemies = this.enemies.filter(enemy => {
         if (enemy.collisionGoku(this.player)) {
            this.isGameOver = true;
            return false
         } else {
            return true
         }
      })

   }

   drawObstacles() {
      if (frameCount % 1100 === 0) {
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
      const enemyY = enemy.y + 20

      for (let [index, shot] of this.shots.entries()) {
         const shotX = shot.x
         const shotY = shot.y
         if (dist(shotX, shotY, enemyX, enemyY) < 40) {
            image(this.explosionImage, enemy.x, enemy.y, 70, 100)
            this.shots.splice(index, 1)
            this.kills += 1
            this.hitSound.play()
            return true

         }
      }
      return false
   }

   shoot() {
      this.shots.push(new Shot(this.shotImage, this.player.x + 40, this.player.y + 30))
      this.shotSound.play()
   }


}



   // gameReset() {
   //    // resetten wenn neues Spiel angefangen werden soll

   // }




