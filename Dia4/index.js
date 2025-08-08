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

const pajaro= require('./models/pajaro.js');
const animal3 = new pajaro("piolin", "loro");
animal3.hablar();




const pedido = require('./models/pedido.js');
const lineitem = require('./models/lineitem.js');

const pedido1 = new pedido('P-001');
pedido1.additem(new lineitem('Manzanas', 1,1.2));
pedido1.additem(new lineitem('Peras', 2,1.5));

console.log('total pedido', pedido1.total());


const libro = require('./models/libro.js');
const autor = require('./models/autor.js');

const autor1= new autor(1, 'gabo');
const libro1= new libro('1999', '100 años de soledad');
const libro2 = new libro ('1990', 'Amor en los tiempos del cólera');

console.log(libro1);
console.log(autor1);
autor1.addlibro(libro1);
autor1.addlibro(libro2);
console.log(autor1);
console.log(libro1);