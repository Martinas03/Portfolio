import React from 'react';
import s from './ContactsForm.module.scss'
import FormItem from "./FormItem/FormItem";

const ContactsForm = () => {
    return (
            <form action="" className={s.formContainer}>
                <FormItem title={'Full name'} placeholder={'Your ful name'} isRequired={'true'}/>
                <FormItem title={'E-mail'} placeholder={'Your E-mail address'} isRequired={'true'}/>
                <FormItem title={'Phone'} placeholder={'Your phone number'} isRequired={'false'}/>
                <FormItem title={'Sekect'} placeholder={'Select subject'} isRequired={'true'}/>
                {/*<FormItem title={'Message'} placeholder={'Write your message here'}/>*/}
                <label htmlFor="phone-number">Message
                </label>
                <textarea placeholder={'Write your message here'}/>
                {/*<button className={s.button}>send</button>*/}
                <Button/>

            </form>
    );
};

export default ContactsForm;

export const Button = () => {
    return (
        <div>
           <button className={s.button}>Send message</button>
        </div>
    )
}