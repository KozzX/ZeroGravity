export class Star {
    constructor(x, y, radius, color, speed){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw(c){
        c.beginPath()
        c.fillStyle = this.color
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fill()
        
    }
}