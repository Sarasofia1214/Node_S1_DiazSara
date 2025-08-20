const conenectDb= require('../db');

class UserModel{
    constructor(db){
        this.schema={
            nombre: 'string',
            correo: 'string',
            edad: 'number'
        };
    }
    validar(usuario){
        for(let campo in this.schema){
            if (typeof usuario [campo] !== this.schema[campo]){
                return false;
            }
        }
        return true;
    }
    async crear(usuario){
        if(!this.validar(usuario)){
            throw new Error ('Error tipado de datos ingresados');
        }
        const db= await conenectDb.connectDB.connect();
        const result = await db.collection('usuarios').insertOne(usuario);
        return result.insertId;
    }
    async listar(){
        const db = await connectDB.connect();
        let arreglo = await db.collection('usuarios').find().toArray();
        await connectDB.disconnect();
        return arreglo;
    }
    
}
module.exports= UserModel;