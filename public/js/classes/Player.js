export class Player {
    constructor(game){
        this.image = ship
        this.width = 128
        this.height = 128
        this.x = game.width / 2 - this.width / 2
        this.y = game.height / 2 - this.height / 2
        this.angle = 90
        this.angleSpeed = 0
        this.forces = []
    }
    update(){
        this.x++;
        
    }

    draw(c){
        c.save()
        c.beginPath()
        c.translate(this.x + this.width / 2, this.y + this.height / 2)
        c.rotate(this.angle * Math.PI / 180)
        c.drawImage(this.image, -this.width / 2, -this.height / 2)
        c.restore()

    }
}