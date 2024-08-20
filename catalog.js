document.addEventListener('DOMContentLoaded', function () {
    const items = [
        { id: 1, type: 'Lápida', name: 'Lápida Clásica', img: 'img/Imgcatalogo/1.jpg' },
        { id: 2, type: 'Tumba', name: 'Tumba Doble', img: 'img/Imgcatalogo/2.jpg' },
        { id: 3, type: 'Lápida', name: 'Lápida Clásica', img: 'img/Imgcatalogo/3.jpg' },
        { id: 4, type: 'Tumba', name: 'Tumba Doble', img: 'img/Imgcatalogo/4.jpg' },
        { id: 5, type: 'Lápida', name: 'Lápida Clásica', img: 'img/Imgcatalogo/5.jpg' },
        { id: 6, type: 'Tumba', name: 'Tumba Doble', img: 'img/Imgcatalogo/6.jpg' },
        { id: 7, type: 'Lápida', name: 'Lápida Clásica', img: 'img/Imgcatalogo/7.jpg' },
        { id: 8, type: 'Tumba', name: 'Tumba Doble', img: 'img/Imgcatalogo/8.jpg' },
        { id: 9, type: 'Lápida', name: 'Lápida Clásica', img: 'img/Imgcatalogo/9.jpg' },
        { id: 10, type: 'Tumba', name: 'Tumba Doble', img: 'img/Imgcatalogo/10.jpg' },
        { id: 11, type: 'Lápida', name: 'Lápida Clásica', img: 'img/Imgcatalogo/11.jpg' },
        { id: 12, type: 'Tumba', name: 'Tumba Doble', img: 'img/Imgcatalogo/12.jpg' },
        { id: 13, type: 'Lápida', name: 'Lápida Clásica', img: 'img/Imgcatalogo/13.jpg' },
        { id: 14, type: 'Tumba', name: 'Tumba Doble', img: 'img/Imgcatalogo/14.jpg' },
        { id: 15, type: 'Lápida', name: 'Lápida Clásica', img: 'img/Imgcatalogo/15.jpg' },
        { id: 16, type: 'Tumba', name: 'Tumba Doble', img: 'img/Imgcatalogo/16.jpg' },
        { id: 17, type: 'Lápida', name: 'Lápida Clásica', img: 'img/Imgcatalogo/17.jpg' },
        { id: 18, type: 'Tumba', name: 'Tumba Doble', img: 'img/Imgcatalogo/18.jpg' },
        { id: 19, type: 'Lápida', name: 'Lápida Clásica', img: 'img/Imgcatalogo/19.jpg' },
        { id: 20, type: 'Tumba', name: 'Tumba Doble', img: 'img/Imgcatalogo/20.jpg' },
        // Añadir más ítems...
    ];

    const catalogItemsContainer = document.getElementById('catalog-items');
    const filterSelect = document.getElementById('filter');

    function renderItems(filter) {
        catalogItemsContainer.innerHTML = '';
        const filteredItems = filter === 'all' ? items : items.filter(item => item.type === filter);
        filteredItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'catalog-item';
            itemElement.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="img-fluid">
                <p>${item.name}</p>
            `;
            catalogItemsContainer.appendChild(itemElement);
        });
    }

    filterSelect.addEventListener('change', (e) => {
        renderItems(e.target.value);
    });

    renderItems('all');
});

