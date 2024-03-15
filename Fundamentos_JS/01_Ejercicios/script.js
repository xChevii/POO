var global = "Global";
let local = "local";
const constante = "Constante";

console.log("variable: Global: " + global + "- local: "+ local + "- Constante: " + constante);

const numeroDecimla = 5.5;

let numero = 54;
let numeroDecimal = 5.5;
let texto = "hola pendejos";
let registroDeCompra = true;
let Semmana = ["lunes","martes","miercoles","jueves","viernes"];
let cosa = {anthonydavid:3};
let indefinida;
let nulo = null;
function suma() {return 4 + 4
}

console.log("Variable:\nEntero " + numero + "\nDecimal " + numeroDecimal + "\nTexto " + texto + "\nBoolean " + registroDeCompra + "\nDias " + Semmana +
"\nObjeto " + JSON.stringify(cosa) + "\nVariable indefinidas " + indefinida + "\nnull" + nulo + "\nresultado funcion " + suma);

console.log( suma ());