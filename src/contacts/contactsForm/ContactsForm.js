import React from 'react';
import s from './ContactsForm.module.css'

const ContactsForm = () => {
    return (
            <form action="" className={s.formContainer}>
                <input type="text" placeholder={'Name'}/>
                <input type="text" placeholder={'E-mail'}/>
                <textarea name="" id="" cols="30" rows="10" placeholder={'Your message'}/>
                <button className={s.button}>send</button>

            </form>
    );
};

export default ContactsForm;