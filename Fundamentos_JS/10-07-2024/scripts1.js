function incrementarContador(btn) {
    let count = parseInt(btn.getAttribute('data-count'), 10);
    if (isNaN(count)) {
        count = 0;
    }
    count++;
    btn.setAttribute('data-count', count);
    btn.textContent = 'Clics: ' + count;
}