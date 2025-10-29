
document.addEventListener("DOMContentLoaded", () => {
const contenedor = document.querySelector('.carrusel-imagenes');
const imagenes = document.querySelectorAll('.carrusel-imagenes img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


let indice = 0;


function mostrarImagen() {
  contenedor.style.transform = `translateX(${-indice * 100}%)`;
}

next.addEventListener('click', () => {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen();
});

prev.addEventListener('click', () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen();
});


setInterval(() => {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen();
}, 5000);

//Validaciones

function validarForm() {
  let nombre = document.forms["formContacto"]["nombre"].value;
  let email = document.forms["formContacto"]["email"].value;
  let telefono = document.forms["formContacto"]["telefono"].value;
  let mensaje = document.forms["formContacto"]["mensaje"].value;

if (nombre === "") {
    alert("Por favor, complete su nombre.");
    return false;
  }

  if (email === "") {
    alert("Por favor, ingrese su correo electrónico.");
    return false;
  }

  
  let regexEmail = /^[\w.-]+@[\w.-]+\.\w{2,4}$/;
  if (!regexEmail.test(email)) {
    alert("El correo electrónico no es válido.");
    return false;
  }

  if (telefono === "") {
    alert("Por favor, ingrese su número de teléfono.");
    return false;
  }

  let regexTel = /^[0-9]{8,15}$/;
  if (!regexTel.test(telefono)) {
    alert("El teléfono debe tener entre 8 y 15 números.");
    return false;
  }

  if (mensaje === "") {
    alert("Por favor, escriba un mensaje.");
    return false;
  }

  alert("Formulario enviado correctamente ");
  return true; 
}})


 /* const form = document.getElementById("form-contacto");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = "";


      const errores = [];

     // Validaciones
      if (nombre === "") errores.push("El nombre es obligatorio.");
      if (!regexEmail.test(email)) errores.push("El correo electrónico no es válido.");
      if (!regexTel.test(telefono)) errores.push("El teléfono debe tener entre 8 y 15 dígitos.");

     
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
}) */
