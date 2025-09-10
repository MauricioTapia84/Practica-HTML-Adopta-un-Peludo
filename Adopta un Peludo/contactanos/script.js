document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const listInputs = document.querySelectorAll(".form-input");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Limpiar mensajes previos
        listInputs.forEach(el => el.lastElementChild.innerHTML = "");

        let valido = true;

        // Validar cada campo
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const telefono = document.getElementById('telefono');
        const asunto = document.getElementById('asunto');
        const mensaje = document.getElementById('mensaje');

        // Validación del nombre
        if (!/^[a-zA-Z\s]{2,50}$/.test(nombre.value.trim())) {
            mostrarError("nombre", "Nombre: solo letras y espacios (2-50 caracteres)");
            valido = false;
        }

        // Validación del email
        if (!validateEmail(email.value) || email.value.length > 100) {
            mostrarError("email", "Correo: debe tener formato válido y máximo 100 caracteres");
            valido = false;
        }

        // Validación del teléfono (opcional)
        if (telefono.value && (!/^[0-9]{8,12}$/.test(telefono.value))) {
            mostrarError("telefono", "Teléfono: solo números (8-12 dígitos)");
            valido = false;
        }

        // Validación del asunto
        if (!/^[^\s].{2,100}$/.test(asunto.value.trim())) {
            mostrarError("asunto", "Asunto: no vacío (3-100 caracteres)");
            valido = false;
        }

        // Validación del mensaje
        if (!/^(?!\s).{10,500}$/.test(mensaje.value.trim())) {
            mostrarError("mensaje", "Mensaje: no vacío (10-500 caracteres)");
            valido = false;
        }

        if (valido) {
            alert("Mensaje enviado con éxito");
            form.reset(); // Reiniciar el formulario
            window.location.href = "../index-logueado.html";
        }
    });

    function mostrarError(claseInput, mensaje) {
        let elemento = document.querySelector(`.${claseInput}`);
        if (elemento) {
            elemento.lastElementChild.innerHTML = mensaje;
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});