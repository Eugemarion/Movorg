function toggleContent(contentId) {
    var contenido = document.getElementById(contentId);
    contenido.style.display = contenido.style.display === 'block' ? 'none' : 'block';
}

var tarjetas = document.querySelectorAll('.card');
tarjetas.forEach(function (tarjeta) {
    tarjeta.addEventListener('touchstart', function () {
        // Alternar la clase 'tactil-activo' en la tarjeta tocada
        tarjeta.classList.toggle('tactil-activo');
    });
});
