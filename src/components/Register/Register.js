import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../images/01_header/logo.svg';
import * as auth from '../../utils/Auth.js';

function Register({ setSuccessSignUp, onTooltipOpen }) {

   const navigate = useNavigate();

   const [formValue, setFormValue] = React.useState({
      name: '',
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
      const { name, email, password } = formValue;
      auth.register(name, email, password).then((data) => {
         navigate('/movies', { replace: true });
         setSuccessSignUp(true);
         onTooltipOpen();
      })
         .catch((err) => {
            setSuccessSignUp(false);
            onTooltipOpen();
            console.error(`Ошибка регистрации нового пользователя: ${err}`)
         });
   };

   return (
      <main className="register">
         <NavLink to="/" className="navigation__logo">
            <img src={logo} alt="Логотип сайта в виде зелёного кольца" className="logo" />
         </NavLink>
         <h1 className="register__title">Добро пожаловать!</h1>
         <form className="form" onSubmit={handleSubmit}>
            <label className="register__item">Имя
               <input
                  className="form__input"
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value={formValue.name}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={40}
                  required>
               </input>
            </label>
            <label className="register__item">E-mail
               <input
                  className="form__input"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formValue.email}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={40}
                  required>
               </input>
            </label>
            <label className="register__item">Пароль
               <input
                  className="form__input"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={formValue.password}
                  onChange={handleChange}
                  minLength={6}
                  maxLength={30}
                  required>
               </input>
               <span className="form__input-error">Что-то пошло не так...</span>
            </label>
            <button type="submit" className="form__button">Зарегистрироваться</button>
            <Link to="/signin" className="register__link">Уже зарегистрированы? <span className="register__link-accent">Войти</span></Link>
         </form>
      </main >
   )
}

export default Register;