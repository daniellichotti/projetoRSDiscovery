function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  //pegar a tag img
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/79683513?v=4"
    )
  } else {
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/79683513?v=4"
    )
  }

  //substituir a imagem
  //se tiver lightmode, adicionar a imagem light
  //se tiver sem lightmode, adicionar a imagem normal
}
