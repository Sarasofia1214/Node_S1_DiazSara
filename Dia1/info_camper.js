// info_camper.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
const client = new MongoClient(uri);

let estudiantes = [];

async function conectarYObtenerCampers() {
  try {
    await client.connect();
    console.log("Conectado a MongoDB");

    const db = client.db(dbName);
    const coleccion = db.collection("estudiantes");

    estudiantes = await coleccion.find().toArray();
    console.log(`📋 Se cargaron ${estudiantes.length} campers`);
  } catch (error) {
    console.error(" Error al conectar o cargar campers:", error.message);
  }
}

// Ejecutamos al importar este módulo
await conectarYObtenerCampers();

export { estudiantes };
