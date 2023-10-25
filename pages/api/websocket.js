const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 }); // Set the port you want to use

server.on('connection', (socket) => {
  console.log('Client connected');

  setInterval(() => {
      const data = getRandomData()
    socket.send(data);
  }, 2000)



  socket.on('close', () => {
    console.log('Client disconnected');
  });
});


console.log('WebSocket server is running on port 8080');

function getRandomData() {
    const events=['A Fall', 'High Blood Pressure', 'Breath Problems', 'Too Quiet'];
    const randomIndex = Math.floor(Math.random() * events.length);
    const event = events[randomIndex];

  const severity = Math.random() * 10;
     return JSON.stringify({
        severity: Math.floor(severity),
        event: event
    })
}

