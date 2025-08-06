// 📁 utils.js
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function ask(pregunta) {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta.trim());
    });
  });
}

export function closeRL() {
  rl.close();
}

// 📁 info_camper.js
export const campers = [];

// 📁 salones.js
export const salones = [];

// 📁 camper.js
import { ask } from './utils.js';

export async function inscribirCamper(lista) {
  console.clear();
  console.log("📝 INSCRIPCIÓN DE CAMPER");

  const nuevoCamper = {
    ID: parseInt(await ask("Ingrese su número de identificación: ")),
    Nombre: await ask("Ingrese su(s) nombre(s): "),
    Apellido: await ask("Digite sus apellidos: "),
    Direccion: await ask("Ingrese su dirección: "),
    Acudiente: await ask("Ingrese el nombre de su acudiente: "),
    "Numero de celular": parseInt(await ask("Ingrese su número de celular: ")),
    "Numero de telefono fijo": parseInt(await ask("Ingrese su número de teléfono fijo: ")),
    Estado: {
      "En proceso": false,
      Inscrito: true,
      Aprobado: false,
      Rechazado: false,
      Cursando: false,
      Graduado: false,
      Expulsado: false,
      Retirado: false,
    },
    Riesgo: false,
    grupo: "",
    notas: {
      "Prueba téorica": 0,
      "Prueba Práctica": 0,
      Evaluaciones: 0
    }
  };

  lista.push(nuevoCamper);
  console.log("✅ El camper ha sido inscrito.");
}

export async function mostrarPerfilCamper(lista) {
  const idBuscado = parseInt(await ask("Ingrese su número de documento: "));
  const camper = lista.find(c => c.ID === idBuscado);

  if (camper) {
    const estadoActual = Object.keys(camper.Estado).find(key => camper.Estado[key]);

    console.log(`\n📄 PERFIL DEL CAMPER\nNombre: ${camper.Nombre} ${camper.Apellido}\nDirección: ${camper.Direccion}\nAcudiente: ${camper.Acudiente}\nCelular: ${camper["Numero de celular"]}\nTeléfono Fijo: ${camper["Numero de telefono fijo"]}\nEstado: ${estadoActual || "Indefinido"}\nRiesgo: ${camper.Riesgo ? "Sí" : "No"}\nGrupo: ${camper.grupo || "Sin grupo"}\nNotas:\n  Prueba teórica: ${camper.notas["Prueba téorica"]}\n  Prueba práctica: ${camper.notas["Prueba Práctica"]}\n  Evaluaciones: ${camper.notas.Evaluaciones}`);
  } else {
    console.log("❌ No se encontró ningún camper.");
  }
}

export async function salirCampus(lista) {
  const id = parseInt(await ask("Ingrese el número de documento del camper que desea sacar del campus: "));
  const camper = lista.find(c => c.ID === id);

  if (camper) {
    camper.Estado = {
      "En proceso": false,
      Inscrito: false,
      Aprobado: false,
      Cursando: false,
      Graduado: false,
      Expulsado: false,
      Retirado: true,
      Rechazado: false
    };
    console.log(`✅ El camper ${camper.Nombre} ${camper.Apellido} ha sido retirado.`);
  } else {
    console.log("❌ No hay registro del camper.");
  }
}

// 📁 trainer.js
export function subMenuTrainer(nombre) {
  console.log(`\n👨‍🏫 Bienvenido, ${nombre}. Aquí irá tu submenú (funcionalidad en desarrollo).`);
}

// 📁 coordinador.js
import { ask } from './utils.js';
import { campers } from './info_camper.js';
import { salones } from './salones.js';

export async function menuCoordinador() {
  let opcion;
  do {
    console.clear();
    opcion = await ask(
      "MENÚ COORDINADOR:\n1. Ver campers inscritos\n2. Ver campers aprobados\n3. Ver trainers\n4. Volver\n> "
    );

    switch (opcion) {
      case "1":
        console.log("\nCampers inscritos:");
        campers
          .filter(c => c.Estado?.Inscrito)
          .forEach(c => console.log(`- ${c.Nombre} ${c.Apellido}`));
        break;
      case "2":
        console.log("\nCampers aprobados:");
        campers
          .filter(c => c.Estado?.Aprobado)
          .forEach(c => console.log(`- ${c.Nombre} ${c.Apellido}`));
        break;
      case "3":
        console.log("\nTrainers:");
        salones.forEach(s => console.log(`- ${s.Profesor}`));
        break;
      case "4":
        console.log("🔙 Volviendo al menú principal...");
        break;
      default:
        console.log("❌ Opción inválida");
    }

    if (opcion !== "4") await ask("\nPresiona ENTER para continuar...");
  } while (opcion !== "4");
}

// 📁 main.js
import { ask, closeRL } from './utils.js';
import { campers } from './info_camper.js';
import { inscribirCamper, mostrarPerfilCamper, salirCampus } from './infocamper.js';
import { subMenuTrainer } from './trainer.js';
import { menuCoordinador } from './coordinador.js';

async function menuPrincipal() {
  console.clear();
  const opcion = await ask("Bienvenido al programa de Campuslands\n1. Camper\n2. Trainer\n3. Coordinador\n> ");

  switch (opcion) {
    case "1":
      await menuCamper();
      break;
    case "2":
      await menuTrainer();
      break;
    case "3":
      await menuCoordinador();
      break;
    default:
      console.log("❌ Opción incorrecta");
  }

  closeRL();
}

async function menuCamper() {
  let opcion;
  do {
    console.clear();
    opcion = await ask("CAMPPER:\n1. Ingresar al perfil\n2. Inscribirse\n3. Salir del campus\n4. Salir\n> ");

    switch (opcion) {
      case "1":
        await mostrarPerfilCamper(campers);
        break;
      case "2":
        await inscribirCamper(campers);
        break;
      case "3":
        await salirCampus(campers);
        break;
      case "4":
        console.log("👋 Cerrando sesión...");
        break;
      default:
        console.log("❌ Opción inválida");
    }

    if (opcion !== "4") await ask("\nPresiona ENTER para continuar...");
  } while (opcion !== "4");
}

async function menuTrainer() {
  let opcion;
  do {
    console.clear();
    opcion = await ask("TRAINER:\n1. Pedro Gomez\n2. Miguel Rodriguez\n3. Juan Nariño\n4. Santiago Melo\n5. Carlos Rueda\n6. Antonio Vega\n7. Volver\n> ");

    switch (opcion) {
      case "1":
        subMenuTrainer("Pedro Gomez");
        break;
      case "2":
        subMenuTrainer("Miguel Rodriguez");
        break;
      case "3":
        subMenuTrainer("Juan Nariño");
        break;
      case "4":
        subMenuTrainer("Santiago Melo");
        break;
      case "5":
        subMenuTrainer("Carlos Rueda");
        break;
      case "6":
        subMenuTrainer("Antonio Vega");
        break;
    }

    if (opcion !== "7") await ask("\nPresiona ENTER para continuar...");
  } while (opcion !== "7");
}

menuPrincipal();
