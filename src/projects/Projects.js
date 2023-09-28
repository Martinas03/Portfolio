import React from 'react';
import s from './Projects.module.scss'
import styleContainer from './../comon/styles/Container.module.scss'
import Project from './project/Project';
import Title from '../comon/components/Title';
import todoImage from './../assets/images/todolist.png'
import counter from './../assets/images/counter.png'
import socialImage from './../assets/images/social_network.png'
import github from './../assets/images/github.jpeg'
import cards from './../assets/images/CardPacks.png'
import {GoProject} from "react-icons/go";
import Fade from 'react-reveal/Fade';


const Projects = () => {

    const todoList = {
        backgroundImage: `url(${todoImage})`,
    };
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const myCounter = {
        backgroundImage: `url(${counter})`,
    };

   const githubAccount = {
        backgroundImage: `url(${github})`,
    };

    const cardPacks = {
        backgroundImage: `url(${cards})`,
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
                            <Project href={'https://martinas03.github.io/react-samurai/'} style={social} title={'Social network'} description={'Social network with profile page, friends and list os users'}/>
                        </Fade>
                        <Fade right>
                            <Project href={'https://martinas03.github.io/Todolist/'} style={todoList} title={'Todolist'} description={'Cool task manager with simple interface'}/>
                        </Fade>
                        <Fade left>
                            <Project href={'https://martinas03.github.io/my_counter/'} style={myCounter} title={'Counter'} description={'Complex counter with settings'}/>
                        </Fade>
                        <Fade right>
                            <Project href={'https://martinas03.github.io/cardpack/'} style={cardPacks} title={'Cards'} description={'Cool Cards Packs application with personal registration and ability to create packs and cards'}/>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

