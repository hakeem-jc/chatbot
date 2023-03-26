import { FC } from 'react';
import './ChatBox.css';
import user from '../../assets/user.png';
import avatar from '../../assets/bot.png';
import { ChatType } from '../../interfaces/interfaces';

interface ChatBoxProps {
    role: string,
    content: string
}
 
const ChatBox:FC<ChatBoxProps> = (props) => {

    return (
    <div className={props.role == ChatType.BOT ? 'chatbox chatbox--bot':'chatbox'}>
        <div className='chatbox__text-container'>
            <img src={props.role === ChatType.BOT ? avatar : user}
                className='chatbox__image' alt='User Icon'
            />

            <p className='chatbox__text'>{props.content}</p>
        </div>
        
    </div>)
}

export default ChatBox;