import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/01_header/logo.svg';

function Navigation() {

   const location = useLocation();

   return (
      <nav className="navigation open">
         <NavLink to="/" className="header__nav-logo">
            <img src={logo} alt="Логотип сайта в виде зелёного кольца" className="logo" />
         </NavLink>
         <button className="nav__burger"></button>
         <ul className="nav__list">
            <NavLink to="/" className="nav__link-main">Главная</NavLink>
            <NavLink to="/Movies" className="nav__link">Фильмы</NavLink>
            <NavLink to="/SavedMovies" className="nav__link">Сохранённые фильмы</NavLink>
         </ul>
         <ul className="nav__button-list open">
            {location.pathname !== "/" && location.pathname !== "/Profile" && location.pathname !== "/Movies" && location.pathname !== "/SavedMovies" && <NavLink to="/signup" className="nav__button">Регистрация</NavLink>}
            {location.pathname !== "/" && location.pathname !== "/Profile" && location.pathname !== "/Movies" && location.pathname !== "/SavedMovies" && <NavLink to="/signin" className="nav__button nav__button_green">Войти</NavLink>}
            {location.pathname !== "/signup" && location.pathname !== "/signin" && <NavLink to="/Profile" className="nav__button nav__button_gray">Аккаунт</NavLink>}
         </ul>
      </nav>
   )
}

export default Navigation;