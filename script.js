const SERVER_URL = "https://api.npoint.io/cb849be5c488737fc708";

function toggleTheme() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        document.getElementById('themeBtn').innerText = "المود الفاتح ☀️";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.getElementById('themeBtn').innerText = "المود الغامق 🌙";
    }
}

// تطبيق الثيم عند التحميل
window.onload = () => {
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('themeBtn').innerText = "المود الغامق 🌙";
    }
};
