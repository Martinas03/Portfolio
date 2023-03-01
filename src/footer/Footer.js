import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.header}>
            <h3>Oliaka Martinas</h3>
            <div className={s.social}>
                <div className={s.icon}>VK</div>
                <div className={s.icon}>TLG</div>
                <div className={s.icon}>WhA</div>
            </div>
            <span>@ All rights are reserved</span>
        </div>
    );
};

export default Footer;

