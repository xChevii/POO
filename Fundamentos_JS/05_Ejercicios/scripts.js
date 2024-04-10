function valoraPuntuacion(){
    let puntuacion = parseInt(prompt("ingrese su puntuacion"));
    let resultado = "";

    if (puntuacion >= 90){
        else if (puntuacion >=70 && puntuacion <=89){
            resultado = `buen trabajo - ${puntuacion}`;
    }   else if (puntuacion < 70){
        resultado = `necesitas mejorar - ${puntuacion}`;
    }   else if{
        resultado = `ingrese un valor valido`;
    }

document.getElementById("lista").innerHTML = resultado;    
}