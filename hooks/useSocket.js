import {useState,useEffect} from "react";
function UseSocket() {
    const socket = new WebSocket('ws://localhost:8080');
    const [messages, setMessages] = useState([]);


  useEffect(() => {
    socket.onopen = () => {
      console.log('WebSocket connection is open');
    };

    socket.onmessage = (event) => {
       const message = event.data;
        const newMessage = JSON.parse(message);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket.onclose = (event) => {
      if (event.wasClean) {
        console.log(`WebSocket connection closed cleanly, code=${event.code}, reason=${event.reason}`);
      } else {
        console.error('WebSocket connection abruptly closed');
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error.message);
    };

  }, []);

  return {
      messages
  }
}

export default UseSocket;

