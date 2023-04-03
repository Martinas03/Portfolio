import React from 'react';
import {AiOutlineHome} from "react-icons/ai";
import s from './Sign.module.scss'


const Sign = (props) => {
    return (
        <h4 className={s.subtitle}>
            <i>{props.icon}</i>
            {props.subtitle}
        </h4>
    );
};

export default Sign;