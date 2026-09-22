const form = document.getElementById('formulario');
const btnNormal = document.getElementById('btn-normal');
const btnAlto = document.getElementById('btn-alto');

btnNormal.addEventListener('click', () => {
    document.body.classList.remove('alto-contraste');
});

btnAlto.addEventListener('click', () => {
    document.body.classList.add('alto-contraste');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let esValido = true;

    document.querySelectorAll('.error-msg').forEach((span) => {
        span.textContent = '';
        span.classList.remove('visible');
    });

    // 1. Nombre
    const nombre = document.getElementById('nombre');
    const errNombre = document.getElementById('error-nombre');
    if (!nombre.value.trim()) {
        mostrarError(errNombre, 'El campo Nombre es obligatorio.');
        esValido = false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value.trim())) {
        mostrarError(errNombre, 'El campo Nombre solo puede contener letras.');
        esValido = false;
    }

    // 2. Apellido
    const apellido = document.getElementById('apellido');
    const errApellido = document.getElementById('error-apellido');
    if (!apellido.value.trim()) {
        mostrarError(errApellido, 'El campo Apellido es obligatorio.');
        esValido = false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value.trim())) {
        mostrarError(errApellido, 'El campo Apellido solo puede contener letras.');
        esValido = false;
    }

    // 3. Email
    const email = document.getElementById('email');
    const errEmail = document.getElementById('error-email');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        mostrarError(errEmail, 'El campo Email es obligatorio.');
        esValido = false;
    } else if (!regexEmail.test(email.value.trim())) {
        mostrarError(errEmail, 'El formato del Email no es válido.');
        esValido = false;
    }

    // 4. Fecha de Nacimiento
    const fecha = document.getElementById('fechaNacimiento');
    const errFecha = document.getElementById('error-fechaNacimiento');
    if (!fecha.value) {
        mostrarError(errFecha, 'El campo Fecha de Nacimiento es obligatorio.');
        esValido = false;
    }

    // 5. País de Residencia
    const pais = document.getElementById('paisResidencia');
    const errPais = document.getElementById('error-paisResidencia');
    if (!pais.value.trim()) {
        mostrarError(errPais, 'El campo País de Residencia es obligatorio.');
        esValido = false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(pais.value.trim())) {
        mostrarError(errPais, 'El campo País de Residencia solo puede contener letras.');
        esValido = false;
    }

    if (esValido) {
        alert('¡Formulario enviado correctamente!');
        form.reset();
    }
});

function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.classList.add('visible');
}