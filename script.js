const changeLanguage = lang => {
    // Oculta todos los divs de idioma
    document.getElementById('en-content').style.display = 'none';
    document.getElementById('es-content').style.display = 'none';

    // Muestra solo el div del idioma seleccionado
    document.getElementById(`${lang}-content`).style.display = 'block';
}

document.getElementById('Accept').addEventListener('click', function() {
    document.getElementById('blurscr').style.display = 'none';
    document.getElementById('centralBox').style.display = 'none';
});

console.clear();

console.log("Que mira bobo 😶");