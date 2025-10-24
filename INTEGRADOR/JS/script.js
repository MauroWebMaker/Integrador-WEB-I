
const imagenes = [
  "INTEGRADOR/Imagenes/cuchillo1.jpg",
  "INTEGRADOR/Imagenes/cuchillo2.jpg",
  "INTEGRADOR/Imagenes/cuchillo3.jpg",
  "INTEGRADOR/Imagenes/cuchillo4.jpg"
];

// Variables para el control del carrusel
let indice = 0;
const img = document.getElementById("imagen-carrusel");
const btnAnt = document.getElementById("anterior");
const btnSig = document.getElementById("siguiente");

// --- Función para mostrar la imagen actual ---
function mostrarImagen() {
  img.src = imagenes[indice];
}

// --- Botón siguiente ---
btnSig.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length; // pasa al siguiente, vuelve al primero si llega al final
  mostrarImagen();
});

// --- Botón anterior ---
btnAnt.addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length; // vuelve al último si está en el primero
  mostrarImagen();
});

// --- Rotación automática del carrusel cada 3 segundos ---
setInterval(() => {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen();
}, 3000);

// FIN DEL CARRUSEL 



// VALIDACIÓN DEL FORMULARIO DE CONTACTO


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      const resultado = document.getElementById("resultado");
      resultado.innerHTML = "";

      // --- Expresiones regulares ---
      const regexEmail = /^[\w.-]+@[\w.-]+\.\w{2,4}$/;
      const regexTel = /^[0-9]{8,15}$/;

      const errores = [];

      // --- Validaciones ---
      if (nombre === "") errores.push("El nombre es obligatorio.");
      if (!regexEmail.test(email)) errores.push("El correo electrónico no es válido.");
      if (!regexTel.test(telefono)) errores.push("El teléfono debe tener entre 8 y 15 dígitos.");

      // --- Mostrar errores o exito ---
      if (errores.length > 0) {
        errores.forEach(err => {
          const p = document.createElement("p");
          p.textContent = err;
          p.style.color = "red";
          resultado.appendChild(p);
        });
      } else {
        const exito = document.createElement("div");
        exito.style.color = "green";
        exito.innerHTML = `
          <h3>Datos enviados correctamente</h3>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Mensaje:</strong> ${mensaje}</p>
        `;
        resultado.appendChild(exito);

        form.reset();
      }
    });
  }
});
