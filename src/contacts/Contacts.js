import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from "../comon/styles/Container.module.scss";
import ContactsForm from "./contactsForm/ContactsForm";
import Title from "../comon/components/Title";
import {RiContactsLine} from "react-icons/ri";
import Fade from 'react-reveal/Fade';


const Contacts = () => {
    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <div className={`${styleContainer.content} ${s.content}`}>
                    <Fade bottom>

                        <Title text={'Contact me'}
                               icon={<RiContactsLine style={{height: '10px', width: '10px', color: 'white'}}/>}
                               subtitle={'Contacts'}/>
                    </Fade>

                    <ContactsForm/>
                </div>
            </div>
        </div>
    );
};

export default Contacts;

