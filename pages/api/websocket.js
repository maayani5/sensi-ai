const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 }); // Set the port you want to use

server.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
    console.log(`Received: ${message}`);
    // You can handle the incoming message and send a response here
    // For example:
    // socket.send('Received your message: ' + message);
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on port 8080');