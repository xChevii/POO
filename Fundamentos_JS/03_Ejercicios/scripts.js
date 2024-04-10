unction loging(){
    let nombreUsuario = prompt("ingrese nombre de usuario: ")
    let contraseña prompt("ingrese contraseña: ")
    let usuario = "invitado123";
    let contra = "";
    if (nombreAUsuario == usuario && contraseña == contra){
        result =  "<h2> si pudiste ingresar </h2>";
    }else{
        result = "<h2> no pudiste ingresar </h2>"
    }
        document.getElementById("lista").innerHTML = result;

}