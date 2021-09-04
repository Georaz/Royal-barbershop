import React from "react";
import c from './Footer.module.css';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={c.Footer}>
            <div className={c.FooterContainer}>
                <NavLink className={c.FooterLogo} to='/royal-barbershop'></NavLink>
                <p className={c.copyright}>© barberoyal.ru, 2021</p>
                <a className={c.developer} href='https://github.com/Georaz?tab=repositories' target="_blank"
                   rel="noreferrer"> </a>
            </div>
        </footer>
    );
}

export default Footer;