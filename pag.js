// Array para almacenar los nombres de los productos agregados
let cartItems = [];

// Función para ocultar todas las categorías de productos
function hideAllSections() {
    const sections = document.querySelectorAll('.product');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}

// Función para mostrar solo la sección seleccionada
function showSection(sectionId) {
    hideAllSections();
    
    const section = document.querySelectorAll(`#${sectionId}`);
    section.forEach(product => {
        product.style.display = 'block';
    });
}

// Mostrar la sección de Balones cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    showSection('balones');
});

// Funcionalidad del botón "Comprar"
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.closest('.product').querySelector('h3').textContent; // Obtener el nombre del producto
        cartItems.push(productName); // Añadir el nombre del producto al carrito
        alert(`${productName} añadido al carrito`);

        // Actualizar el contador del carrito
        updateCart();
    });
});

// Función para actualizar el carrito
function updateCart() {
    const cartBtn = document.getElementById('cart-btn');
    const cartCount = cartItems.length;
    cartBtn.textContent = `Carrito (${cartCount})`; // Actualiza el texto del botón
}

// Mostrar el contenido del carrito cuando se haga clic en el botón
const cartBtn = document.getElementById('cart-btn');
cartBtn.addEventListener('click', () => {
    if (cartItems.length > 0) {
        alert("Productos en tu carrito:\n" + cartItems.join('\n')); // Muestra la lista de productos
    } else {
        alert("Tu carrito está vacío.");
    }
});
