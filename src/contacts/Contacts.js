import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from "../comon/styles/Container.module.css";
import ContactsForm from "./contactsForm/ContactsForm";
import Title from "../comon/components/Title";
import {RiContactsLine} from "react-icons/ri";


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <div className={`${styleContainer.content} ${s.content}`}>
                    <Title text={'Contacts'}
                           icon={<RiContactsLine style={{height: '30px', width: '30px', color: 'white'}}/>}
                           subtitle={'Contacts'}/>
                    <ContactsForm/>
                </div>
            </div>
        </div>
    );
};

export default Contacts;

