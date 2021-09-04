import React from 'react';
import c from './EntrySection.module.css';
import scissors from "../../../images/scissors.svg";
import razor from "../../../images/razor.svg";
import barber from "../../../images/barber.svg";

const EntrySection = () => {
    return (
        <div className={c.entryContainer}>
            <div className={c.titleText}>
                <p>Мы - коллектив настоящих профессионалов, для которых стрижка не просто работа, а искусство. </p>
                <p>Наша миссия - превратить рутинный, казалось бы, процесс в увлекательный творческий поход.</p>
                <p>Мы меняем не просто внешний вид - мы меняем сам стиль жизни.</p>
            </div>
            <table className={c.advantages}>
                <tbody>
                <tr>
                    <td className={`${c.advantagesItem} ${c.scissors}`}>
                        <img src={scissors} width="70" height="70" alt=""/>
                        <span>Высокая скорость</span>
                    </td>
                    <td className={`${c.advantagesItem} ${c.razor}`}>
                        <img src={razor} width="70" height="70" alt=""/>
                        <span>Стильно и аккуратно</span>
                    </td>
                    <td className={`${c.advantagesItem} ${c.barber}`}>
                        <img src={barber} width="70" height="70" alt=""/>
                        <span>Адекватная стоимость</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default EntrySection;