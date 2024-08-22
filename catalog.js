const catalogItems = [

    // Lapidas
    {
        nombre: "Lápida Clásica",
        imagen: "lapida-clasica.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Tumba Moderna",
        imagen: "tumba-moderna.jpg",
        tipo: "lapida"
    },

    // Tumbas
    {
        nombre: "Lápida Elegante",
        imagen: "lapida-elegante.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "tumba-tradicional.jpg",
        tipo: "tumba"
    },

    // Ovalines
    {
        nombre: "Lápida Clásica",
        imagen: "lapida-clasica.jpg",
        tipo: "ovalin"
    },
    {
        nombre: "Tumba Moderna",
        imagen: "tumba-moderna.jpg",
        tipo: "ovalin"
    },

    // Adornos
    {
        nombre: "Lápida Elegante",
        imagen: "lapida-elegante.jpg",
        tipo: "adorno"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "tumba-tradicional.jpg",
        tipo: "adorno"
    },
    // Mousoleos
    {
        nombre: "mousoleo 1",
        imagen: "lapida-clasica.jpg",
        tipo: "mousoleo"
    },
    {
        nombre: "mousoleo 2",
        imagen: "tumba-moderna.jpg",
        tipo: "mousoleo"
    },
    // Tableros para Cocina
    {
        nombre: "Lápida Elegante",
        imagen: "lapida-elegante.jpg",
        tipo: "cocina"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "tumba-tradicional.jpg",
        tipo: "cocina"
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
