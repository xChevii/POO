function encuentraelnumeroMayor() {
  let numeros = [];
  for (let i = 1; i <= 5; i++) {
    let numero = parseInt(prompt("escriba el numero " + i + ":"));
    numeros.push(numero);

  }
  let numeroMayor = Math.max(...numeros);
  document.getElementById("resultado").innerHTML = "<p>encontraste el numero es:</p> <br><h2>" + numeroMayor + "</h2>";
}
