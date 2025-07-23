
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('language') || 'he';
    document.getElementById('language-select').value = savedLang;
    setLanguage(savedLang);
});

function changeLanguage() {
    const lang = document.getElementById('language-select').value;
    localStorage.setItem('language', lang);
    setLanguage(lang);
}

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = translations[lang][key] || el.innerText;
    });
}
