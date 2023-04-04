import React from 'react';
import s from './LeftSideBar.module.scss'
import Button from "../comon/components/Button/Button";
import {BsWhatsapp} from 'react-icons/bs'
import {SlSocialVkontakte} from 'react-icons/sl'
import {BsTelegram} from 'react-icons/bs'


const LeftSideBar = () => {
    return (
        <div className={s.container}>
            <div className={s.sideBarHeader}>
                <img src="https://wordpressriverthemes.com/drake/wp-content/themes/drake/assets/images/logo.png"
                     alt="logo"/>
                <span className={s.explanation}>Frontend react developer</span>
            </div>
            <img className={s.me}
                 src="https://wordpressriverthemes.com/drake/wp-content/themes/drake/assets/images/me.jpg" alt="Me"/>
            <h2 className={s.eMail}>martinas1990@mail.ru</h2>
            <h2 className={s.address}>Based in Moscow</h2>
            <p className={s.rights}>© 2022 Martinas. All Rights Reserved</p>
            <div className={s.social}>
                <div className={s.iconWrapper}><a href=""><BsWhatsapp
                    style={{height: '30px', width: '30px', color: '#999999'}}/></a></div>
                <div className={s.iconWrapper}><a href=""><SlSocialVkontakte
                    style={{height: '30px', width: '30px', color: '#999999'}}/></a></div>
                <div className={s.iconWrapper}><a href=""><BsTelegram
                    style={{height: '30px', width: '30px', color: '#999999'}}/></a></div>
            </div>
            <div className={s.buttonWrapper}>
                <Button/>
            </div>
        </div>
    );
};

export default LeftSideBar;