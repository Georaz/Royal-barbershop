import React, {useRef} from 'react';
import c from './MobileMenu.module.css';
import {NavLink} from "react-router-dom";

const MobileMenu = (props) => {
    const menuToggler = useRef(null)
    const clickedMenuLink = () => {
        menuToggler.current.checked = false
    }
    return (
        <div id={c.menuToggle}>
            <input type="checkbox" ref={menuToggler}/>
            <span></span>
            <span></span>
            <span></span>
            <ul id={c.mobileMenu}>
                <li><NavLink className={c.menuLink}
                             activeClassName={c.menuLinkActive}
                             exact to="/royal-barbershop"
                             onClick={clickedMenuLink}
                >Главная</NavLink></li>
                <li><NavLink className={c.menuLink}
                             activeClassName={c.menuLinkActive}
                             to="/price-list"
                             onClick={clickedMenuLink}
                >Услуги и цены</NavLink></li>
                {props.isAuth
                    ? <>
                        <li><NavLink className={c.menuLink}
                                     activeClassName={c.menuLinkActive}
                                     to="/office"
                                     onClick={clickedMenuLink}
                        >Личный кабинет</NavLink></li>
                        <button className={c.logoutButton}
                                onClick={props.logout}>Выйти
                        </button>
                    </>
                    : null
                }
                {!props.isAuth
                    ? <>
                        <li><NavLink className={`${c.menuLink} ${c.signUpLink}`}
                                     activeClassName={c.menuLinkActive}
                                     to="/registration"
                                     onClick={clickedMenuLink}
                        >Регистрация</NavLink></li>
                        <li><NavLink className={`${c.menuLink} ${c.signInLink}`}
                                     activeClassName={c.menuLinkActive}
                                     to="/auth"
                                     onClick={clickedMenuLink}
                        >Войти</NavLink></li>
                    </>
                    : null
                }
            </ul>
        </div>
    )
}

export default MobileMenu;