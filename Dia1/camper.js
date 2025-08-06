
import promptSync from "prompt-sync";
import { conectarDB } from "./conexion.js";

const prompt = promptSync();

/**
 * Mostrar el perfil de un camper por ID.
 */
export async function mostrarPerfilCamper() {
  const id = prompt("🔎 Ingrese el ID del camper: ");
  const db = await conectarDB();
  const coleccion = db.collection("estudiantes");

  const camper = await coleccion.findOne({ ID: Number(id) });

  console.log("🧪 Resultado de búsqueda en MongoDB:", camper); // <- Aquí ves si lo encontró

  if (camper) {
    console.log(`\n📄 Perfil del camper:
  🆔 ID: ${camper.ID}
  👤 Nombre: ${camper.Nombre} ${camper.Apellido}
  📧 Email: ${camper.Correo}
  🧑‍🏫 Trainer: ${camper.Trainer}
  🏘️ Grupo: ${camper.grupo}
  🎯 Estado:
    - En proceso: ${camper.Estado["En proceso"]}
    - Inscrito: ${camper.Estado.Inscrito}
    - Aprobado: ${camper.Estado.Aprobado}
    - Rechazado: ${camper.Estado.Rechazado}
    - Cursando: ${camper.Estado.Cursando}
    - Graduado: ${camper.Estado.Graduado}
    - Expulsado: ${camper.Estado.Expulsado}
    - Retirado: ${camper.Estado.Retirado}
`);
  } else {
    console.log("❌ Camper no encontrado.");
  }
}



/**
 * Inscribir un nuevo camper.
 */
export async function inscribirCamper() {
  const db = await conectarDB();
  const coleccion = db.collection("estudiantes");

  const id = Number(prompt("🆔 Ingrese ID del nuevo camper: "));
  const existe = await coleccion.findOne({ ID: id });

  if (existe) {
    console.log("⚠️ Ya existe un camper con ese ID.");
    return;
  }

  const nuevo = {
    ID: id,
    Nombre: prompt("👤 Ingrese nombre: "),
    Apellido: prompt("👤 Ingrese apellido: "),
    Correo: prompt("📧 Ingrese correo: "),
    Trainer: prompt("🧑‍🏫 Ingrese nombre del trainer: "),
    grupo: prompt("🏘️ Ingrese grupo asignado: "),
    Estado: "Inscrito"
  };

  await coleccion.insertOne(nuevo);
  console.log("✅ Camper inscrito exitosamente.");
}

/**
 * Marcar un camper como fuera del campus.
 */
export async function salirCampus() {
  const db = await conectarDB();
  const coleccion = db.collection("estudiantes");

  const id = Number(prompt("🆔 Ingrese el ID del camper que va a salir: "));
  const resultado = await coleccion.updateOne(
    { ID: id },
    { $set: { Estado: "Fuera del Campus" } }
  );

  if (resultado.modifiedCount > 0) {
    console.log("📤 Camper ha salido del campus.");
  } else {
    console.log("❌ No se encontró el camper o ya está fuera.");
  }
}
