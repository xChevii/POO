console.log("que fue")
function temperaturasTarea() // para indentificar las cosas
{
    let resultado = ""
    
    //
    
    let temps = prompt("la temperatura de tu mama es: ")
    if(temps <0){
        resultado = `esta haciendo mucho frio estamos a: <h2>${temps}°</h2>`
    } else if (temps > 0, temps <=25){
        resultado = `estamos a una muy buena temperatura, estamos a: <h2>${temps}°</h2>`
    } else if (temps > 25) {
        resultado = `esta haciendo mucho calor estamos a: <h2>${temps}°</h2>`
    }
    document.getElementById('lista').innerHTML = resultado;
}

//code nombre Usuario

unction loging(){
    let nombreUsuario = prompt("ingrese nombre de usuario: ")
    let contraseña prompt("ingrese contraseña: ")
    let usuario = "invitado123";
    let contra = "";
    if (nombreAUsuario == usuario && contraseña == contra){
        result =  "<h2> lograste iniciar </h2>";
        
    }else{
        result = "<h2> no lograste iniciar</h2>"
    }

        document.getElementById("lista").innerHTML = result;

}