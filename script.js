function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

//pegar a tag img
const img = document.querySelector("#profile img")

    //substituir a img
    if (html.classList.contains("light")){
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
} else {
    // se tiver sem light mode, mantar a img normal
    img.setAttribute("src", "./assets/avatar.png")

  }
}


    //  if(html.classList.contains('light')){
//   html.classList.remove('light')
//} else{
//    html.classList.add('light')
// } 



// pegar a tag img

// substituir a imagem
// se tiver light mode, adicionar a imagem light
// se tiver sem light mode, manter a imagem normal

