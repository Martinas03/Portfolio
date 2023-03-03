import React from 'react';
import s from './Skills.module.css'
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


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Can do nice functions'}
                           logo={<FontAwesomeIcon className={s.jsIcon} icon={faSquareJs} size={'3x'}/>}/>
                    <Skill title={'CSS'} description={'Can do nice styles'}
                           logo={<FontAwesomeIcon className={s.cssIcon} icon={faCss3Alt} size={'3x'}/>}/>
                    <Skill title={'REACT'} description={'Can do nice component'}
                           logo={<FontAwesomeIcon className={s.reactIcon} icon={faReact} size={'3x'} color={'blue'}/>}/>
                    <Skill title={'HTML'} description={'Can do nice HTML'}
                           logo={<FontAwesomeIcon className={s.htmltIcon} icon={faHtml5} size={'3x'}
                                                  color={'orange'}/>}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;

