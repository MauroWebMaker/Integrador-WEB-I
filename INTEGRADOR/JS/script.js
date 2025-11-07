document.addEventListener("DOMContentLoaded", () => {
  const imagenes = [
    "INTEGRADOR/Pages/Productos/img/cuchillo1.jpg",
    "INTEGRADOR/Pages/Productos/img/cuchillo2.jpg",
    "INTEGRADOR/Pages/Productos/img/cuchillo3.jpg",
    "INTEGRADOR/Pages/Productos/img/cuchillo4.jpg",
    "INTEGRADOR/Pages/Productos/img/cuchillo5.jpg"
  ];

  let indiceActual = 0;

  const contenedor = document.querySelector(".carrusel-imagenes");
  const btnPrev = document.querySelector(".btn-carrusel.prev");
  const btnNext = document.querySelector(".btn-carrusel.next");

  function mostrarImagen(indice) {
    contenedor.innerHTML = "";
    const img = document.createElement("img");
    img.src = imagenes[indice];
    img.alt = `Cuchillo ${indice + 1}`;
    contenedor.appendChild(img);
  }

  btnNext.addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
  });

  btnPrev.addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
  });

  mostrarImagen(indiceActual);
});

