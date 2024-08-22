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
    catalogContainer.innerHTML = '';

    const filteredItems = catalogItems.filter(item => filter === 'all' || item.tipo === filter);

    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'catalog-item';
        itemElement.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" class="catalog-img">
            <h3>${item.nombre}</h3>
        `;
        catalogContainer.appendChild(itemElement);
    });

    const images = document.querySelectorAll('.catalog-img');
    images.forEach(image => {
        image.addEventListener('click', (e) => {
            openModal(e.target.src, e.target.alt);
        });
    });
}

function openModal(src, alt) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCatalog('all'); 
    const filterButtons = document.querySelectorAll('#filters button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            renderCatalog(filter);
        });
    });
});