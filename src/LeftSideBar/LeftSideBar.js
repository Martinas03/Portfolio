import React from 'react';
import s from './LeftSideBar.module.scss'
import {BsWhatsapp} from 'react-icons/bs'
import {SlSocialVkontakte} from 'react-icons/sl'
import {BsTelegram} from 'react-icons/bs'
import logo from './../assets/images/logo-2.png'
import photo from './../assets/images/profile-photo.jpg'


const LeftSideBar = () => {
    return (
        <div className={s.container}>
            <div className={s.sideBarHeader}>
                <img src={logo}
                     alt="logo"/>
                <span className={s.explanation}>Frontend react developer</span>
            </div>
            <img className={s.me}
                 src={photo} alt="Me"/>
            <h2 className={s.eMail}>martinas1990@mail.ru</h2>
            <h2 className={s.address}>Based in Moscow</h2>
            <p className={s.rights}>© 2022 Martinas. All Rights Reserved</p>
            <div className={s.social}>
                <div className={s.iconWrapper}><a href="https://api.whatsapp.com/send?phone=79017014413"><BsWhatsapp
                    style={{height: '30px', width: '30px', color: '#999999'}}/></a></div>
                <div className={s.iconWrapper}><a href="https://vk.com/id688406378"><SlSocialVkontakte
                    style={{height: '30px', width: '30px', color: '#999999'}}/></a></div>
                <div className={s.iconWrapper}><a href="https://tlgg.ru/martinas03"><BsTelegram
                    style={{height: '30px', width: '30px', color: '#999999'}}/></a></div>
            </div>
            {/*<div className={s.buttonWrapper}>*/}
            {/*    <Button/>*/}
            {/*</div>*/}
        </div>
    );
};

export default LeftSideBar;