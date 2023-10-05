export class CameraHandler{
    constructor(game){
        this.game = game
        this.x = 0
        this.y = 0
        this.width = game.width
        this.height = game.height
    }
    leftEdge()  {return this.x + (this.width)}
    rightEdge() {return this.x + (this.width)}
    topEdge()   {return this.x + (this.height)}
    bottomEdge(){return this.x + (this.height)}

    

}