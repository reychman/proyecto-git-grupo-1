
document.getElementById("btnInfo").addEventListener("click", function () {
    const info = document.getElementById("infoExtra");
    info.classList.toggle("oculto");
    this.textContent = info.classList.contains("oculto") ? "Ver más información" : "Ocultar información";
});

document.getElementById("formReserva").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const fecha = document.getElementById("fecha").value;
    const mensaje = document.getElementById("mensaje");

    if (nombre === "" || correo === "" || fecha === "") {
        mensaje.style.color = "red";
        mensaje.textContent = "Por favor completa todos los campos.";
    } else {
        mensaje.style.color = "green";
        mensaje.textContent = "¡Reserva enviada correctamente, " + nombre + "!";
        this.reset();
    }
});