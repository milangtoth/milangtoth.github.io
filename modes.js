function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'stylesheet.css') {
        theme.setAttribute('href', 'stylesheet2.css');
    } else {
        theme.setAttribute('href', 'stylesheet.css');
    }
}