export class Player {
    constructor(game){
        this.image = ship
        this.width = 128
        this.height = 128
        this.x = game.width / 2 - this.width / 2
        this.y = game.height / 2 - this.height / 2
        this.angle = 0
        this.speed = 0
        this.angleSpeed = 0
        this.forces = []
        for(var i = 0; i < 360; i++){
            this.forces[i] = {a:0,s:0}
        }
        this.camera = game.camera
    }
    update = (input) => {
        if(input.w){
            //this.y = this.y - 5
            this.speed -= 0.001
            this.forces[Math.floor(this.angle)] = {a:Math.floor(this.angle),s:this.speed + this.forces[Math.floor(this.angle)].s}
        
        }
        if(input.s){
            this.speed += 0.001
            this.forces[Math.floor(this.angle)] = {a:Math.floor(this.angle),s:this.speed + this.forces[Math.floor(this.angle)].s}
        }
        if(input.a){this.x = this.x - 5}
        if(input.d){this.x = this.x + 5}

        //this.camera.x = this.x - (this.camera.width)
        //this.camera.y = this.y - (this.camera.height)

        console.log(this.x, this.y,this.camera.x, this.camera.y)

        for(var i = 0; i < this.forces.length; i++){
            this.x = this.x + Math.cos((this.forces[i].a * Math.PI / 180)) * this.forces[i].s
            this.y = this.y + Math.sin((this.forces[i].a * Math.PI / 180)) * this.forces[i].s
        }
    }

    draw(c){
        //this.angle++
        
        //rotação nave
        c.save()
        c.beginPath()
        c.translate(this.camera.width / 2,this.camera.height / 2)
        c.rotate(this.angle * Math.PI / 180)
        c.drawImage(this.image, -this.width / 2, -this.height / 2)
        c.restore()
        
        

        

        



        

    }
}