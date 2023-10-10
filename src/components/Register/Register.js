/* eslint-disable no-useless-escape */
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useInput } from '../../utils/Validation.js';
import logo from '../../images/01_header/logo.svg';
import * as auth from '../../utils/Auth.js';

function Register({ onLogin }) {

   const [isError, setError] = React.useState(false);
   const [errorMessage, setErrorMessage] = React.useState({});
   const [isSubmitting, setIsSubmitting] = React.useState(false);

   function handleErrorMessage() {
      setError(true);
   }

   const navigate = useNavigate();

   const name = useInput('', { isEmpty: true, minLength: 2, isUserName: true });
   const email = useInput('', { isEmpty: true, minLength: 2, isEmail: true });
   const password = useInput('', { isEmpty: true, minLength: 8 });

   const handleSubmit = (event) => {
      setIsSubmitting(true);
      event.preventDefault();
      auth.register(name.value, email.value, password.value).then((data) => {
         console.log(data);
         auth.login(data.email, password.value).then((data) => {
            onLogin();
            navigate('/movies', { replace: true });
            setIsSubmitting(false);
         })
      })
         .catch((err) => {
            handleErrorMessage();
            console.error(`Ошибка: ${err}`);
            setErrorMessage({
               message: err,
            })
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
               {(name.isDirty && name.isEmpty) && <span className="form__input-error">Поле не может быть пустым</span>}
               {(name.isDirty && name.minLengthError) && <span className="form__input-error">Не менее 2-х символов</span>}
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
               {(email.isDirty && email.isEmpty) && <span className="form__input-error">Поле не может быть пустым</span>}
               {(email.isDirty && email.minLengthError) && <span className="form__input-error">Не менее 2-х символов</span>}
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
                  minLength={8}
                  maxLength={30}
                  required>
               </input>
               {(password.isDirty && password.isEmpty) && <span className="form__input-error">Поле не может быть пустым</span>}
               {(password.isDirty && password.minLengthError) && <span className="form__input-error">Не менее 8-ми символов</span>}
            </label>
            {isError && <span className="form__input-error form__input-error_main">{errorMessage.message}</span>}
            <button disabled={!name.inputValid || !email.inputValid || !password.inputValid || isSubmitting} type="submit" className="form__button">Зарегистрироваться</button>
            <Link to="/signin" className="register__link">Уже зарегистрированы? <span className="register__link-accent">Войти</span></Link>
         </form>
      </main >
   )
}

export default Register;