import React from 'react';
import s from './Skill.module.scss'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <div>
                    {props.logo}
                </div>
                <h1>{props.title}</h1>
            </div>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
};

export default Skill;

