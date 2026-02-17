/* =========================
   CARRITO JOYAS
========================= */

let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");

    if (!lista || !totalElemento) return;

    lista.innerHTML = "";

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio}
            <button onclick="eliminarProducto(${index})">X</button>
        `;
        lista.appendChild(li);
    });

    totalElemento.textContent = total;
}

function eliminarProducto(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function enviarWhatsApp() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "Hola! Quiero comprar:%0A";

    carrito.forEach(producto => {
        mensaje += `- ${producto.nombre} ($${producto.precio})%0A`;
    });

    mensaje += `%0ATotal: $${total}`;

    const numero = "56923770543"; // SIN +
    const url = `https://wa.me/${numero}?text=${mensaje}`;

    window.open(url, "_blank");
}



/* =========================
   CARRITO PERFORACIONES
========================= */

let perforaciones = [];
let totalPerforaciones = 0;

function agregarPerforacion(nombre, precio) {
    perforaciones.push({ nombre, precio });
    totalPerforaciones += precio;
    actualizarCarritoPerforaciones();
}

function actualizarCarritoPerforaciones() {
    const lista = document.getElementById("lista-perforaciones");
    const totalElemento = document.getElementById("total-perforaciones");

    if (!lista || !totalElemento) return;

    lista.innerHTML = "";

    perforaciones.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.nombre} - $${item.precio}
            <button onclick="eliminarPerforacion(${index})">X</button>
        `;
        lista.appendChild(li);
    });

    totalElemento.textContent = totalPerforaciones;
}

function eliminarPerforacion(index) {
    totalPerforaciones -= perforaciones[index].precio;
    perforaciones.splice(index, 1);
    actualizarCarritoPerforaciones();
}

function enviarPerforaciones() {
    if (perforaciones.length === 0) {
        alert("No hay perforaciones seleccionadas.");
        return;
    }

    let mensaje = "Hola, quiero agendar las siguientes perforaciones:%0A";

    perforaciones.forEach(item => {
        mensaje += `• ${item.nombre} - $${item.precio}%0A`;
    });

    mensaje += `%0ATotal: $${totalPerforaciones}`;

    const numeroEnfermera = "56998920489"; // SIN +
    window.open(`https://wa.me/${numeroEnfermera}?text=${mensaje}`, "_blank");
}



/* =========================
   MENU HAMBURGUESA
========================= */

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navMenu");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});


