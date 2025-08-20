// La vista busca centralizar toda la interacción
// por consola, lo cual incluye menú, prompts y 
// formatos de salida

const ItemView = {
    mostrarMenu(){
        console.log("\n=== CRUD de Items ===")
        console.log("1. Crear elemento")
        console.log("2. Listar elementos")
        console.log("3. Actualizar elemento")
        console.log("4. Eliminar elemento")
        console.log("0. Salir")
    },
    OpcionMenu(prompt){
        let opcionUsuario = prompt("Ingrese una opcion: ")
        return opcionUsuario.trim();

    },
    pedirDatosCreacion(prompt){
        const nombre = prompt("Nombre ").trim();
        const descripcion = prompt("Descripcion ").trim();
        return {nombre, descripcion}
    },
    mostrarMensaje(msg){
        if (typeof msg === "string") {
          console.log("\n" + msg);
        } else {
          console.log("\n" + JSON.stringify(msg, null, 2));
        }
    },
    idActualizar(prompt){
        const id = prompt("id: ")
        return id.trim();
    }
}

module.exports = {ItemView}