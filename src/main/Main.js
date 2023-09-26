import React from 'react';
import s from './Main.module.scss'
import styleContainer from './../comon/styles/Container.module.scss'
import {Fact} from "./Fact/Fact";
import Sign from "../comon/components/Sign/Sign";
import Title from "../comon/components/Title";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineArrowDown} from "react-icons/ai";
import {Link, animateScroll as scroll} from "react-scroll";
import CV from './../assets/images/CV.pdf'
import {GoProject} from "react-icons/go";
import BurgerNav from "../header/BurgerNav/BurgerNav";


const Main = (props) => {
    return (
        <div id='main' className={s.mainBlock}>

            <div className={`${styleContainer.container} ${s.container}`}>
                <div className={`${s.content} ${styleContainer.content}`}>
                    <Title text={'About me'}
                           icon={<AiOutlineHome style={{height: '10px', width: '10px', color: 'white'}}/>}
                           subtitle={'Home'}/>
                    <div className={s.text}>
                        {/*<h4>Home</h4>*/}
                        <h1>Hi! I am Martinas <span>Oliaka!</span><br/> I"m frontend react developer</h1>

                        {/*<p>Web disigner</p>*/}
                    </div>
                    <p className={s.description}>My name is Martinas Oliaka. I'm an outstanding frontend developer with
                        incredible learning skills and the ability to solve problems without giving up. My goal as a
                        developer is to apply my technical skills in IT development and troubleshooting to realize the
                        vision and mission of the company.</p>
                    <div className={s.linkWrapper}>
                        <a href={CV} download={'cd.pdf'} className={s.cv}>Download CV</a>
                        <Link
                            activeClass={s.active}
                            to="projects"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={50}
                            duration={500}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                            spyThrottle={500}
                        >
                            <a href="" className={s.href}>
                                <img className={s.img}
                                     src="https://wordpressriverthemes.com/drake/wp-content/uploads/2023/03/round-text.png"
                                     alt="Rounded text"/>
                                <i className={s.icon}><AiOutlineArrowDown
                                    style={{height: '50px', width: '500px', color: 'white'}}/></i>
                            </a>
                        </Link>
                    </div>

                    <div className={s.facts}>
                        <Fact num={'10+'} description1={'month of'} description2={'commercial Experience'}/>
                        <Fact num={'3+'} description1={'project completed on '} description2={''}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

