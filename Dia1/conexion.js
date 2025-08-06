// conexion.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
const dbName = "Campers";

export async function conectarDB() {
  try {
    await client.connect();
    const db = client.db(dbName);
    console.log("✅ Conectado a MongoDB");
    return db;
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error.message);
    throw error;
  }
}

export { uri }; // ✅ Ahora puedes importarlo si realmente lo necesitas
