import React from 'react';
import s from './ContactsForm.module.css'

const ContactsForm = () => {
    return (
        <div className={s.formBlock}>
            <form action="" className={s.formContainer}>
                <input type="text"/>
                <input type="text"/>
                <textarea name="" id="" cols="30" rows="10">

                </textarea>
            </form>
        </div>
    );
};

export default ContactsForm;