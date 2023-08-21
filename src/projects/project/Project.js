import React from 'react';
import s from './Project.module.scss'


const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.img} style={props.style}>
                <a href={props.href} className={s.viewButton}>Watch</a>
            </div>
            <div className={s.textWraper}>
                <div className={s.projectInfo}>
                    <h2 className={s.projectTitle}>{props.title}</h2>
                    <span className={s.description}>{props.description}</span>
                </div>
            </div>
        </div>
    );
};

export default Project;

