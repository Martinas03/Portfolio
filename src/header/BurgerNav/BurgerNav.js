import React from 'react';
import s from './BurgerNav.module.scss'
import {AiOutlineHome} from "react-icons/ai";
import {IoShapesOutline} from "react-icons/io5";
import {GoProject} from "react-icons/go";
import {RiContactsLine} from "react-icons/ri";
import {Link} from "react-scroll";


const BurgerNav = (props) => {

    const navLinks = Array.from(document.querySelectorAll('.nav-link'));

    function updateNavActive(hashParam) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = navLinks.find(link => link.getAttribute('href') === hashParam);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    updateNavActive(window.location.hash);

    window.onhashchange = () => {
        console.log(window.location.hash)
    };

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
        <div className={props.isActive === false ? s.nav : s.notActive}>
            {linksArray.map(link => {
                return (
                    <Link key={link.to}
                          activeClass={s.active}
                          to={link.to}
                          spy={true}
                          smooth={true}
                          hashSpy={true}
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
        </div>
    );
};
export default BurgerNav;

