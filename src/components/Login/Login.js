import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/01_header/logo.svg';

function Login() {

   return (
      <section className="login">
         <NavLink to="/" className="nav__logo">
            <img src={logo} alt="Логотип сайта в виде зелёного кольца" className="logo" />
         </NavLink>
         <h2 className="login__title">Рады видеть!</h2>
         <form className="form">
            <label className="login__item">E-mail
               <input
                  className="form__input"
                  type="email"
                  placeholder="E-mail"
                  minLength={2}
                  maxLength={40}
                  required>
               </input>
            </label>
            <label className="login__item">Пароль
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
            <button type="submit" className="form__button">Войти</button>
            <Link to="/signup" className="login__link">Ещё не зарегистрированы? <span className="login__link-accent">Регистрация</span></Link>
         </form>
      </section >
   )
}

export default Login;