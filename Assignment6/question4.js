const themeButtons = document.querySelectorAll('button[data-theme]');
const currentThemeLabel = document.getElementById('currentTheme');
const body = document.body;

const saved = localStorage.getItem('preferredTheme') || 'light';
applyTheme(saved);

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        applyTheme(theme);
        localStorage.setItem('preferredTheme', theme);
    });
});

function applyTheme(themeName) {
    body.setAttribute('data-theme', themeName);
    currentThemeLabel.textContent = themeName;
}