let orders = [];

// Ajout d'une commande de test
const testOrder = {
    id: 'test-123',
    group: 'Groupe Test',
    time: '12:30',
    items: [
        {
            name: 'Salade César',
            description: 'Laitue romaine, croûtons, parmesan, sauce césar',
            category: 'entree'
        },
        {
            name: 'Soupe à l\'oignon',
            description: 'Oignons caramélisés, croûtons, fromage gratiné',
            category: 'entree'
        },
        {
            name: 'Steak Frites',
            description: 'Steak de bœuf 250g, frites maison, sauce béarnaise',
            category: 'plat'
        },
        {
            name: 'Poulet Rôti',
            description: 'Cuisse de poulet rôtie, purée maison, légumes de saison',
            category: 'plat'
        },
        {
            name: 'Tiramisu',
            description: 'Biscuits imbibés de café, mascarpone, cacao',
            category: 'dessert'
        },
        {
            name: 'Crème Brûlée',
            description: 'Crème vanille, caramel croquant',
            category: 'dessert'
        }
    ]
};


orders.push(testOrder);

function displayOrders() {
    const ordersContainer = document.getElementById('orders-container');
    ordersContainer.innerHTML = '';

    if (orders.length === 0) {
        ordersContainer.innerHTML = '<div class="no-orders">Aucune commande en attente</div>';
        return;
    }

    const groupedOrders = {
        entree: [],
        plat: [],
        dessert: []
    };

    orders.forEach(order => {
        order.items.forEach(item => {
            if (!groupedOrders[item.category].includes(order.id)) {
                groupedOrders[item.category].push(order.id);
            }
        });
    });

    Object.entries(groupedOrders).forEach(([category, orderIds]) => {
        orderIds.forEach(orderId => {
            const order = orders.find(o => o.id === orderId);
            const orderCard = document.createElement('div');
            orderCard.className = `order-card ${category}`;
            orderCard.dataset.orderId = orderId;
            
            const items = order.items.filter(item => item.category === category);
            
            orderCard.innerHTML = `
                <div class="order-header">
                    <h3>Commande #${order.id}</h3>
                    <span class="order-time">${order.time}</span>
                </div>
                <div class="order-items">
                    ${items.map(item => `
                        <div class="order-item">
                            <label>${item.name}</label>
                            <div class="item-description">${item.description}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="order-actions">
                    <button class="validate-btn" onclick="validateOrder('${order.id}', '${category}')">Valider</button>
                </div>
            `;
            
            ordersContainer.appendChild(orderCard);
        });
    });
}

function validateOrder(orderId, category) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        const orderCard = document.querySelector(`[data-order-id="${orderId}"].${category}`);
        if (orderCard) {
            // remove card
            orderCard.style.transition = 'opacity 0.5s ease';
            orderCard.style.opacity = '0';
            
            setTimeout(() => {
                // display the others cards
                order.items = order.items.filter(item => item.category !== category);
                if (order.items.length === 0) {
                    orders = orders.filter(o => o.id !== orderId);
                }
                displayOrders();
            }, 500);
        }
    }
}
displayOrders();