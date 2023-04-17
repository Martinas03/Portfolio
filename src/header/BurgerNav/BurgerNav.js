import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import {FaBeer} from "react-icons/fa";
import {AiOutlineHome} from "react-icons/ai";
import {IoShapesOutline} from "react-icons/io5";
import {GoProject} from "react-icons/go";
import {RiContactsLine} from "react-icons/ri";
import {Link} from "react-scroll";


const BurgerNav = (props) => {

    // let [isActive, setIsActive] = useState(false)
    return (
        <div className={props.isActive === false ?  s.nav : s.notActive}>
            {/*<a href=""> <AiOutlineHome style={{height: '20px', width: '20px', color: '#999999'}}/></a>*/}
            <Link activeClass={s.active}
                  activeStyle={{color: 'green'}}
                  to="main"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  // onSetActive={}
                  // onSetInactive={this.handleSetInactive}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
            >
                <a href="">

                    <AiOutlineHome style={{height: '20px', width: '20px', color: '#999999'}}/>
                </a>
            </Link>
            {/*<a href=""> <IoShapesOutline style={{height: '20px', width: '20px', color: '#999999'}}/></a>*/}
            <Link activeClass={s.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
            >
                <a href="">
                    <IoShapesOutline style={{height: '20px', width: '20px', color: '#999999'}}/>
                </a>
            </Link>

            <Link activeClass={s.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
            >
                <a href="">
                    <GoProject style={{height: '20px', width: '20px', color: '#999999'}}/>
                </a>
            </Link>

            <Link activeClass={s.active}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
            >
                <a href="">
                    <RiContactsLine style={{height: '20px', width: '20px', color: '#999999'}}/>
                </a>
            </Link>

            {/*<a href=""> <RiContactsLine style={{height: '20px', width: '20px', color: '#999999'}}/></a>*/}
        </div>
    );
};
export default BurgerNav;
