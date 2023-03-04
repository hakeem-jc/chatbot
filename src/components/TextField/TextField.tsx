import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, FormikHelpers } from "formik";
import './TextField.css';
import { ChatType } from '../../interfaces/interfaces';
import { useAppDispatch } from '../../redux/hooks';
import { setChat } from '../../redux/chatSlice';

interface TextFieldProps {
    type: string
}


const TextField:FC = () => {
    const dispatch = useAppDispatch();

    let addMessage = (values:any) => {
        dispatch(setChat({type:ChatType.USER, text:values.message}));
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