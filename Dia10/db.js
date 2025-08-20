// Conexion hacia la BBDD

require ('dotenv').config();

const {MongoClient} = require('mongodb');

const uri = process.env.URI;
const databse = process.env.DATABASE;

let clinet;
let bd;

async function connect(){
    if(db) return db; // Retorna la variable si tiene alguna conexion
    client= new MongoClient(uri); // Importa MongoClient a client
    await client,connect(); // Abre la conexion
    db= client.db(database);
    return db;
}

async function dissconect(){
    if (client) await client.close();
}

module.exports={connect, dissconect}