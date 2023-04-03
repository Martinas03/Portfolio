import React from 'react';
import s from './Menu.module.scss'

const Menu = () => {
    return (
        <div className={s.iconMenu}>
            <span className={s.bar}></span>
            <span className={s.bar}></span>
        </div>
    );
};

export default Menu;