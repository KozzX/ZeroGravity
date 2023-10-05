export class InputHandler{
    constructor(){
        this.keys = {
            w:false,
            s:false,
            a:false,
            d:false
        }
        console.log(this.keys)
        window.addEventListener('keydown', event => {
            console.log(this.keys,event.code)
    
            if(event.code == "KeyA"){this.keys.a = true}
            if(event.code == "KeyD"){this.keys.d = true}
            if(event.code == "KeyW"){this.keys.w = true}
            if(event.code == "KeyS"){this.keys.s = true}
        });
        window.addEventListener('keyup', event => {
            if(event.code == "KeyA"){this.keys.a = false}
            if(event.code == "KeyD"){this.keys.d = false}
            if(event.code == "KeyW"){this.keys.w = false}
            if(event.code == "KeyS"){this.keys.s = false}
        });
    }
}