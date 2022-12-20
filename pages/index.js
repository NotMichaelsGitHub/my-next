import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
//import '../styles/react-remake.css';

function App() {
  return (
    <div className='App'>
      <Head>
        <title>Michael's Website</title>
      </Head>
      <header className='App-header'>
        <img src={'https://i.imgur.com/ID8ayyi.jpg'} className='App-logo'/>
        <p className='App-text'>
            Welcome to michaeldipaolo.com 
        </p>
        <Link href='/resume'>
          <a className='App-link'>Continue to my resume</a>
        </Link>
      </header>
    </div>
  );
}

export default App;