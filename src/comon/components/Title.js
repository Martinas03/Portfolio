import React from 'react';
import s from './Title.module.scss'
import Sign from "./Sign/Sign";



const Title = (props) => {
    return (

                <div className={s.title}>
                    <Sign icon={props.icon} subtitle={props.subtitle}/>
                    <h2>{props.text}</h2>
                </div>
    )
};

export default Title;

