function encontrarNP() {
  let n = parseInt(prompt("escribe el valor de N:"));
  let array = [];
  for (let i = 1; array.length < n; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  document.getElementById("resultado").innerHTML = "<p>los primeros " + n + " números pares son:</p> <br><h2>" + array + "</h2>";
}