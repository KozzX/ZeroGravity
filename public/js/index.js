import { Game } from './classes/Game.js'

window.addEventListener("load", function(){
    const canvas = document.querySelector("canvas")
    const width = canvas.width = innerWidth
    const height = canvas.height = innerHeight
    const c = canvas.getContext("2d")


    const game = new Game(width, height)
    console.log(game)

    function animate(){
        game.update()
        game.draw(c)
        //requestAnimationFrame(animate)
    }
    this.setInterval(animate,15)
});




