document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const cuchillo = document.getElementById("cuchillo-interes").value;

    const resultadoDiv = document.getElementById("resultado");

    document.querySelectorAll(".error").forEach(span => span.textContent = "");
    resultadoDiv.innerHTML = "";

    let hayErrores = false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^[0-9\s\-]{7,15}$/;

    if (nombre === "") {
        document.getElementById("error-nombre").textContent = "El nombre es obligatorio.";
        hayErrores = true;
    } else if (nombre.length > 30) {
        document.getElementById("error-nombre").textContent = "Máximo 30 caracteres.";
        hayErrores = true;
    }

    if (email === "") {
        document.getElementById("error-email").textContent = "El email es obligatorio.";
        hayErrores = true;
    } else if (!emailRegex.test(email)) {
        document.getElementById("error-email").textContent = "Formato de email inválido.";
        hayErrores = true;
    }

    if (telefono === "") {
        document.getElementById("error-telefono").textContent = "El teléfono es obligatorio.";
        hayErrores = true;
    } else if (!telefonoRegex.test(telefono)) {
        document.getElementById("error-telefono").textContent = "Solo números, espacios o guiones (7 a 15 caracteres).";
        hayErrores = true;
    }

    if (cuchillo === "") {
        document.getElementById("error-cuchillo").textContent = "Seleccioná un cuchillo.";
        hayErrores = true;
    }

    if (!hayErrores) {
        const datos = document.createElement("div");
        datos.innerHTML = `
      <h4 style="color:green">Datos enviados correctamente:</h4>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Cuchillo de interés:</strong> ${cuchillo}</p>
    `;
        resultadoDiv.appendChild(datos);
        document.getElementById("form-contacto").reset();
    }
});
