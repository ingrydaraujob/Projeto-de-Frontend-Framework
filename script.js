document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('themeToggleButton');
    const body = document.body;

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = 'Alternar para Tema Claro';
        } else {
            themeToggleButton.textContent = 'Alternar para Tema Escuro';
        }
    });
});


