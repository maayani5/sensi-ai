import Head from 'next/head';
import useSocket from "@/hooks/useSocket";
import SeverityChart from "@/components/chart/chart";

export default function Home() {

    const {messages} = useSocket();


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
            <SeverityChart data={messages}/>
        </div>
    </>
  )
}