function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const image = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    image.setAttribute("src", "./img/CORRENDO.png");
    image.setAttribute(
      "alt",
      "Foto de perfil de Victor, blusa Azul e com um sorriso simpático"
    );
  } else {
    image.setAttribute("src", "./img/COZY.png");
  }
}
