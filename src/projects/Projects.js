import React from 'react';
import s from './Projects.module.css'
import styleContainer from './../comon/styles/Container.module.css'
import Project from "./projects/Project";



const Projects = () => {
    return (
        <div className={s.projectsBlock}>
<div className={`${styleContainer.container} ${s.projectsContainer}` }>
    <h2 className={s.title}>Projects</h2>
    <div className={s.projects}>
        <Project title={'Social network'} description={'Cool social network'}/>
        <Project title={'Todolist'} description={'Cool todolist'}/>
    </div>
</div>
        </div>
    );
};

export default Projects;

