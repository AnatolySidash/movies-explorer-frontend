import React from 'react';
import Header from './../Header/Header.js';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { useInput } from '../../utils/Validation.js';

function Profile({ onBurgerClick, isLoggedIn, onUpdateUser, onLogout }) {

   const currentUser = React.useContext(CurrentUserContext);

   const [submitButtonActive, setSubmitDataActive] = React.useState(false);
   const [isSuccessProfileUpdate, setSuccessProfileUpdate] = React.useState(false);
   const [isProfileDataChanged, setProfileDataChanged] = React.useState(false);

   const name = useInput(currentUser.name, { isEmpty: true, minLength: 2, isUserName: true });
   const email = useInput(currentUser.email, { isEmpty: true, minLength: 2, isEmail: true });

   function onUserDataChange() {
      setSubmitDataActive(true)
   }

   function handleSubmit(event) {
      event.preventDefault();

      if (currentUser.name !== name.value || currentUser.email !== email.value) {
         onUpdateUser({
            name: name.value,
            email: email.value,
         });
         setProfileDataChanged(true);
         setSuccessProfileUpdate(true);
      }
   }

   return (
      <>
         <Header
            onBurgerClick={onBurgerClick}
            isLoggedIn={isLoggedIn}
         />
         <main className="profile">
            <h1 className="profile__greeting">Привет, {currentUser.name}</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
               <label className="profile__item">Имя
                  <input
                     type="text"
                     placeholder="Имя"
                     className="profile__input"
                     value={name.value}
                     minLength={2}
                     maxLength={40}
                     onChange={(e) => name.onChange(e)}
                     onBlur={(e) => name.onBlur(e)}
                     required>
                  </input>

               </label>
               <label className="profile__item">E-mail
                  <input
                     type="email"
                     placeholder="E-mail"
                     className="profile__input"
                     value={email.value}
                     minLength={2}
                     maxLength={40}
                     onChange={(e) => email.onChange(e)}
                     onBlur={(e) => email.onBlur(e)}
                     required>
                  </input>
               </label>
               {(name.isDirty && name.isEmpty) && <span className="form__input-error">Поле не может быть пустым...</span>}
               {(name.isDirty && name.minLengthError) && <span className="form__input-error">Не менее 2-х символов...</span>}
               {(name.isDirty && name.userNameError) && <span className="form__input-error">Неверный формат имени пользователя</span>}
               {(email.isDirty && email.isEmpty) && <span className="form__input-error">Поле не может быть пустым...</span>}
               {(email.isDirty && email.minLengthError) && <span className="form__input-error">Не менее 2-х символов...</span>}
               {(email.isDirty && email.emailError) && <span className="form__input-error">Неверный формат электронной почты</span>}
               {!submitButtonActive && <button type="button" onClick={onUserDataChange} className="profile__button">Редактировать</button>}
               {(isSuccessProfileUpdate && isProfileDataChanged) && <span className="form__submit-error">Данные пользователя успешно обновлены</span>}
               {submitButtonActive && <button disabled={!name.inputValid || !email.inputValid || (currentUser.name === name.value && currentUser.email === email.value)} type="submit" className="form__button">Сохранить</button>}
            </form>
            <Link to="/">
               {!submitButtonActive && <button type="button" onClick={onLogout} className="profile__exit-button">Выйти из аккаунта</button>}
            </Link>
         </main >
      </>
   )
}

export default Profile;