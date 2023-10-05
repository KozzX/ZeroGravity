import { Player } from './classes/Player.js'
import { InputHandler } from './classes/Input.js'
import { CameraHandler } from './classes/Camera.js'

window.addEventListener("load", function(){
    const canvas = document.querySelector("canvas")
    const width = canvas.width = this.innerWidth
    const height = canvas.height = this.innerHeight
    const c = canvas.getContext("2d")

    class Game {
        constructor(width, height){
            this.width = width
            this.height = height
            this.camera = new CameraHandler(this)
            this.player = new Player(this)
            this.input = new InputHandler()

        }
        update(){
            this.player.update(this.input.keys)
        }
        draw(c){
            c.fillStyle = "rgba(0, 0, 0, 1)";
    	    c.fillRect(0, 0, this.camera.width, this.camera.height)

            //movimento nave
            c.save()
            c.beginPath()
            c.translate(-this.camera.x, -this.camera.y)
            for( var i = 0; i < 90; i++){
                c.rect(Math.random() * 200 + (100),Math.random() * 200 + (-200),20,20)
            }
            c.rect(-314,-314,20,20)
		    c.fillStyle = 'yellow';
		    c.fill();
            c.restore()

            c.save()
            c.beginPath()
            c.translate(-this.camera.x, -this.camera.y)
            for( var i = 0; i < 90; i++){
                c.rect(Math.random() * -200 + (-100),Math.random() * 200 + (-200),20,20)
            }
            c.rect(314,-314,20,20)
		    c.fillStyle = 'yellow';
		    c.fill();
            c.restore()

            this.player.draw(c)

        }
    }

    const game = new Game(width, height)
    console.log(game)

    function animate(){
        game.update()
        game.draw(c)
        requestAnimationFrame(animate)
    }
    animate()
    

})




