// 1. Seleccionamos los elementos usando TUS IDs actuales
const menuBtn = document.getElementById('menuBtn'); // Coincide con id="menuBtn"
const navLinks = document.getElementById('navLinks'); // Coincide con id="navLinks"
const links = document.querySelectorAll('.nav-links li');

// 2. Evento para abrir/cerrar el menú
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Cambiamos el icono según el estado
    if (navLinks.classList.contains('active')) {
        menuBtn.innerHTML = '✕'; 
    } else {
        menuBtn.innerHTML = '☰';
    }
});

// 3. Cerrar el menú al hacer clic en un enlace (importante para móviles)
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '☰';
    });
});