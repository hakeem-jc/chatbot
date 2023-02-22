import './ChatBox.css';
import user from '../../assets/user.jpg';
import avatar from '../../assets/avatar.png';

const ChatBox = () => {
    return (
    <div className='chatbox'>
        <img src={avatar} className='chatbox__image' alt='User Icon'/>
        <p>Lorem ipsum puta madre</p>
    </div>)
}

export default ChatBox;