import React from 'react';
import s from './Title.module.scss'



const Title = (props) => {
    return (

                <div className={s.title}>
                    <h1>{props.text}</h1>
                </div>
    )



};

export default Title;

