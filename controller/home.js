let orders = [];

const socket = new WebSocket('ws://localhost:8765/ws');

socket.onopen = () => {
  console.log('WebSocket connecté');
};

socket.onmessage = (event) => {
  try {
    const newOrder = JSON.parse(event.data);

    orders.push(newOrder[0]);
    displayOrders();
  } catch (e) {
    console.error('Erreur parsing JSON reçu:', e);
  }
};

