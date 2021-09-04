import React from 'react';
import c from "./AppLogo.module.css";
import logo300 from "../../images/logo300.png";
import logo200 from "../../images/logo200.png";
import logo150 from "../../images/logo150.png";

const AppLogo = () => {
    return (
        <div className={c.logoWrapper}>
            <picture>
                <source srcSet={logo150} media="(max-width: 479px)" />
                <source srcSet={logo200} media="(max-width: 767px) and (min-width: 480px)" />
                <img src={logo300} alt="Барбершоп Royal"/>
            </picture>
        </div>
    )
}

export default AppLogo;