const ItemView = {
    mostrarMenu(){
        console.log("==== CRUD en Consola con Node.js ====")
        console.log("1. Crear elemento")
        console.log("2. Listar elementos")
        console.log("3. Actualizar elemento")
        console.log("4. Eliminar elemento")
        console.log("5. Salir")
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
          // Objetos/arrays: muéstralos legibles
          console.log("\n" + JSON.stringify(msg, null, 2));
          // Alternativa: console.dir(msg, { depth: null });
        }
    },
    idActualizar(prompt){
        const id = prompt("id: ")
        return id.trim();
    }
}

module.exports = {ItemView}