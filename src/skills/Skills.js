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


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                {/*<h2 className={s.title}>Skills</h2>*/}
                <Title text='Skills'/>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Can do nice functions'}
                           logo={<FontAwesomeIcon icon={faHouse} size={'4x'} color={'white'}/>}/>
                    <Skill title={'JS'} description={'Can do nice functions'}
                           logo={<FontAwesomeIcon icon={faSquareJs} size={'4x'} color={'white'}/>}/>
                    <Skill title={'JS'} description={'Can do nice functions'}
                           logo={<FontAwesomeIcon icon={faSquareJs} size={'4x'} color={'white'}/>}/>
                    <Skill title={'CSS'} description={'Can do nice styles'}
                           logo={<FontAwesomeIcon icon={faCss3Alt} size={'4x'} color={'white'}/>}/>
                    <Skill title={'REACT'} description={'Can do nice component'}
                           logo={<FontAwesomeIcon icon={faReact} size={'4x'} color={'white'}/>}/>
                    <Skill title={'HTML'} description={'Can do nice HTML'}
                           logo={<FontAwesomeIcon icon={faHtml5} size={'4x'} color={'white'}/>}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;

