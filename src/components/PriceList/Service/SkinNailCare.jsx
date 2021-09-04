import React from 'react';
import c from './Service.module.css';
import AppLogo from "../../AppLogo/AppLogo";
import {NavLink} from "react-router-dom";
import TitleBackground from "../../TitleBackground/TitleBackground";

const SkinNailCare = () => {
    return (
        <section>
            <TitleBackground>
                <AppLogo/>
                <div className={c.serviceContainer}>
                    <div className={c.textWrapper}>
                        <h2 className={c.serviceTitle}>Уход за кожей/ногтями</h2>
                        <p><strong>Маникюр - от 500 рублей.</strong> Если вы хотите *социальный и психологический фактор
                            неравномерен. Второй комплекс движущих сил получил разработку в трудах А.Берталанфи и
                            Ш.Бюлера.*
                        </p>
                        <p><strong>Педикюр - от 500 рублей.</strong> Если вы хотите *социальный и психологический фактор
                            неравномерен. Второй комплекс движущих сил получил разработку в трудах А.Берталанфи и
                            Ш.Бюлера.*
                        </p>
                        <p><strong>Коррекция формы - от 1000 рублей.</strong> Если вы хотите *социальный и
                            психологический
                            фактор неравномерен. Второй комплекс движущих сил получил разработку в трудах А.Берталанфи и
                            Ш.Бюлера.*</p>
                        <p><strong>Парафинотерапия - от 1100 рублей.</strong> Если вы хотите *социальный и
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

export default SkinNailCare;