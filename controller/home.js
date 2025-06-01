let orders = [];

const socket = new WebSocket('ws://localhost:8765/ws');

socket.onopen = () => {
  console.log('WebSocket connecté');
};

socket.onmessage = (event) => {
  try {
    const newOrder = JSON.parse(event.data);
    console.log('Nouveau message reçu:', newOrder);

    orders.push(newOrder);

    displayOrders();
  } catch (e) {
    console.error('Erreur parsing JSON reçu:', e);
  }
};

