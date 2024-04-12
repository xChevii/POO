function primero10Pares() {
    let contador = 1;
    let array = [];
    while (array.length < 10) {
      if (contador % 2 === 0) {
        array.push(contador);
      }
      contador++;
    }
    document.getElementById("resultado").innerHTML = "<p>los primeros 10 números pares:</p> <br><h2>" + array + "</h2>";
  }