import { FC } from 'react';
import './App.css';
import ChatBox from './components/ChatBox/ChatBox';
import TextField from './components/TextField/TextField';
import { useAppSelector } from './redux/hooks';

const App:FC = () => {
  const { chat } = useAppSelector(state => state);

  return (
    <main className="app">
      <header className="app__header">
        <h1 className='app__title'>ChatBot</h1>
      </header>  

      <section className="app__container">
        <div className="app__text">
          {chat.map((message, i)=> {
            return <ChatBox type={message.type} text={message.text}/>
          })}
        </div>

        <footer className='app__footer' >
          <TextField />
          <p className='app__footer-text'>© 2023 Hakeem Clarke</p>
        </footer>
      </section>
    </main>
  )
}

export default App;
