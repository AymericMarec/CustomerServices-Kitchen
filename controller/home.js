let orders = [];

const socket = new WebSocket('ws://localhost:8765/ws');

socket.onopen = () => {
  socket.send(JSON.stringify({ type: 'register', role: 'kitchen' }));
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

