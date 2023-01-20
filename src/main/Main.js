import React from 'react';
import s from './Main.module.css'
import styleContainer from './../comon/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I am Oliaka Martinas</h1>
                    <p>Web disigner</p>
                </div>
                <div className={s.photo}></div>
            </div>


        </div>
    );
};

export default Main;

