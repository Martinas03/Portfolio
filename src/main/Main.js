import React from 'react';
import s from './Main.module.scss'
import styleContainer from './../comon/styles/Container.module.css'
import {Fact} from "./Fact/Fact";

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.container}`} >
                <div className={s.content}>
                    <div className={s.text}>
                        <h4>Home</h4>
                        <h1>Hi! I am Oliaka Martinas! I"m frontend react developer</h1>
                        {/*<p>Web disigner</p>*/}
                    </div>
                    <p className={s.description}>Veb developerVeb developerVeb developerVeb developerVeb developerVeb
                        developerVeb developerVeb developer</p>
                    <a href="" className={s.href}/>
                    <div className={s.facts}>
                        <Fact num={'10+'} description1={'Years of'} description2={'Experience'}/>
                        <Fact num={'182+'} description1={'projects completed on '} description2={'15 countries'}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;

