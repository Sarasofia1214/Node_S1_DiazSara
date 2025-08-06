// main.js
import { estudiantes } from "./info_camper.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

let booleanito = true;

function menuPrincipal() {
  const opcion = prompt("Bienvenido al programa de Campuslands\n1. Ver campers\n2. Salir\n");

  switch (opcion) {
    case "1":
      estudiantes.forEach(c => {
        console.log(`${c.Nombre} ${c.Apellido} - Estado: ${JSON.stringify(c.Estado)}`);
      });
      break;
    case "2":
      console.log(" Cerrando programa");
      booleanito = false;
      break;
    default:
      console.log(" Opción inválida");
  }
}

while (booleanito) {
  menuPrincipal();
}
