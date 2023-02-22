import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './TextField.css';

interface TextFieldProps {
    type: string
}

const TextField:FC = () => {
    return (
        <form className="textfield__form">
            <input type="text" className="textfield" id="user-input" placeholder='Type your message here'/>
            <FontAwesomeIcon icon={faPaperPlane} className="textfield__icon"/>
        </form>
    );
}

export default TextField;