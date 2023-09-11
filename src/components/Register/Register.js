import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/01_header/logo.svg';

function Register() {

   return (
      <section className="register">
         <NavLink to="/" className="nav__logo">
            <img src={logo} alt="Логотип сайта в виде зелёного кольца" className="logo" />
         </NavLink>
         <h2 className="register__title">Добро пожаловать!</h2>
         <form className="form">
            <label className="register__item">Имя
               <input className="form__input"
                  type="text"
                  placeholder="Имя"
                  minLength={2}
                  maxLength={40}
                  required>
               </input>
            </label>
            <label className="register__item">E-mail
               <input
                  className="form__input"
                  type="email"
                  placeholder="E-mail"
                  minLength={2}
                  maxLength={40}
                  required>
               </input>
            </label>
            <label className="register__item">Пароль
               <input
                  className="form__input"
                  type="password"
                  placeholder="Пароль"
                  minLength={6}
                  maxLength={30}
                  required>
               </input>
               <span className="form__input-error">Что-то пошло не так...</span>
            </label>
            <button type="submit" className="form__button">Зарегистрироваться</button>
            <Link to="/signin" className="register__link">Уже зарегистрированы? <span className="register__link-accent">Войти</span></Link>
         </form>
      </section >
   )
}

export default Register;