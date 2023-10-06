import { Player } from './classes/Player.js'
import { InputHandler } from './classes/Input.js'
import { CameraHandler } from './classes/Camera.js'
import { Star } from './classes/Star.js'
import { Hud } from './classes/Hud.js'

window.addEventListener("load", function(){
    const canvas = document.querySelector("canvas")
    const width = canvas.width = innerWidth
    const height = canvas.height = innerHeight
    const c = canvas.getContext("2d")


    class Game {
        constructor(width, height){
            this.width = width
            this.height = height
            this.camera = new CameraHandler(this)
            this.player = new Player(this)
            this.input = new InputHandler()
            this.stars = []
            for(var i = 0; i < 20000; i++){
                this.stars.push(new Star(Math.random() * 20000, Math.random() * 10000,1,"white", 0))
            }
            this.hud = new Hud(this)
        }
        update(){
            this.player.update(this.input.keys)
        }
        draw(c){
            c.fillStyle = "rgba(0, 0, 0, 0.5)";
    	    c.fillRect(0, 0, this.camera.width, this.camera.height)

            c.save()
            c.beginPath()
            c.translate(-this.camera.x, -this.camera.y)
            for( var i = 0; i < this.stars.length; i++){
                this.stars[i].draw(c)
            }            
		    c.fill();
            c.restore()
            this.player.draw(c,this.input.keys)
            this.hud.init(c)

            

            

        }
    }

    const game = new Game(width, height)
    console.log(game)

    function animate(){
        game.update()
        game.draw(c)
        //requestAnimationFrame(animate)
    }
    this.setInterval(animate,15)
    
    

})




