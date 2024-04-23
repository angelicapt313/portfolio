
  // Obtener referencia al botón de menú de hamburguesa y a la barra de navegación
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navbar = document.getElementById('navbar');
  
  // Agregar un listener para el evento click al botón de menú
  hamburgerMenu.addEventListener('click', function() {
    // Alternar la clase "collapsed" en la barra de navegación
    navbar.classList.toggle('collapsed');
  });
  
  // Añadir un listener para el evento resize de la ventana
  window.addEventListener('resize', function() {
    // Si la pantalla es más grande que 768px, asegúrate de que la barra de navegación no esté colapsada
    if (window.innerWidth > 768) {
      navbar.classList.remove('collapsed');
    }
  });