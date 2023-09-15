import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/01_header/logo.svg';

function Navigation({ onBurgerClick, isLoggedIn }) {

   // const location = useLocation();

   return (
      <nav className='navigation'>
         <NavLink to="/" className="navigation__logo">
            <img src={logo} alt="Логотип сайта в виде зелёного кольца" className="logo" />
         </NavLink>
         {isLoggedIn && <button type="button" onClick={onBurgerClick} className="navigation__burger"></button>}
         <ul className="navigation__list">
            <li>
               {isLoggedIn && <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>}
            </li>
            <li>
               {isLoggedIn && <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>}
            </li>
         </ul>
         {!isLoggedIn && <ul className="navigation__button-list">
            <li className="navigation__item">
               <NavLink to="/signup" className="navigation__button">Регистрация</NavLink>
            </li>
            <li className="navigation__item">
               <NavLink to="/signin" className="navigation__button navigation__button_green">Войти</NavLink>
            </li>
         </ul>}
         {isLoggedIn && <NavLink to="/Profile" className="navigation__button navigation__button_gray">Аккаунт</NavLink>}
      </nav>
   )
}

export default Navigation;