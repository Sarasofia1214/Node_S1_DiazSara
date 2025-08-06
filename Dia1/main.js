// main.js
import promptSync from "prompt-sync";
import { campers, cargarCampersDesdeMongo } from "./info_camper.js";
import { inscribirCamper, mostrarPerfilCamper, salirCampus } from "./camper.js";
import { subMenuTrainer } from "./trainer.js";

await cargarCampersDesdeMongo();

const prompt = promptSync();


async function menuCamper() {
  let opcion2;
  do {
    opcion2 = prompt(
      "\n Menú Camper:\n 1. Ingresar al perfil\n 2. Inscribirse\n 3. Salir del campus\n 4. Salir\nSeleccione una opción: "
    );

    switch (opcion2) {
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
        console.log("🔒 Se ha cerrado sesión.");
        break;
      default:
        console.log("❌ Opción incorrecta.");
    }
  } while (opcion2 !== "4");
}




async function menuPrincipal() {
  let opcion;
  do {
    opcion = prompt(
      "\n🏫 Bienvenido al programa de Campuslands\n 1. Camper\n 2. Trainer\n 3. Coordinador\n 4. Salir\nSeleccione una opción: "
    );

    switch (opcion) {
      case "1":
        await menuCamper(); // 👈 NECESARIO
        break;
      case "2":
        const nombreTrainer = prompt("Ingrese su nombre:");
        await subMenuTrainer(nombreTrainer); // si también es async
        break;
      case "3":
        await menuCoordinador(); // si es async
        break;
      case "4":
        console.log("👋 Cerrando programa.");
        break;
      default:
        console.log("❌ Opción inválida.");
    }
  } while (opcion !== "4");
}


await menuPrincipal();
