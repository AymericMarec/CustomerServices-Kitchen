
function validateOrder(tableNumber, type, time,dishes) {
    SendOrder(tableNumber,type,dishes)


    const orderIndex = orders.findIndex(o => 
        o.tableNumber === tableNumber && 
        o.type === type && 
        o.time === time
    );
    
    if (orderIndex !== -1) {
        const orderCard = document.querySelector(`[data-table-number="${tableNumber}"][data-time="${time}"]`);
        if (orderCard) {
            orderCard.style.transition = 'all 0.5s ease';
            orderCard.style.opacity = '0';
            orderCard.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                orders.splice(orderIndex, 1);
                displayOrders();
            }, 500);
        }
    }
    //envoyer a l'api
}


function displayOrders() {
    const ordersContainer = document.getElementById('orders-container');
    ordersContainer.innerHTML = '';

    if (orders.length === 0) {
        ordersContainer.innerHTML = '<div class="no-orders">Aucune commande en attente</div>';
        return;
    }

    // Trier les commandes par heure
    const sortedOrders = [...orders].sort((a, b) => a.time.localeCompare(b.time));

    // Créer les cartes de commande
    sortedOrders.forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.className = 'order-card';
        orderCard.dataset.tableNumber = order.tableNumber;
        orderCard.dataset.time = order.time;
        orderCard.dataset.type = order.type;
        
        const typeLabels = {
            'entrees': 'Entrées',
            'plats': 'Plats',
            'desserts': 'Desserts'
        };

        orderCard.innerHTML = `
            <div class="order-header">
                <div class="order-info">
                    <div class="order-title">
                        <span class="table-number">Table ${order.tableNumber}</span>
                        <span class="order-type">${typeLabels[order.type]}</span>
                    </div>
                    <span class="order-time">${order.time}</span>
                </div>
            </div>
            <div class="order-content">
                ${order.dishes.map(dish => `
                    <div class="order-item">
                        <div class="dish-info">
                            <div class="dish-header">
                                <label>${dish.name}</label>
                                <span class="quantity-badge">x${dish.quantity}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="order-footer">
                <button class="validate-section-btn" onclick="validateOrder(${order.tableNumber}, '${order.type}', '${order.time}','${order.dishes}')">
                    <span class="btn-text">Valider</span>
                    <span class="btn-icon">✓</span>
                </button>
            </div>
        `;
        
        ordersContainer.appendChild(orderCard);
    });
}


displayOrders();