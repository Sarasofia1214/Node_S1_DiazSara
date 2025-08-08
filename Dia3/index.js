// La programacion orientada a objetos
// Es un paradigma de programacion que se basa en el uso de objetos para representar entidades del mundo real dentro del software
//Cada clase tiene objetos, tipo y metodos
// En terminos generales :
// La abstraccion: Representar entidades del mundo real con sus caracteristicas esenciales.
// Encapsulamiento: Oculata detalles internos

const Persona= require('./models/persona.js');
const pedro= new Persona('Pedro',25);
pedro.saludar();

const cuentaBancaria= require ('./models/cuentaBancaria.js');
const cuenta= new cuentaBancaria ('Pedro',1000);
cuenta.depositar(500);
console.log(cuenta.verSaldo());


const perro= require('./models/perro.js');
const animal1= new perro("Paco");
animal1.hablar();

const gato= require('./models/gato.js');
const animal2 = new gato ("Mechas");
animal2.hablar();


