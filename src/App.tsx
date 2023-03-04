import { FC, useEffect } from 'react';
import './App.css';
import ChatBox from './components/ChatBox/ChatBox';
import TextField from './components/TextField/TextField';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { ChatType } from './interfaces/interfaces';
import { setChat } from './redux/chatSlice';

const App:FC = () => {
  const dispatch = useAppDispatch();
  const { chat } = useAppSelector(state => state);

  const bot_messages = [
    {type:ChatType.BOT, text:'I\'m Bender, baby! Oh god, please insert liquor!'},
    {type:ChatType.BOT, text:'Hey, sexy mama. Wanna kill all humans?'},
    {type:ChatType.BOT, text:'I hope he didn\'t die. Unless he left a note naming me his successor, then I hope he did die.'},
    {type:ChatType.BOT, text:'I\'m so embarrassed. I wish everybody else was dead'},
    {type:ChatType.BOT, text:'My story is a lot like yours, only more interesting \'cause it involves robots.'},
    {type:ChatType.BOT, text:'This is the worst kind of discrimination there is: the kind against me!'},
    {type:ChatType.BOT, text:'Anything less than immortality is a complete waste of time.'},
  ];

  const randomMessage = () => {
    let option = Math.floor(Math.random() * bot_messages.length);
    dispatch(setChat(bot_messages[option]))
  }

  useEffect(() => {
    // If chat length is even then the user just said something
    if (chat.length % 2 === 0) setTimeout(randomMessage,500);
  },[dispatch,chat]);

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

export default App
