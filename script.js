// ... existing code ...
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

// Ajout de la commande de test à la liste des commandes
orders.push(testOrder);
// ... existing code ... 