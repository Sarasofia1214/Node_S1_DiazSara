const animal= require('./animal');

class perro extends animal{
    hablar(){
        console.log(`${this.nombre} esta haciendo un ladrando`)
    }

}
module.exports=perro;

// Polimosfismo permite que metodos del mismo nombre se comporten de manera 
// diferente segun el objeto que los invoque.

// Polimorfismo, perro hereda de animal, evitando duplicacion de codigo.
