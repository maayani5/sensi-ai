const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:8080/api/websocket');

function getRandomStringFromArray(array) {
  // Generate a random index within the array's length
  const randomIndex = Math.floor(Math.random() * array.length);

  // Use the random index to select a random string from the array
  return array[randomIndex];
}

function sendRandomData() {
    const events=['A Fall', 'High Blood Pressure', 'Breath Problems', 'Too Quiet']
    const event = getRandomStringFromArray(events);
  const severity = Math.ceil(Math.random() * 100); // Replace with your data source
    const data={
        severity,
        event
    }
  socket.send(JSON.stringify(data));
}

setInterval(() => {
  sendRandomData();
}, 1000);

