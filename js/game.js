class Game {
   constructor (){
       
       this.backgroundImages
       this.playerImage
       this.coinImage
       
   }

   setup(){
      this.background = new Background()
      this.player = new Player()
      
   }

   preload (){

    this.backgroundImages = [
        {src: loadImage('/javas/Background/background0.png'),x: 0, speed: 0},
        {src: loadImage('/javas/Background/background1.png'),x: 0, speed: 1},
        {src: loadImage('/javas/Background/background2.png'),x: 0, speed: 2},
        {src: loadImage('/javas/Background/background3.png'),x: 0, speed: 3},
        {src: loadImage('/javas/Background/background4.png'),x: 0, speed: 4},
        {src: loadImage('/javas/Background/background5.png'),x: 0, speed: 1},
      ]
      this.playerImage = loadImage('/javas/player/player1.png')
      this.coinImage = loadImage('/javas/Asteroids/bitcoin.gif')

   
   }


        draw() {
         
         clear()
         this.background.draw()
         this.player.draw()
        
         
      }
   }