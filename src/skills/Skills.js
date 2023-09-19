import React from 'react';
import s from './Skills.module.scss'
import styleContainer from './../comon/styles/Container.module.scss'
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
import {SiTypescript, SiVite} from "react-icons/si";
import {BsGithub} from "react-icons/bs";
import {AiOutlineGithub} from "react-icons/ai";
import {DiGit} from "react-icons/di";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faGitAlt} from "@fortawesome/free-brands-svg-icons/faGitAlt";


const Skills = () => {
    return (
        <div id='skills' className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <div className={`${styleContainer.content} ${s.content}`}>
                    <Fade bottom>
                        <Title text='Skills'
                               icon={<IoShapesOutline style={{height: '10px', width: '10px', color: 'white'}}/>}
                               subtitle={'Skills'}/>
                    </Fade>

                    <Fade bottom>


                        <div className={s.skills}>
                            <Skill title={'REACT'} description={'Advanced'}
                                   logo={<FontAwesomeIcon icon={faReact} size={'3x'} color={'white'}
                                                          style={{margin: 'auto auto 29px auto'}}/>}/>
                            <Skill title={'VITE'} description={'Advanced'}
                                   logo={<SiVite style={{
                                       height: '45px',
                                       width: '50px',
                                       color: 'white',
                                       margin: 'auto auto 29px auto'
                                   }}/>}/>

                            <Skill title={'JS'} description={'Proficient'}
                                   logo={<FontAwesomeIcon icon={faSquareJs} size={'3x'} color={'white'}
                                                          style={{margin: 'auto auto 29px auto'}}/>}/>

                            <Skill title={'TS'} description={'Proficient'}
                                   logo={<SiTypescript
                                       style={{
                                           height: '45px',
                                           width: '40px',
                                           color: 'white',
                                           margin: 'auto auto 29px auto'
                                       }}/>}/>

                            <Skill title={'CSS'} description={'Proficient'}
                                   logo={<FontAwesomeIcon icon={faCss3Alt} size={'3x'} color={'white'}
                                                          style={{margin: 'auto auto 29px auto'}}/>}/>


                            <Skill title={'HTML'} description={'Proficient'}
                                   logo={<FontAwesomeIcon icon={faHtml5} size={'3x'} color={'white'}
                                                          style={{margin: 'auto auto 29px auto'}}/>}/>

                            <Skill title={'GITHUB'} description={'Advanced'}
                                   logo={<FontAwesomeIcon icon={faGithub} size={'3x'} color={'white'}
                                                          style={{margin: 'auto auto 29px auto'}}/>}/>

                           <Skill title={'GIT'} description={'Advanced'}
                                   logo={<FontAwesomeIcon icon={faGitAlt} size={'3x'} color={'white'}
                                                          style={{margin: 'auto auto 29px auto'}}/>}/>

                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Skills;

