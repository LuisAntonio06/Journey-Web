const imagenInicio = document.querySelector('#imagenInicio');
const sectionLogin = document.querySelector('#sectionFormulario');

sectionLogin.style.display = 'none';
sectionLogin.style.opacity = '0'; // Inicialmente oculto con opacidad

// Agregar transición CSS a ambas secciones
imagenInicio.style.transition = 'opacity 1s ease';
sectionLogin.style.transition = 'opacity 1s ease';


setTimeout(() => {
    imagenInicio.style.opacity = '0'; // Desvanece la imagen

    setTimeout(() => {
        imagenInicio.style.display = 'none'; // Oculta después de la animación
        sectionLogin.style.display = 'block'; // Muestra el formulario
        setTimeout(() => {
            sectionLogin.style.opacity = '1'; // Hace que aparezca con desvanecimiento
        }, 50); // Pequeño delay para asegurar la visibilidad antes de cambiar opacidad
    }, 1000); // Espera a que termine la animación de imagenInicio
}, 2000);


const formularioLogin = document.querySelector('#formularioLogin');

formularioLogin.addEventListener('submit' , validarFormulario);

function validarFormulario(e){
    e.preventDefault();
}
