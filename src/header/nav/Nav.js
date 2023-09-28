import React from 'react';
import s from './Nav.module.scss'
import {AiOutlineHome} from "react-icons/ai";
import {IoShapesOutline} from "react-icons/io5";
import {GoProject} from "react-icons/go";
import {RiContactsLine} from "react-icons/ri";
import {Link} from "react-scroll";


const Nav = () => {




    let linksArray = [
        {
            to: 'main',
            icon: <AiOutlineHome style={{height: '20px', width: '20px', color: '#999999'}}/>
        },
        {
            to: 'skills',
            icon: <IoShapesOutline style={{height: '20px', width: '20px', color: '#999999'}}/>
        },
        {
            to: 'projects',
            icon: <GoProject style={{height: '20px', width: '20px', color: '#999999'}}/>
        },
        {
            to: 'contacts',
            icon: <RiContactsLine style={{height: '20px', width: '20px', color: '#999999'}}/>
        },

    ]


    return (
        <div className={s.nav}>

            {linksArray.map(link => {

                return (
                    <Link key={link.to}
                          activeClass={s.active}
                          activeStyle={{color: 'red'}}
                          to={link.to}
                          spy
                          smooth={true}
                          // hashSpy={true}
                          offset={50}
                          duration={500}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                          spyThrottle={500}
                    >
                            {link.icon}
                    </Link>
                )
            })}
            {/*<a href=""> <RiContactsLine style={{height: '20px', width: '20px', color: '#999999'}}/></a>*/}
        </div>
    );
};
export default Nav;

