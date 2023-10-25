// import { useEffect, useState } from 'react';
// import io from 'socket.io-client';
//
// const useWebSocket = () => {
//   const [socket, setSocket] = useState(null);
//
//   useEffect(() => {
//     const socket = io('http://localhost:8080');
//     setSocket(socket);
//
//     return () => {
//       socket.disconnect();
//     };
//   }, []);
//
//   return socket;
// };
//
// export default useWebSocket;

import { useEffect, useState } from 'react';

const useWebSocket = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Replace 'ws://localhost:8080' with the actual URL of your WebSocket server
    const socket = new WebSocket('ws://localhost:8080');
    console.log('so',socket)

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      console.log('Received:', event.data);
      // You can handle the incoming message here
    };

    setSocket(socket);

    // Do not call socket.close() here, let it close when necessary

    // Return a cleanup function to close the socket when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  return socket;
};

export default useWebSocket;

