import React from 'react';
import c from './Page404.module.css';
import TitleBackground from "../TitleBackground/TitleBackground";

const Page404 = () => {
    return (
        <TitleBackground>
            <div className={c.wrapper}>
                <b className={c.title}>Ошибка 404</b>
                <p className={c.subtitle}>Иными словами, такой страницы нет.</p>
            </div>
        </TitleBackground>
    )
}

export default Page404;