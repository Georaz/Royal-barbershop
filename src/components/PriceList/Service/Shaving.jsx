import React from 'react';
import c from './Service.module.css';
import AppLogo from "../../AppLogo/AppLogo";
import {NavLink} from "react-router-dom";
import TitleBackground from "../../TitleBackground/TitleBackground";

const Shaving = () => {
    return (
        <section>
            <TitleBackground>
                <AppLogo/>
                <div className={c.serviceContainer}>
                    <div className={c.textWrapper}>
                        <h2 className={c.serviceTitle}>Бритьё</h2>
                        <p><strong>Бритьё машинкой - от 600 рублей.</strong> Если вы хотите *социальный и
                            психологический фактор
                            неравномерен. Второй комплекс движущих сил получил разработку в трудах А.Берталанфи и
                            Ш.Бюлера.*</p>
                        <p><strong>Бритьё опасным лезвием - от 700 рублей.</strong> Если вы хотите *социальный и
                            психологический
                            фактор неравномерен. Второй комплекс движущих сил получил разработку в трудах А.Берталанфи и
                            Ш.Бюлера.*</p>
                        <p><strong>Бритьё классическое - от 550 рублей.</strong> Если вы хотите *социальный и
                            психологический
                            фактор неравномерен. Второй комплекс движущих сил получил разработку в трудах А.Берталанфи и
                            Ш.Бюлера.*</p>
                        <p><strong>Бритьё "Королевское" - от 1000 рублей.</strong> Если вы хотите *социальный и
                            психологический
                            фактор неравномерен. Второй комплекс движущих сил получил разработку в трудах А.Берталанфи и
                            Ш.Бюлера.*</p>
                    </div>
                    <NavLink className={c.enlistButton} to="/office">Записаться</NavLink>
                    <NavLink className={c.moreButton} to="/price-list">Назад</NavLink>
                </div>
            </TitleBackground>
        </section>
    )
}

export default Shaving;