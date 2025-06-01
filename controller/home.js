let orders = [];

//recuperer depuis l'api 
const testOrders = [
    // Table 1
    {
        tableNumber: 1,
        type: 'entrees',
        time: '12:30',
        dishes: [
            {
                name: 'Salade César',
                description: '',
                quantity: 2
            }
        ]
    },
    {
        tableNumber: 1,
        type: 'plats',
        time: '12:35',
        dishes: [
            {
                name: 'Steak Frites',
                description: '',
                quantity: 1
            }
        ]
    },
    {
        tableNumber: 1,
        type: 'desserts',
        time: '12:40',
        dishes: [
            {
                name: 'Tiramisu',
                description: '',
                quantity: 2
            }
        ]
    },
    {
        tableNumber: 2,
        type: 'entrees',
        time: '12:45',
        dishes: [
            {
                name: 'Soupe à l\'oignon',
                description: '',
                quantity: 3
            }
        ]
    },
    {
        tableNumber: 2,
        type: 'plats',
        time: '12:50',
        dishes: [
            {
                name: 'Poulet Rôti',
                description: '',
                quantity: 2
            }
        ]
    },
    {
        tableNumber: 2,
        type: 'desserts',
        time: '12:55',
        dishes: [
            {
                name: 'Crème Brûlée',
                description: '',
                quantity: 1
            }
        ]
    },
    // Table 3
    {
        tableNumber: 3,
        type: 'entrees',
        time: '13:00',
        dishes: [
            {
                name: 'Terrine de Foie Gras',
                description: '',
                quantity: 2
            },
            {
                name: 'Carpaccio de Bœuf',
                description: '',
                quantity: 1
            }
        ]
    },
    {
        tableNumber: 3,
        type: 'plats',
        time: '13:05',
        dishes: [
            {
                name: 'Risotto aux Champignons',
                description: '',
                quantity: 2
            },
            {
                name: 'Filet de Bar',
                description: '',
                quantity: 1
            }
        ]
    },
    {
        tableNumber: 3,
        type: 'desserts',
        time: '13:10',
        dishes: [
            {
                name: 'Mousse au Chocolat',
                description: '',
                quantity: 2
            },
            {
                name: 'Tarte Tatin',
                description: '',
                quantity: 1
            }
        ]
    }
];

orders = testOrders
// connexion ws , a chaque fois qu'on recoit qlc , on ajoute dans orders , et on appelle displayOrders
