const animal= require('./animal');

class perro extends animal{
    hablar(){
        console.log(`${this.nombre} esta haciendo un ladrando`)
    }

}

module.exports=perro;