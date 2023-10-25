import Head from 'next/head';
import {useEffect, useState} from "react";
import io from "socket.io-client";

export default function Home() {
     const [messages, setMessages] = useState([]);
  const socket = io('ws://localhost:8080');

  useEffect(() => {
    socket.onopen = () => {
      console.log('WebSocket connection is open');
    };

    socket.onmessage = (event) => {
        console.log(event)
      // const messageData = JSON.parse(event.data);
      // console.log(event);
      // setMessages((prevMessages) => [...prevMessages, messageData]);
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

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);




  return (
    <>
      <Head>
        <title>Sensi Ai</title>
        <meta
          name='description'
          content='Task for the great company Sensi-Ai'
        />
      </Head>
        <div>
            <h1>Real-Time Device Monitoring Dashboard</h1>
            <p>Here you can view the status of a single IoT device.</p>
            {messages.map(msg => <div>{msg.event}</div>)}
        </div>
    </>
  )
}