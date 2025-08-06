// salones.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI; // Asegúrate de tener MONGO_URI en .env
const dbName = "Camper"; // Base de datos
const collectionName = "salones"; // Colección

export let salones = [];

export async function cargarSalonesDesdeMongo() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    salones = await collection.find({}).toArray();
    console.log("✅ Salones cargados desde MongoDB");
  } catch (error) {
    console.error("❌ Error al cargar salones:", error);
  } finally {
    await client.close();
  }
}
