import React from 'react';
import s from './Projects.module.scss'
import styleContainer from './../comon/styles/Container.module.css'
import Project from './projects/Project';
import Title from '../comon/components/Title';
import todoImage from './../assets/images/todolist.png'
import socialImage from './../assets/images/social_network.png'
import {GoProject} from "react-icons/go";
import Fade from 'react-reveal/Fade';


const Projects = () => {

    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <div className={`${styleContainer.content} ${s.content}`}>
                    <Fade bottom>
                    <Title text={'Projects'} icon={<GoProject style={{height: '20px', width: '20px', color: 'white'}}/>}
                           subtitle={'Projects'}/>
                    </Fade>
                    <div className={s.projects}>
                        <Fade left>
                            <Project style={social} title={'Social network'} description={'Cool social network'}/>
                        </Fade>
                        <Fade right>

                            <Project style={todolist} title={'Todolist'} description={'Cool todolist'}/>
                        </Fade>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;

