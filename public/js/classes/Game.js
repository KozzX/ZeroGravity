import { Player } from './Player.js'
import { InputHandler } from './Input.js'
import { CameraHandler } from './Camera.js'
import { Star } from './Star.js'
import { Hud } from './Hud.js'
import { Utils} from './utils.js'

export class Game {
    constructor(width, height){
        this.width = width
        this.height = height
        this.camera = new CameraHandler(this)
        this.player = new Player(this)
        this.input = new InputHandler()
        this.stars = []
        for(var i = 0; i < 10000; i++){
            this.stars.push(new Star(Math.random() * 20000, Math.random() * 10000,1,"white", 0))
        }
        this.stars.push(new Star(10000-(this.width/2), 10000-(this.height/2),20,"red", 0))
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