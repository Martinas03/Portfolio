import React from 'react';
import s from './Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTelegram, faVk, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className={s.header}>
            <h3>Oliaka Martinas</h3>
            <div className={s.social}>
                <div className={s.icon}><FontAwesomeIcon className={s.vkIcon} icon={faVk} size={'2x'}
                                                         color={'orange'}/></div>
                <div className={s.icon}><FontAwesomeIcon className={s.telegramIcon} icon={faTelegram} size={'2x'}
                                                         color={'orange'}/></div>
                <div className={s.icon}><FontAwesomeIcon className={s.whatsAppIcon} icon={faWhatsapp} size={'2x'}
                                                         color={'orange'}/></div>
            </div>
            <span>@ All rights are reserved</span>
        </div>
    );
};

export default Footer;

