document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    const rut = document.getElementById('rut');
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const nombreUsu = document.getElementById('nombre_usu');
    const contrasena = document.getElementById('contrasena');
    const confirmarContrasena = document.getElementById('confirmar_contrasena');
    const telefono = document.getElementById('telefono');
    const listInputs = document.querySelectorAll(".form-input");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Limpiar mensajes previos
        listInputs.forEach(el => el.lastElementChild.innerHTML = "");

        let valido = true;

        // Validación de campos
        if (!rut.value.trim()) {
            mostrarError("rut", "Por favor ingresa el RUT");
            valido = false;
        }

        if (!nombre.value.trim() || nombre.value.length < 2 || nombre.value.length > 50) {
            mostrarError("nombre", "Nombre debe tener entre 2 y 50 caracteres");
            valido = false;
        }

        if (!correo.value.trim() || !validarEmail(correo.value)) {
            mostrarError("correo", "Por favor ingresa un correo válido");
            valido = false;
        }

        if (!nombreUsu.value.trim() || nombreUsu.value.length < 4 || nombreUsu.value.length > 20) {
            mostrarError("nombre_usu", "Usuario debe tener entre 4 y 20 caracteres");
            valido = false;
        }

        if (!contrasena.value.trim() || contrasena.value.length < 8) {
            mostrarError("contrasena", "La contraseña debe tener al menos 8 caracteres");
            valido = false;
        }

        if (contrasena.value !== confirmarContrasena.value) {
            mostrarError("confirmar_contrasena", "Las contraseñas no coinciden");
            valido = false;
        }

        if (telefono.value && (telefono.value.length < 8 || telefono.value.length > 12)) {
            mostrarError("telefono", "Teléfono debe tener entre 8 y 12 dígitos");
            valido = false;
        }

        // Si todos los campos son válidos
        if (valido) {
            // Aquí podrías enviar el formulario o realizar otra acción
            alert("Registro exitoso"); // Simulación de éxito
            // form.submit(); // Descomentar si se desea enviar el formulario
        }
    });

    function mostrarError(claseInput, mensaje) {
        let elemento = document.querySelector(`.${claseInput}`);
        elemento.lastElementChild.innerHTML = mensaje;
    }

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email
        return re.test(email);
    }
});