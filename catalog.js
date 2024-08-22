const catalogItems = [
    {
        nombre: "Lápida Clásica",
        imagen: "lapida-clasica.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Moderna",
        imagen: "tumba-moderna.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Elegante",
        imagen: "lapida-elegante.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "tumba-tradicional.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Clásica",
        imagen: "lapida-clasica.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Moderna",
        imagen: "tumba-moderna.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Elegante",
        imagen: "lapida-elegante.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "tumba-tradicional.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Clásica",
        imagen: "lapida-clasica.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Moderna",
        imagen: "tumba-moderna.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Elegante",
        imagen: "lapida-elegante.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "tumba-tradicional.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Clásica",
        imagen: "lapida-clasica.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Moderna",
        imagen: "tumba-moderna.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Elegante",
        imagen: "lapida-elegante.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "tumba-tradicional.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Clásica",
        imagen: "lapida-clasica.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Moderna",
        imagen: "tumba-moderna.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Elegante",
        imagen: "lapida-elegante.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "tumba-tradicional.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Clásica",
        imagen: "lapida-clasica.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Moderna",
        imagen: "tumba-moderna.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Elegante",
        imagen: "lapida-elegante.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "tumba-tradicional.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Clásica",
        imagen: "lapida-clasica.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Moderna",
        imagen: "tumba-moderna.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Elegante",
        imagen: "lapida-elegante.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "tumba-tradicional.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Clásica",
        imagen: "lapida-clasica.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Moderna",
        imagen: "tumba-moderna.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Elegante",
        imagen: "lapida-elegante.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "tumba-tradicional.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Clásica",
        imagen: "lapida-clasica.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Moderna",
        imagen: "tumba-moderna.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Lápida Elegante",
        imagen: "lapida-elegante.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "tumba-tradicional.jpg",
        tipo: "tumba"
    },
];

function renderCatalog(filter) {
    const catalogContainer = document.getElementById('catalog-items');
    catalogContainer.innerHTML = '';  // Limpia el contenedor

    const filteredItems = catalogItems.filter(item => filter === 'all' || item.tipo === filter);

    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'catalog-item';
        itemElement.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
        `;
        catalogContainer.appendChild(itemElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCatalog('all');  // Muestra todos los ítems al cargar la página

    const filterButtons = document.querySelectorAll('#filters button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            renderCatalog(filter);
        });
    });
});
