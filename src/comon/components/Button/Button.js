import React from 'react';
import s from "./Button.module.scss";

const  Button = (props) => {
    return (
        <div>
            <button type={props.type} className={s.button}>{props.value}</button>
        </div>
    );
};

export default Button;