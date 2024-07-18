import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

export default function Home() {


  wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });

    ws.send('something');
  });

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
