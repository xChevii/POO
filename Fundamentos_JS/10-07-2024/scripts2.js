function agregarNombre() {
    const input = document.getElementById('nombreInput');
    const nombre = input.value.trim();

    if (nombre) {
        document.getElementById('listaNombres').innerHTML += `<li>${nombre}</li>`;
        input.value = "";
        input.focus();
    } else {
        alert("por favor, ingresa un nombre.");
    }
}