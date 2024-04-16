function encuentraelNumeroMayor() {
  let numeros = [];
  for (let i = 1; i <= 5; i++) {
    let numero = parseInt(prompt("escribe el número " + i + ":"));
    numeros.push(numero);
  }
  let numeroMayor = Math.max(...numeros);
  document.getElementById("resultado").innerHTML = "<p>el número mayor es:</p> <br><h2>" + numeroMayor + "</h2>";
}