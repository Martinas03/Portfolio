import React from 'react';
import s from './Project.module.scss'


const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.img} style={props.style}>
                <a className={s.viewButton}>Watch</a>
            </div>
            {/*<div className={s.textWraper}>*/}
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
            {/*</div>*/}
        </div>
    );
};

export default Project;

