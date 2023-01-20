import React from 'react';
import s from './Project.module.css'


const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.img}>
                <button className={s.button}>Watch</button>
            </div>
            <div className={s.textWraper}>
                <div>
                    <h3>{props.title}</h3>
                </div>
                <div>
                    <span className={s.description}>{props.description}</span>
                </div>
            </div>
        </div>
    );
};

export default Project;

