import { FC, useRef, useEffect } from 'react';
import './App.css';
import ChatBox from './components/ChatBox/ChatBox';
import TextField from './components/TextField/TextField';
import { useAppSelector } from './redux/hooks';

const App:FC = () => {
  const { chat } = useAppSelector(state => state);
  const anchor = useRef<HTMLSpanElement>(null);
  useEffect(() => { 
    if (anchor.current) {
      anchor.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chat]);

  return (
    <main className="app">
      <header className="app__header">
        <h1 className='app__title'>ChatBot</h1>
      </header>  

      <section className="app__messages">
        {chat.map((message, i)=> {
          return <ChatBox type={message.type} text={message.text}/>
        })}
        <span ref={anchor}></span>
      </section>

      <footer className='app__footer' >
          <TextField />
          <p className='app__footer-text'>© 2023 Hakeem Clarke</p>
        </footer>
    </main>
  )
}

export default App;
