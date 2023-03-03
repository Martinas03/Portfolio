import React from 'react';
import s from './Skill.module.css'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                {props.logo}
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
};

export default Skill;

