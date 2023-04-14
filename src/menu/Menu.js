import React, {useState} from 'react';
import s from './Menu.module.scss'
import BurgerNav from "../header/BurgerNav/BurgerNav";

const Menu = () => {
    let [isActiveMenu, setIsActiveMenu] = useState(false)
    return (
        <div>
            <BurgerNav isActive={isActiveMenu}/>
            <div className={s.iconMenu} onClick={() => setIsActiveMenu(!isActiveMenu)}>
                <span className={s.bar}/>
                <span className={s.bar}/>
            </div>
        </div>

    );
};

export default Menu;