import React from 'react';
import { NavLink } from 'react-router-dom';

function MobileMenu({ isOpen, onClose }) {

   return (
      <nav className={`mobilemenu ${isOpen ? "open" : ""}`}>
         <div className="mobilemenu__container">
            <button type="button" onClick={onClose} className="mobilemenu__button-close"></button>
            <ul className="mobilemenu__list">
               <li>
                  <NavLink to="/" className="mobilemenu__link">Главная</NavLink>
               </li>
               <li>
                  <NavLink to="/movies" className="mobilemenu__link">Фильмы</NavLink>
               </li>
               <li>
                  <NavLink to="/saved-movies" className="mobilemenu__link">Сохранённые фильмы</NavLink>
               </li>
            </ul>
            <NavLink to="/Profile" className="mobilemenu__button">Аккаунт</NavLink>
         </div>
      </nav >
   )
}

export default MobileMenu;