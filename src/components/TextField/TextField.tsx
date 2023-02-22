import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './TextField.css';


const TextField = () => {
    return (
        <form className="textfield__form">
            <input type="text" className="textfield" id="user-input"/>
            <FontAwesomeIcon icon={faPaperPlane} className="textfield__icon"/>
        </form>
    );
}

export default TextField;