import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Formik } from "formik";
import './TextField.css';
import { ChatType } from '../../interfaces/interfaces';
import { useAppDispatch } from '../../redux/hooks';
import { setChat } from '../../redux/chatSlice';


const TextField:FC = () => {
    const dispatch = useAppDispatch();

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

    let addMessage = (values:any) => {
        dispatch(setChat({type:ChatType.USER, text:values.message}));
        setTimeout(randomMessage,500);
    }
    
    
    return (
        <Formik
            initialValues={{message:''}}
            onSubmit={addMessage}
        >
             {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form className="textfield__form" onSubmit={handleSubmit} >
                <input 
                    type="text" 
                    className="textfield" 
                    id="message" 
                    placeholder='Type your message here' 
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <button type="submit" className="textfield__submit">
                    <FontAwesomeIcon icon={faPaperPlane} className="textfield__icon"/>
                </button>
            </form>
            )}
        </Formik>
    );
}

export default TextField;