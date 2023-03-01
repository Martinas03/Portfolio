import React from 'react';
import s from './ContactsForm.module.css'

const ContactsForm = () => {
    return (
        <div className={s.formBlock}>
            <form action="" className={s.formContainer}>
                <input type="text" placeholder={'Name'}/>
                <input type="text" placeholder={'E-mail'}/>
                <textarea name="" id="" cols="30" rows="10" placeholder={'Your message'}>

                </textarea>
            </form>
        </div>
    );
};

export default ContactsForm;