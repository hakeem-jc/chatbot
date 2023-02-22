import { useState } from 'react';
import './App.css';
import ChatBox from './components/ChatBox/ChatBox';
import TextField from './components/TextField/TextField';

const App = () => {

  return (
    <main className="app">
      <header className="app__header">
        <h1 className='app__title'>ChatBot</h1>
      </header>  

      <section className="app__container">
        <div className="app__text">
          <ChatBox />
          <ChatBox />
        </div>

        <TextField />


      </section>
    </main>
  )
}

export default App
