import { MongoClient } from "mongodb";
import { uri } from "./conexion.js";

export let campers = [];

export async function cargarCampersDesdeMongo() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("campuslands");
    const collection = db.collection("campers");
    campers = await collection.find().toArray();
  } finally {
    await client.close();
  }
}
