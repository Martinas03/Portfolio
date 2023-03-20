import React from 'react';
import s from './Fact.module.scss'

export const Fact = (props) => {
    return (
        <div className={s.block}>
            <h1 className={s.number}>
                {props.num}
            </h1>
            <p className={s.description}>
                {props.description1}
                <br/>
                {props.description2}
            </p>
        </div>
    );
};
