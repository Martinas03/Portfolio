import React from 'react';
import s from './Project.module.css'


const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.img}>
                <a className={s.viewButton}>Watch</a>
            </div>
            <div className={s.textWraper}>
                <h3>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;

