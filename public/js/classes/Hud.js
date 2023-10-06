export class Hud{
    constructor(game){
        this.game = game
        this.lastPos = {x:0,y:0}
    }
    init(c){
        
        c.font = "30px Arial";
        c.fillStyle = "white"
        c.fillText("X: " + Math.floor(this.game.player.x),10,50);
        c.fillText("Y: " + Math.floor(this.game.player.y),10,80);
        c.fillText("A: " + Math.floor(this.game.player.angle),10,110);
        c.fillText("Cam X: " + Math.floor(this.game.camera.x),10,140);
        c.fillText("Cam Y: " + Math.floor(this.game.camera.y),10,170);
        c.fillText("Cam Y: " + Math.floor(this.game.camera.y),10,170);

        var speed = Math.sqrt((this.lastPos.x - this.game.player.x) * (this.lastPos.x - this.game.player.x)) + ((this.lastPos.y - this.game.player.y) * (this.lastPos.y - this.game.player.y))
        c.fillText("Speed: " + speed,10,200);

        this.lastPos.x = this.game.player.x
        this.lastPos.y = this.game.player.y

        
        

    } 
}