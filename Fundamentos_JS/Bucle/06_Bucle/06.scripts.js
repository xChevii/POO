function calcularPromedio() {
  let suma = 0;
  for (let i = 1; i <= 5; i++) {
    let calificacion = parseFloat(prompt("Ingrese la calificación " + i + ":"));
    suma += calificacion;
  }
  let promedio = suma / 5;
  document.getElementById("resultado").innerHTML = "<p>El promedio de las 5 calificaciones es:</p> <br><h2>" + promedio + "</h2>";
}