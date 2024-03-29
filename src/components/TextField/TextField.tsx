import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Formik } from "formik";
import './TextField.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setChat } from '../../redux/chatSlice';
import axios from 'axios';
import { setIsOpen } from '../../redux/modalSlice';

const TextField:FC = () => {
    const dispatch = useAppDispatch();
    const { chat } = useAppSelector(state => state);

    let addMessage = (values:any) => {
        let payload = { messages: [...chat,{role:"user", content:values.message}] };
        dispatch(setChat({role:"user", content:values.message}));

        axios.post(`${import.meta.env.VITE_SERVER}/generate`, payload)
        .then((res)=>{
            dispatch(setChat({role:"assistant", content:res.data.result}));
            }).catch((err)=>{
                console.error(err);
                dispatch(setIsOpen(true));
            });
        }

    return (
        <Formik
            initialValues={{message:''}}
            onSubmit={(values, {resetForm})=>{
                addMessage(values);
                resetForm();
            }}
        >
             {({ values, handleChange, handleBlur, handleSubmit, resetForm }) => (
            <form className="textfield__form" onSubmit={handleSubmit} >
                <input 
                    type="text" 
                    className="textfield" 
                    id="message" 
                    placeholder='Type your message here' 
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete='off'
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