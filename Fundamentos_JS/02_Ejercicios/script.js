console.log("vinculado correctamente")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {

    // Tu código aquí
    let ahora = 2023
    let fecha_nac = 2006
    let resultado = ahora-fecha_nac
    alert("mi edad es:" + resultado);
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'VAR1' a 'Var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    let   var1 = 1111;
    let   var2 = var1;
    alert("el valor de var2 es: " + var1)
    // Tu código aquí

    }
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'sum1' y 'sum2' y 'sum3' , resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    let num1 = 35;
    let num2 = 25;
    let num3 = 12;
    let suma = num1 + num2 + num3;
    let resta = num1 - num3;
    let multi = num2 * num3;
    let divi  = num1 / 120;

    alert("la suma es " + suma + "\n la resta es " + resta + "\n la multi es " + multi + "\n la division es " + divi );

    }

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'numero Casa.
// Luego, muestra la longitud del mensaje y el antepenultimo carácter en el mensaje.
function manipularCadenas() {
    // Tu código aquí
        let direccion = "pudahuel";
        let numCasa = "1334";
        let mensaje = " la direccion es " + direccion + " su numero de casa es " + numCasa;
        let longitud = mensaje.length;
        alert("Mensaje: " + mensaje +"\nLongitud: " + longitud +"\nPrimer Caracter: " + mensaje[0]);
}

// crear una nueva funcion llamada "umarIndices"()"crear un arreglo de largo 7(1,2,3,4,5,6,7) sumar el ultimo valor. con el penultimo numero mas el mostrar el resultado en el HTML con una alert// 

function sumarIndices(){

let valor = [1,2,3,4,5,6,7];
let ultimovalor = valor[valor.length  -1]
let penultimovalor = valor[valor,length -3]
let primervalor = valor[0];
suma = ultimovalor + penultimovalor +primervalor;

alert("el resultado de la suma es" + suma );

}