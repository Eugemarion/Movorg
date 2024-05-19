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

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    // Limpiar mensajes de error anteriores
    document.getElementById('nombreError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('telefonoError').textContent = '';

    // Validar campos
    let valid = true;

    const nombre = document.getElementById('nombre').value;
    if (nombre.trim() === '') {
        document.getElementById('nombreError').textContent = 'El nombre es obligatorio';
        valid = false;
    }

    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'El correo electrónico es obligatorio';
        valid = false;
    }

    const telefono = document.getElementById('mensaje').value;
    if (telefono.trim() === '') {
        document.getElementById('mensajeError').textContent = 'El mensaje es obligatorio';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});