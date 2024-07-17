// Definición de la función que valida el formulario
function validateForm() {
    // Obtener el valor del campo de usuario y contraseña
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Obtener el elemento donde se mostrarán los mensajes de error
    let errorMessage = document.getElementById('error-message');

    // Arreglo para almacenar los mensajes de error encontrados
    let errorMessages = [];

    // Validación del campo de usuario
    if (username === "") {
        errorMessages.push("Por favor, ingrese su usuario.");
    } else if (username.length < 3) {
        errorMessages.push("El usuario debe tener al menos 3 caracteres.");
    }

    // Validación del campo de contraseña
    if (password === "") {
        errorMessages.push("Por favor, ingrese su contraseña.");
    } else if (password.length < 6) {
        errorMessages.push("La contraseña debe tener al menos 6 caracteres.");
    } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
        errorMessages.push("La contraseña debe contener al menos una letra y un número.");
    }

    // Si se encontraron errores, mostrarlos en el mensaje de error
    if (errorMessages.length > 0) {
        errorMessage.textContent = errorMessages.join(' ');
    } else {
        // Si no hay errores, limpiar el mensaje de error
        errorMessage.textContent = "";

        // Aquí se puede agregar la lógica para enviar el formulario o realizar la autenticación
        alert("Inicio de sesión exitoso!");
    }
}
