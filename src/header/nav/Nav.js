import React from 'react';
import s from './Nav.module.scss'
import {FaBeer} from "react-icons/fa";
import {AiOutlineHome} from "react-icons/ai";
import {IoShapesOutline} from "react-icons/io5";
import {GoProject} from "react-icons/go";
import {RiContactsLine} from "react-icons/ri";

const Nav = () => {
    return (
        <div className={s.nav}>
            <a href=""> <AiOutlineHome style={{height: '30px', width: '30px', color: 'white'}}/></a>
            <a href=""> <IoShapesOutline style={{height: '30px', width: '30px', color: 'white'}}/></a>
            <a href=""> <GoProject style={{height: '30px', width: '30px', color: 'white'}}/></a>
            <a href=""> <RiContactsLine style={{height: '30px', width: '30px', color: 'white'}}/></a>
        </div>
    );
};
export default Nav;

