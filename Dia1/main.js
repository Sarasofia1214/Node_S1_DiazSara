// main.js
import readline from "readline";
import { campers } from "./info_camper.js";
import { inscribirCamper, mostrarPerfilCamper, salirCampus } from "./camper.js";
import { subMenuTrainer } from "./trainer.js";
import { menuCoordinador } from "./coordinador.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

async function menuPrincipal() {
  console.clear();
  const opcion = await ask(
    "Bienvenido al programa de Campuslands\n1. Camper\n2. Trainer\n3. Coordinador\n> "
  );

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

  rl.close();
}

async function menuCamper() {
  let opcion;
  do {
    console.clear();
    opcion = await ask(
      "CAMPPER:\n1. Ingresar al perfil\n2. Inscribirse\n3. Salir del campus\n4. Salir\n> "
    );

    switch (opcion) {
      case "1":
        mostrarPerfilCamper(campers);
        break;
      case "2":
        inscribirCamper(campers);
        break;
      case "3":
        salirCampus(campers);
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
    opcion = await ask(
      "TRAINER:\n1. Pedro Gomez\n2. Miguel Rodriguez\n3. Juan Nariño\n4. Santiago Melo\n5. Carlos Rueda\n6. Antonio Vega\n7. Volver\n> "
    );

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
