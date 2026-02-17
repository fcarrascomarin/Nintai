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

    const numero = "56923770543"; // 👈 PON TU NÚMERO CON CÓDIGO CHILE
    const url = `https://wa.me/${numero}?text=${mensaje}`;

    window.open(url, "_blank");
}

<script>
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
</script>

