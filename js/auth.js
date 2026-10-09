/**
 * LÓGICA DE VALIDACIÓN Y PRUEBAS DEL MÓDULO DE AUTENTICACIÓN
 * Proyecto: Communication
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Referencias a los formularios y al contenedor de alertas
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const alertContainer = document.getElementById('alertContainer');

    /**
     * Función reutilizable para renderizar alertas Bootstrap
     */
    function mostrarAlerta(mensaje, tipo = 'success') {
        if (alertContainer) {
            alertContainer.innerHTML = `
                <div class="alert alert-${tipo} alert-dismissible fade show text-center mb-0" role="alert">
                    ${mensaje}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
        }
    }

    // Evento de Login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recargar la página

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (!email || !password) {
                mostrarAlerta('Por favor, completa todos los campos del formulario de inicio de sesión.', 'danger');
            } else {
                mostrarAlerta(`¡Bienvenido de nuevo, <strong>${email}</strong>! Redirigiendo a Communication...`, 'success');
            }
        });
    }

    // Evento de Registro
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recargar la página

            const nombre = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;

            if (!nombre || !email || !password) {
                mostrarAlerta('Por favor, ingresa todos los campos para crear tu cuenta.', 'danger');
            } else if (password.length < 6) {
                mostrarAlerta('La contraseña debe tener al menos 6 caracteres.', 'warning');
            } else {
                mostrarAlerta(`¡Usuario <strong>${nombre}</strong> registrado con éxito! Ya puedes iniciar sesión.`, 'success');
            }
        });
    }

});