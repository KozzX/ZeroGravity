export class Player {
    constructor(game){
        this.image = {ship:ship,propV:propVertical,propH:propHorizontal}
        this.width = 64
        this.height = 64
        this.x = 1000//game.width / 2 
        this.y = 1000//game.height / 2
        this.angle = 0
        this.speed = 0
        this.angleSpeed = 0
        this.forces = []
        this.frameX = 0
        this.gameFrame = 0
        this.camera = game.camera
        for(var i = 0; i < 360; i++){
            this.forces[i] = {a:i,s:0}
        }
    }
    update = (input) => {
        
        this.angle = this.angle + this.angleSpeed

        if(this.angle >= 360){
            this.angle = 1
        }
        if(this.angle <= 0){
            this.angle = 359
        }
        
        if(input.w){
            this.speed -= 0.02
            this.forces[Math.floor(this.angle)] = {a:Math.floor(this.angle),s:this.speed + this.forces[Math.floor(this.angle)].s}
        }
        if(input.s){
            this.speed += 0.01
            this.forces[Math.floor(this.angle)] = {a:Math.floor(this.angle),s:this.speed + this.forces[Math.floor(this.angle)].s}
        }
        if(input.a){
            this.angleSpeed = this.angleSpeed - 0.05
        }
        if(input.d){
            this.angleSpeed = this.angleSpeed + 0.05
        }

        this.camera.x = this.x - (this.camera.width)
        this.camera.y = this.y - (this.camera.height)
        //this.angle++

        
        if(this.speed > 0){this.speed -= 0.01}
        if(this.speed < 0){this.speed += 0.02}

        console.log(this.x, this.y,this.camera.x, this.camera.y)

        for(var i = 0; i < this.forces.length; i++){
            this.x = this.x + Math.cos((this.forces[i].a * Math.PI / 180)) * this.forces[i].s
            this.y = this.y + Math.sin((this.forces[i].a * Math.PI / 180)) * this.forces[i].s
        }
    }

    draw(c,keys){
        
        if ((this.gameFrame%1) == 0){
            this.frameX++
        }
        if(this.frameX > 5){
            this.frameX = 0
        }
        
        //rotação nave
        c.save()
        c.beginPath()
        c.translate(this.camera.width / 2,this.camera.height / 2)
        c.rotate(this.angle * Math.PI / 180)
        if(keys.w){
            //baixo
            c.drawImage(this.image.propV,this.frameX*64,0,64, 64,-this.width / 2 + this.width/2, -this.height / 2,64,64)
        }
        if(keys.s){
            //cima
            c.drawImage(this.image.propV,this.frameX*64,0,64, 64,-this.width / 2 - this.width/2, -this.height / 2,64,64)
        }
        console.log(-this.width / 2  + this.width/4, -this.height / 2 + this.height / 2)


        if(keys.a){
            //direita topo
            c.drawImage(this.image.propH,this.frameX*64,0,64, 64,-this.width / 2  - this.width/4, -this.height / 2 - this.height / 3,64,64)
            //esquerda baixo
            c.drawImage(this.image.propH,this.frameX*64,0,64, 64,-this.width / 2  + this.width/4,-this.height / 2 + this.height / 2,64, 64)

        }
        if(keys.d){
            //esquerda topo
            c.drawImage(this.image.propH,this.frameX*64,0,64, 64,-this.width / 2  - this.width/4, -this.height / 2 + this.height / 3,64,64)
             //direita baixo
            c.drawImage(this.image.propH,this.frameX*64,0,64, 64,-this.width / 2  + this.width/4, -this.height / 2 - this.height / 2,64,64)
        }

        
        //nave
        c.drawImage(this.image.ship, -this.width / 2, -this.height / 2)
        
        
        c.restore()
        this.gameFrame++

    }
}