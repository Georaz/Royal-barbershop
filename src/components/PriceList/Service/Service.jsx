import React from 'react';
import c from './Service.module.css';
import {NavLink} from "react-router-dom";

const Service = (props) => {
    return (
        <div className={c.serviceWrapper}>
            <h3 className={c.title}>{props.title}</h3>
            <b className={c.subtitle}>{props.subtitle}</b>
            <ul className={c.features}>{props.features.map(feature => <li>{feature}</li>)}</ul>
            <NavLink className={c.moreButton} to={`/price-list/${props.link}`}>Подробнее</NavLink>
            <NavLink className={c.enlistButton} to="/office">Записаться</NavLink>
        </div>
    )
}

export default Service;