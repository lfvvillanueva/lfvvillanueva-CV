function changeLanguage(lang) {
    // Oculta todos los divs de idioma
    document.getElementById('en-content').style.display = 'none';
    document.getElementById('es-content').style.display = 'none';

    // Muestra solo el div del idioma seleccionado
    document.getElementById(`${lang}-content`).style.display = 'block';
}
