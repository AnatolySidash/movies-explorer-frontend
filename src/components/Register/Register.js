/* eslint-disable no-useless-escape */
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useInput } from '../../utils/Validation.js';
import logo from '../../images/01_header/logo.svg';
import * as auth from '../../utils/Auth.js';

function Register({ setSuccessSignUp, onTooltipOpen }) {

   const navigate = useNavigate();

   const name = useInput('', { isEmpty: true, minLength: 2, isUserName: true });
   const email = useInput('', { isEmpty: true, minLength: 2, isEmail: true });
   const password = useInput('', { isEmpty: true, minLength: 6 });

   const handleSubmit = (event) => {
      event.preventDefault();
      auth.register(name.value, email.value, password.value).then((data) => {
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
                  value={name.value}
                  onChange={(e) => name.onChange(e)}
                  onBlur={(e) => name.onBlur(e)}
                  minLength={2}
                  maxLength={40}
                  required>
               </input>
               {(name.isDirty && name.isEmpty) && <span className="form__input-error">Поле не может быть пустым...</span>}
               {(name.isDirty && name.minLengthError) && <span className="form__input-error">Не менее 2-х символов...</span>}
               {(name.isDirty && name.userNameError) && <span className="form__input-error">Неверный формат имени пользователя</span>}
            </label>
            <label className="register__item">E-mail
               <input
                  className="form__input"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={email.value}
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                  minLength={2}
                  maxLength={40}
                  required>
               </input>
               {(email.isDirty && email.isEmpty) && <span className="form__input-error">Поле не может быть пустым...</span>}
               {(email.isDirty && email.minLengthError) && <span className="form__input-error">Не менее 2-х символов...</span>}
               {(email.isDirty && email.emailError) && <span className="form__input-error">Неверный формат электронной почты</span>}
            </label>
            <label className="register__item">Пароль
               <input
                  className="form__input"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={password.value}
                  onChange={(e) => password.onChange(e)}
                  onBlur={(e) => password.onBlur(e)}
                  minLength={6}
                  maxLength={30}
                  required>
               </input>
               {(password.isDirty && password.isEmpty) && <span className="form__input-error">Поле не может быть пустым...</span>}
               {(password.isDirty && password.minLengthError) && <span className="form__input-error">Не менее 6-ти символов...</span>}
            </label>
            <button disabled={!name.inputValid || !email.inputValid || !password.inputValid} type="submit" className="form__button">Зарегистрироваться</button>
            <Link to="/signin" className="register__link">Уже зарегистрированы? <span className="register__link-accent">Войти</span></Link>
         </form>
      </main >
   )
}

export default Register;