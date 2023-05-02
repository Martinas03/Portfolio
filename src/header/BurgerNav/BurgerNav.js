import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import {FaBeer} from "react-icons/fa";
import {AiOutlineHome} from "react-icons/ai";
import {IoShapesOutline} from "react-icons/io5";
import {GoProject} from "react-icons/go";
import {RiContactsLine} from "react-icons/ri";
import {Link} from "react-scroll";


const BurgerNav = (props) => {

// Get the navigation links and store them in an array
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));

    // Function to update the active state of the navigation
    function updateNavActive(hashParam) {
        // Loop through the navigation links and remove the active class
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Find the link with a href attribute matching the hash parameter and add the active class
        const activeLink = navLinks.find(link => link.getAttribute('href') === hashParam);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Update the active state of the navigation on page load
    updateNavActive(window.location.hash);

    // Listen for changes to the hash parameter and update the active state of the navigation accordingly
    window.onhashchange = () => {
        // let location = useLocation
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

    // let [isActive, setIsActive] = useState(false)
    return (
        <div className={props.isActive === false ? s.nav : s.notActive}>
            {/*<a href=""> <AiOutlineHome style={{height: '20px', width: '20px', color: '#999999'}}/></a>*/}
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

            {/*<a href=""> <RiContactsLine style={{height: '20px', width: '20px', color: '#999999'}}/></a>*/}
        </div>
    );
};
export default BurgerNav;

