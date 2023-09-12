import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/01_header/logo.svg';

function Navigation({ isOpen, onBurgerClick }) {

   const location = useLocation();

   return (
      <nav className={`navigation ${isOpen ? "open" : ""}`}>
         <NavLink to="/" className="nav__logo">
            <img src={logo} alt="Логотип сайта в виде зелёного кольца" className="logo" />
         </NavLink>
         <button type="button" onClick={onBurgerClick} className="nav__burger"></button>
         <ul className="nav__list">
            <li>
               <NavLink to="/" className="nav__link-main">Главная</NavLink>
            </li>
            <li>
               <NavLink to="/movies" className="nav__link">Фильмы</NavLink>
            </li>
            <li>
               <NavLink to="/saved-movies" className="nav__link">Сохранённые фильмы</NavLink>
            </li>
         </ul>
         <ul className="nav__button-list">
            <li>
               <NavLink to="/signup" className="nav__button">Регистрация</NavLink>
            </li>
            <li>
               <NavLink to="/signin" className="nav__button nav__button_green">Войти</NavLink>
            </li>
            <li>
               {location.pathname !== "/signup" && location.pathname !== "/signin" && <NavLink to="/Profile" className="nav__button nav__button_gray">Аккаунт</NavLink>}
            </li>
         </ul>
      </nav>
   )
}

export default Navigation;