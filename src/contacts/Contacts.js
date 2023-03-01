import React from 'react';
import s from './Contacts.module.css'
import styleContainer from "../comon/styles/Container.module.css";
import ContactsForm from "./contactsForm/ContactsForm";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <div><ContactsForm/></div>
                <button className={s.button}>send</button>
            </div>
        </div>
    );
};

export default Contacts;

