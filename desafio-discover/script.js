function toggleMode() {
    const html = document.documentElement

    const isLightMode = html.classList.contains("light")
    html.classList.toggle('light', !isLightMode)
    
    const img = document.querySelector("#profile img")

    if(!isLightMode) {
        img.setAttribute('src', 'http://github.com/carollmm21.png')
     } else {
        img.setAttribute('src','http://github.com/carollmm21.png')
    } 
    
} 