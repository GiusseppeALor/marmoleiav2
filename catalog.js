document.addEventListener('DOMContentLoaded', function () {
    const items = [
        { id: 1, type: 'Lápida', name: 'Lápida Clásica', img: 'img/Imgcatalogo/1.jpg' },
        { id: 2, type: 'Tumba', name: 'Tumba Doble', img: 'https://via.placeholder.com/150' },
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

