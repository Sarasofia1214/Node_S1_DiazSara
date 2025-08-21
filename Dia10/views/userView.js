const prompt = require('prompt-sync');

class UsuarioView{ // Nombre de clases pastelcase sustantivos empiezan con mayusculas
    pedirDatosUsuario(){
        const nombre = prompt ('Nombre: ');
        const correo = prompt ('Correo');
        const edad = parseInt(prompt('Edad: '));
        return{
            nombre,correo,edad
        }
    }
    mostrarMensaje(msg){
        console.log(msg);
    }

    mostrarUsuarios(usuarios){
        console.log("Lista de usuarios");
        usuarios.forEach(u => { // u es el indice que recorre a la lista
               console.log(`\nNombre: ${u["nombre"]}, \nCorreo:${u["correo"]},\nEdad:${u["edad"]} `);
        });
    }
}
module.exports=UsuarioView;
