import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../images/01_header/logo.svg';
import * as auth from '../../utils/Auth.js';

function Login({ onLogin }) {

   const navigate = useNavigate();

   const [formValue, setFormValue] = React.useState({
      email: '',
      password: ''
   });

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValue({
         ...formValue,
         [name]: value
      });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      auth.login(formValue.email, formValue.password).then((data) => {
         onLogin();
         navigate('/movies');
      })
         .catch((err) => console.error(`Ошибка авторизации пользователя: ${err}`));
   };

   return (
      <main className="login">
         <NavLink to="/" className="navigation__logo">
            <img src={logo} alt="Логотип сайта в виде зелёного кольца" className="logo" />
         </NavLink>
         <h1 className="login__title">Рады видеть!</h1>
         <form className="form" onSubmit={handleSubmit}>
            <label className="login__item">E-mail
               <input
                  className="form__input"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  minLength={2}
                  maxLength={40}
                  value={formValue.email}
                  onChange={handleChange}
                  required>
               </input>
            </label>
            <label className="login__item">Пароль
               <input
                  className="form__input"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  minLength={6}
                  maxLength={30}
                  value={formValue.password}
                  onChange={handleChange}
                  required>
               </input>
               <span className="form__input-error">Что-то пошло не так...</span>
            </label>
            <button type="submit" className="form__button">Войти</button>
            <Link to="/signup" className="login__link">Ещё не зарегистрированы? <span className="login__link-accent">Регистрация</span></Link>
         </form>
      </main >
   )
}

export default Login;