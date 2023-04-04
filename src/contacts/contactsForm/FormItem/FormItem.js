import React from 'react';
import s from './FormItem.module.scss'

const FormItem = (props) => {
    return (
        <div className={s.inputGroup}>
            <label htmlFor="phone-number">{props.title}
                {
                    props.isRequired === 'true'
                        ? <sup style={{color: 'red'}}>*</sup>
                        : props.isRequired === 'false'
                        ? <span className={s.span}> (optional)</span> : ''}
            </label>
            <input type="text" placeholder={props.placeholder} autoComplete={'off'}/>
        </div>
    );
};

export default FormItem;