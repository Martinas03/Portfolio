import React from 'react';
import s from './Projects.module.scss'
import styleContainer from './../comon/styles/Container.module.scss'
import Project from './project/Project';
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
        <div id='projects' className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <div className={`${styleContainer.content} ${s.content}`}>
                    <Fade bottom>
                    <Title text={'Projects'} icon={<GoProject style={{height: '10px', width: '10px', color: 'white'}}/>}
                           subtitle={'Projects'}/>
                    </Fade>
                    <div className={s.projects}>
                        <Fade left>
                            <Project href={'https://martinas03.github.io/react-samurai/'} style={social} title={'Social network'} description={'Cool social network'}/>
                        </Fade>
                        <Fade right>

                            <Project href={'https://martinas03.github.io/Todolist/'} style={todolist} title={'Todolist'} description={'Cool todolist'}/>
                        </Fade>
                        <Fade left>

                            <Project href={'https://martinas03.github.io/my_counter/'} style={todolist} title={'Todolist'} description={'Cool todolist'}/>
                        </Fade>
                        {/*<Fade right>*/}

                        {/*    <Project style={todolist} title={'Todolist'} description={'Cool todolist'}/>*/}
                        {/*</Fade>*/}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;

