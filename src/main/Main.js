import React from 'react';
import s from './Main.module.scss'
import styleContainer from './../comon/styles/Container.module.css'
import {Fact} from "./Fact/Fact";
import Sign from "../comon/components/Sign/Sign";
import Title from "../comon/components/Title";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineArrowDown} from "react-icons/ai";


const Main = (props) => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <div className={`${s.content} ${styleContainer.content}`}>
                    <Title text={'About me'}
                           icon={<AiOutlineHome style={{height: '20px', width: '20px', color: 'white'}}/>}
                           subtitle={'Home'}/>
                    <div className={s.text}>
                        {/*<h4>Home</h4>*/}
                        <h1>Hi! I am Oliaka Martinas! I"m frontend react developer</h1>
                        {/*<p>Web disigner</p>*/}
                    </div>
                    <p className={s.description}>Veb developerVeb developerVeb developerVeb developerVeb developerVeb
                        developerVeb developerVeb developer</p>
                    <a href="" className={s.href}>
                        <img className={s.img}
                             src="https://wordpressriverthemes.com/drake/wp-content/uploads/2023/03/round-text.png"
                             alt="Rounded text"/>
                        <i className={s.icon}><AiOutlineArrowDown style={{height: '50px', width: '500px', color: 'white'}}/></i>
                    </a>
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

