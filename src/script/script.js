// script.js (Modificado para alterar o ícone)
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    // Altera o ícone baseado no tema
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // Opcional: Salvar a preferência do tema no localStorage
    const isDarkMode = body.classList.contains('dark-theme');
    localStorage.setItem('darkMode', isDarkMode);
});

// Opcional: Verificar a preferência do tema ao carregar a página
window.onload = () => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
        body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
};