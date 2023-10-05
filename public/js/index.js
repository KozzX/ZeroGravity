import { Player } from './classes/Player.js'

window.addEventListener("load", function(){
    const canvas = document.querySelector("canvas")
    const width = canvas.width = 500
    const height = canvas.height = 500
    const c = canvas.getContext("2d")

    class Game {
        constructor(width, height){
            this.width = width
            this.height = height
            this.player = new Player(this)
        }
        update(){
            this.player.update()
        }
        draw(context){
            this.player.draw(context)

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




