import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.header}>
            <h3>Oliaka Martinas</h3>
            <div className={s.social}>
                <div>VK</div>
                <div>TLG</div>
                <div>WhA</div>
            </div>
            <span>@ All rights are reserved</span>
        </div>
    );
};

export default Footer;

