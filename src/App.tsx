import { FC, useRef, useEffect } from 'react';
import './App.css';
import ChatBox from './components/ChatBox/ChatBox';
import TextField from './components/TextField/TextField';
import { useAppSelector } from './redux/hooks';
import Modal from './components/Modal/Modal';

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
      <Modal>
        <h1>Oops!</h1>
        <p>Something went wrong. Please try again later.</p>
      </Modal>

      <header className="app__header">
        <h1 className='app__title'>BackChat</h1>
      </header>  

      <section className="app__messages">
        {chat.map((message, i)=> {
          return message.role  !== "system" && <ChatBox key={`message:${i}`} role={message.role} content={message.content}/>
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
