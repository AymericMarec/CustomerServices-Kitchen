let orders = [];

const socket = new WebSocket('ws://localhost:8765/ws');

socket.onopen = () => {
  console.log('WebSocket connecté');
};

socket.onmessage = (event) => {
  try {
    console.log(event.data)
    const newOrder = JSON.parse(event.data);
    console.log('Nouveau message reçu:', newOrder);

    orders.push(newOrder[0]);
    console.log(orders)
    displayOrders();
  } catch (e) {
    console.error('Erreur parsing JSON reçu:', e);
  }
};

