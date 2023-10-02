import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useInput } from '../../utils/Validation.js';
import logo from '../../images/01_header/logo.svg';
import * as auth from '../../utils/Auth.js';

function Login({ onLogin }) {

   const navigate = useNavigate();
   const [isSuccessSignIn, setSuccessSignIn] = React.useState(true);

   const email = useInput('', { isEmpty: true, minLength: 2, isEmail: true });
   const password = useInput('', { isEmpty: true, minLength: 6 });

   const handleSubmit = (event) => {
      event.preventDefault();
      auth.login(email.value, password.value).then((data) => {
         onLogin();
         setSuccessSignIn(true);
         navigate('/movies');
      })
         .catch((err) => {
            setSuccessSignIn(false);
            console.error(`Вы ввели неправильный логин или пароль: ${err}`)
         });
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
                  value={email.value}
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                  required>
               </input>
               {(email.isDirty && email.isEmpty) && <span className="form__input-error">Поле не может быть пустым...</span>}
               {(email.isDirty && email.minLengthError) && <span className="form__input-error">Не менее 2-х символов...</span>}
               {(email.isDirty && email.emailError) && <span className="form__input-error">Неверный формат электронной почты</span>}
            </label>
            <label className="login__item">Пароль
               <input
                  className="form__input"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  minLength={6}
                  maxLength={30}
                  value={password.value}
                  onChange={(e) => password.onChange(e)}
                  onBlur={(e) => password.onBlur(e)}
                  required>
               </input>
               {(password.isDirty && password.isEmpty) && <span className="form__input-error">Поле не может быть пустым...</span>}
               {(password.isDirty && password.minLengthError) && <span className="form__input-error">Не менее 6-ти символов...</span>}
            </label>
            {!isSuccessSignIn && <span className="form__submit-error">При авторизации произошла ошибка</span>}
            <button disabled={!email.inputValid || !password.inputValid} type="submit" className="form__button">Войти</button>
            <Link to="/signup" className="login__link">Ещё не зарегистрированы? <span className="login__link-accent">Регистрация</span></Link>
         </form>
      </main >
   )
}

export default Login;