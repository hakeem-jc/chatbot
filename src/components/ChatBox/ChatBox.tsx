import { FC } from 'react';
import './ChatBox.css';
import user from '../../assets/user.png';
import avatar from '../../assets/avatar.png';

interface ChatBoxProps {
    type: string
}
 
const ChatBox:FC<ChatBoxProps> = (props) => {

    return (
    <div className={props.type =='bot' ? 'chatbox chatbox--bot':'chatbox'}>
        <img src={props.type === "bot" ? avatar : user}
            className='chatbox__image' alt='User Icon'
        />
        
        <p>Lorem ipsum puta madre</p>
    </div>)
}

export default ChatBox;