const catalogItems = [

    // Lapidas
    {
        nombre: "Lápida",
        imagen: "img/Imgcatalogo/1.jpg",
        tipo: "lapida"
    },
    {
        nombre: "Lapida",
        imagen: "img/Imgcatalogo/2.jpg",
        tipo: "lapida"
    },

    // Tumbas
    {
        nombre: "Tumba",
        imagen: "img/Imgcatalogo/1.jpg",
        tipo: "tumba"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "img/Imgcatalogo/1.jpg",
        tipo: "tumba"
    },

    // Ovalines
    {
        nombre: "Lápida Clásica",
        imagen: "img/Imgcatalogo/1.jpg",
        tipo: "ovalin"
    },
    {
        nombre: "Tumba Moderna",
        imagen: "img/Imgcatalogo/1.jpg",
        tipo: "ovalin"
    },

    // Adornos
    {
        nombre: "Lápida Elegante",
        imagen: "img/Imgcatalogo/1.jpg",
        tipo: "adorno"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "img/Imgcatalogo/1.jpg",
        tipo: "adorno"
    },
    // Mousoleos
    {
        nombre: "mousoleo 1",
        imagen: "img/Imgcatalogo/1.jpg",
        tipo: "mousoleo"
    },
    {
        nombre: "mousoleo 2",
        imagen: "img/Imgcatalogo/1.jpg",
        tipo: "mousoleo"
    },
    // Tableros para Cocina
    {
        nombre: "Lápida Elegante",
        imagen: "img/Imgcatalogo/1.jpg",
        tipo: "cocina"
    },
    {
        nombre: "Tumba Tradicional",
        imagen: "img/Imgcatalogo/1.jpg",
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
            <img src="${item.imagen}" alt="${item.nombre}" class="catalog-img">
            <h3>${item.nombre}</h3>
        `;
        catalogContainer.appendChild(itemElement);
    });

    // Agregar eventos de clic a las imágenes para abrir el modal
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

    // Cerrar el modal al hacer clic en el botón de cierre
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
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

const carousel = document.querySelector('#carouselExample');
const carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 3000,
    ride: 'carousel'
});
