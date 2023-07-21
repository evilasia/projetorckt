function toggleMode() {
    const html = doucument.documentElement

    const img = document.querySelector
    ("#profile img")
    if(html.classlist.contains('light')) {
        html.classlist.remove('light')
    } else {
        html.classlist.add('light')

    }
}