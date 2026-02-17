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

    const numero = "+56923770543"; // 👈 PON TU NÚMERO CON CÓDIGO CHILE
    const url = `https://wa.me/${numero}?text=${mensaje}`;

    window.open(url, "_blank");
}



const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

let perforaciones = [];
let totalPerforaciones = 0;

function agregarPerforacion(nombre, precio) {
    perforaciones.push({ nombre, precio });
    totalPerforaciones += precio;
    actualizarCarritoPerforaciones();
}

function actualizarCarritoPerforaciones() {
    const lista = document.getElementById("lista-perforaciones");
    const total = document.getElementById("total-perforaciones");

    lista.innerHTML = "";

    perforaciones.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        lista.appendChild(li);
    });

    total.textContent = totalPerforaciones;
}

function enviarPerforaciones() {

    const numeroEnfermera = "+56998920489"; // 🔥 número distinto

    let mensaje = "Hola, quiero agendar las siguientes perforaciones:%0A";

    perforaciones.forEach(item => {
        mensaje += `• ${item.nombre} - $${item.precio}%0A`;
    });

    mensaje += `%0ATotal: $${totalPerforaciones}`;

    window.open(`https://wa.me/${numeroEnfermera}?text=${mensaje}`);
}


<script>
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
</script>