import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../images/01_header/logo.svg';

function Navigation() {

   const location = useLocation();

   return (
      <nav className="navigation open">
         <NavLink to="/" className="nav__logo">
            <img src={logo} alt="Логотип сайта в виде зелёного кольца" className="logo" />
         </NavLink>
         <button className="nav__burger"></button>
         <ul className="nav__list">
            <NavLink to="/" className="nav__link-main">Главная</NavLink>
            <NavLink to="/Movies" className="nav__link">Фильмы</NavLink>
            <NavLink to="/SavedMovies" className="nav__link">Сохранённые фильмы</NavLink>
            <div className="overlay"></div>
         </ul>
         <ul className="nav__button-list">
            <NavLink to="/signup" className="nav__button">Регистрация</NavLink>
            <NavLink to="/signin" className="nav__button nav__button_green">Войти</NavLink>
            {location.pathname !== "/signup" && location.pathname !== "/signin" && <NavLink to="/Profile" className="nav__button nav__button_gray">Аккаунт</NavLink>}
         </ul>
      </nav>
   )
}

export default Navigation;