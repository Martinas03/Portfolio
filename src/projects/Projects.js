import React from 'react';
import s from './Projects.module.css'
import styleContainer from './../comon/styles/Container.module.css'
import Project from './projects/Project';
import Title from '../comon/components/Title';
import todoImage from './../assets/images/todolist.png'
import socialImage from './../assets/images/social_network.png'


const Projects = () => {

    const todolist = {
        // color: 'blue',
        backgroundImage: `url(${todoImage})`,
    };
    const social = {
        // color: 'blue',
        backgroundImage: `url(${socialImage})`,
    };
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>

                <div className={s.projects}>
                    <Project style={social} title={'Social network'} description={'Cool social network'}/>
                    <Project style={todolist} title={'Todolist'} description={'Cool todolist'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;

