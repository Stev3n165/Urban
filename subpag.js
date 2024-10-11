// Función para mostrar la sección seleccionada
function mostrarSeccion(seccionID) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('section');
    secciones.forEach((seccion) => {
      seccion.style.display = 'none';
    });
  
    // Mostrar la sección seleccionada
    const seccionMostrar = document.getElementById(seccionID);
    if (seccionMostrar) {
      seccionMostrar.style.display = 'block';
    }
  }
  
  // Escuchar los clics en los enlaces de navegación
  document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
    enlace.addEventListener('click', function(event) {
      event.preventDefault();
      const seccionID = this.getAttribute('href').substring(1); // Obtener el ID de la sección
      mostrarSeccion(seccionID); // Llamar a la función para mostrar la sección
    });
  });
  
  // Mostrar la primera sección al cargar la página
  window.onload = function() {
    mostrarSeccion('products'); // Mostrar sección Productos al cargar
  };
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir el comportamiento predeterminado

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});

  