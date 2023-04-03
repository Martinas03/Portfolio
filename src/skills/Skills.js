import React from 'react';
import s from './Skills.module.scss'
import styleContainer from './../comon/styles/Container.module.css'
import Skill from "./skill/Skill";
import {
    faCss3,
    faCss3Alt,
    faHtml5,
    faJs,
    faJsfiddle,
    faReact,
    faSquareJs, faTelegram,
    faVk, faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Title from "../comon/components/Title";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {IoShapesOutline} from "react-icons/io5";
import Fade from 'react-reveal/Fade';


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <div className={`${styleContainer.content} ${s.content}`}>
                    <Fade bottom>
                        <Title text='Skills'
                               icon={<IoShapesOutline style={{height: '20px', width: '20px', color: 'white'}}/>}
                               subtitle={'Skills'}/>
                    </Fade>

                    <Fade bottom>


                    <div className={s.skills}>
                        {/*<Fade left>*/}
                            <Skill title={'JS'} description={'Can do nice functions'}
                                   logo={<FontAwesomeIcon icon={faHouse} size={'3x'} color={'white'}
                                                          style={{margin: 'auto auto 29px auto'}}/>}/>

                        {/*<Fade bottom>*/}
                            <Skill title={'JS'} description={'Can do nice functions'}
                                   logo={<FontAwesomeIcon icon={faSquareJs} size={'3x'} color={'white'}
                                                          style={{margin: 'auto auto 29px auto'}}/>}/>
                        {/*</Fade>*/}

                        {/*<Fade top>*/}
                            <Skill title={'JS'} description={'Can do nice functions'}
                                   logo={<FontAwesomeIcon icon={faSquareJs} size={'3x'} color={'white'}
                                                          style={{margin: 'auto auto 29px auto'}}/>}/>
                        {/*</Fade>*/}

                        {/*<Fade right>*/}
                            <Skill title={'CSS'} description={'Can do nice styles'}
                                   logo={<FontAwesomeIcon icon={faCss3Alt} size={'3x'} color={'white'}
                                                          style={{margin: 'auto auto 29px auto'}}/>}/>
                        {/*</Fade>*/}

                        {/*<Fade left>*/}
                            <Skill title={'REACT'} description={'Can do nice component'}
                                   logo={<FontAwesomeIcon icon={faReact} size={'3x'} color={'white'}
                                                          style={{margin: 'auto auto 29px auto'}}/>}/>
                        {/*</Fade>*/}

                        {/*<Fade bottom>*/}
                            <Skill title={'HTML'} description={'Can do nice HTML'}
                                   logo={<FontAwesomeIcon icon={faHtml5} size={'3x'} color={'white'}
                                                          style={{margin: 'auto auto 29px auto'}}/>}/>
                        {/*</Fade>*/}

                        {/*</Fade>*/}

                    </div>
            </Fade>
                </div>
            </div>
        </div>
    );
};

export default Skills;

