import c from "./Menu.module.css";
import {NavLink} from "react-router-dom";
import MobileMenu from "./MobileMenu/MobileMenu";

const Menu = (props) => {
    return (
        <header className={c.menu}>
            <div className={c.menuContainer}>
                <nav className={c.navbar}>
                    <ul className={c.desktopMenu}>
                        <li><NavLink className={c.menuLink}
                                     activeClassName={c.menuLinkActive}
                                     exact to="/royal-barbershop">Главная</NavLink></li>
                        <li><NavLink className={c.menuLink}
                                     activeClassName={c.menuLinkActive}
                                     to="/price-list">Услуги и цены</NavLink></li>
                        {props.isAuth
                            ? <>
                                <li><NavLink className={c.menuLink}
                                             activeClassName={c.menuLinkActive}
                                             to="/office">Личный кабинет</NavLink></li>
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
                                             to="/registration">Регистрация</NavLink></li>
                                <li><NavLink className={`${c.menuLink} ${c.signInLink}`}
                                             activeClassName={c.menuLinkActive}
                                             to="/auth">Войти</NavLink></li>
                            </>
                            : null
                        }
                    </ul>
                    <MobileMenu
                        isAuth={props.isAuth}
                        logout={props.logout}/>
                </nav>
            </div>
        </header>
    )
}

export default Menu;