import React, {useRef} from 'react';
import s from './ContactsForm.module.scss'
import FormItem from "./FormItem/FormItem";
import Button from "../../comon/components/Button/Button";
import emailjs from '@emailjs/browser';

const ContactsForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9hkkqan', 'template_hlcdq8i', form.current, 'F7S4m0Saaa2Mvsdyr')
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <form  ref={form} onSubmit={sendEmail} action="" className={s.formContainer}>
                <FormItem title={'Full name'} placeholder={'Your full name'} isRequired={'true'} type={'text'} name={'user_name'}/>
                <FormItem title={'E-mail'} placeholder={'Your E-mail address'} isRequired={'true'} type={'email'} name={'user_email'}/>
                <FormItem title={'Phone'} placeholder={'Your phone number'} isRequired={'false'} type={'text'} name={'phone_number'}/>

                <label htmlFor="phone-number">Message
                </label>
                <textarea placeholder={'Write your message here'} className={s.textArea} name={'message'}/>
                <div className={s.buttonWrapper}>
                    <Button type={'submit'}  value="Send message"/>
                </div>


            </form>
        </div>
    );
};

export default ContactsForm;

