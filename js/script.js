// Mostrar/ocultar información (página de servicios)
const btnInfo = document.getElementById("btnInfo");
if (btnInfo) {
    btnInfo.addEventListener("click", function () {
        const info = document.getElementById("infoExtra");
        info.classList.toggle("oculto");
        this.textContent = info.classList.contains("oculto")
        ? "Ver más información"
        : "Ocultar información";
    });
}

// Validación del formulario (página de reservas)
const formReserva = document.getElementById("formReserva");
if (formReserva) {
    formReserva.addEventListener("submit", function (e) {
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
}
// Menú hamburguesa (móviles)
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");
if (btnMenu && menu) {
    btnMenu.addEventListener("click", function () {
        menu.classList.toggle("abierto");
    });
}