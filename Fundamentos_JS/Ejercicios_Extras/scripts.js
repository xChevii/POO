console.log("Fue mi pene")

function identificarMayorEdad() // Identificar si es mayor de edad
{
    let resultado = ""
    let edad = prompt("Porfavor ingrese su Edad: ")

    if(edad >= 18){
        resultado = `Es mayor de edad - Tiene: <h2>${edad}</h2>`
    } else{
        resultado = `No es mayor de edad - Tiene: <h2>${edad}</h2>`
    }
    document.getElementById('lista').innerHTML = resultado;
}