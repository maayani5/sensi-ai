import Head from 'next/head';
import {useEffect, useState} from "react";
import useWebSocket from "@/hooks/useWebSocket";

export default function Home() {
    const [message, setMessage] = useState('');
      const socket = useWebSocket();

      useEffect(() => {
        if (socket) {
          socket.on('message', (data) => {
              console.log(data)
            // setMessage(data);
          });
        }
      }, [socket]);

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
            <p>Received message: {message}</p>
        </div>
    </>
  )
}