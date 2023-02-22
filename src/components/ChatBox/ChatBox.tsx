import { FC } from 'react';
import './ChatBox.css';
import user from '../../assets/user.png';
import avatar from '../../assets/bot.png';
import { ChatType } from '../../interfaces/interfaces';

interface ChatBoxProps {
    type: string
}
 
const ChatBox:FC<ChatBoxProps> = (props) => {

    return (
    <div className={props.type == ChatType.BOT ? 'chatbox chatbox--bot':'chatbox'}>
        <div className='chatbox__text-container'>
            <img src={props.type === ChatType.BOT ? avatar : user}
                className='chatbox__image' alt='User Icon'
            />

            <p className='chatbox__text'>Lorem ipsum puta madre</p>
        </div>
        
    </div>)
}

export default ChatBox;