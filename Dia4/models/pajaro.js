//Comoando super
// En una clase que hereda de otra, super es una llamada especial que hace
//referencia al constructor o métodos de la clase padre.

const animal = require("./animal");

//Dentro del constructor de una clase hija, super se usa para invocar el constructor de la clase padre

class pajaro extends animal{
    constructor(nombre, raza){
        super(nombre);
        this.raza=raza;
    }
    hablar(){
        console.log(`El ${this.nombre} es un ${this.raza}`);
    }
}
module.exports= pajaro;