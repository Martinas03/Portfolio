import React from 'react';
import s from "./Button.module.scss";

const  Button = () => {
    return (
        <div>
            <button className={s.button}>Send message</button>
        </div>
    );
};

export default Button;