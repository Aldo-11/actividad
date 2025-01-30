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
function showSection(sectionClass) {
    hideAllSections();
    document.getElementById('welcome-message').style.display = 'none'; // Hide welcome message
    const section = document.querySelectorAll(`.${sectionClass}`);
    section.forEach(product => {
        product.style.display = 'block';
    });
}

// Función para mostrar todos los productos y el mensaje de bienvenida
function showHome() {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = 'block';
    });
    document.getElementById('welcome-message').style.display = 'block'; // Show welcome message
}

// Mostrar todos los productos cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    showHome();
});

// Funcionalidad del botón "Comprar"
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.closest('.product').querySelector('h3').textContent;
        cartItems.push(productName);
        alert(`${productName} añadido al carrito`);
        updateCart();
    });
});

// Función para actualizar el carrito
function updateCart() {
    const cartBtn = document.getElementById('cart-btn');
    cartBtn.textContent = `Carrito (${cartItems.length})`;
}
