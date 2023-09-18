import React from 'react';
import Header from './../Header/Header.js';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Profile({ onBurgerClick, isLoggedIn, onUpdateUser, onLogout }) {

   const [name, setName] = React.useState('');
   const [email, setEmail] = React.useState('');

   const currentUser = React.useContext(CurrentUserContext);

   function handleNameChange(event) {
      setName(event.target.value);
   }

   function handleEmailChange(event) {
      setEmail(event.target.value);
   }

   React.useEffect(() => {
      if (currentUser.name) {
         setName(currentUser.name);
      }
      if (currentUser.email) {
         setEmail(currentUser.email);
      }
   }, [currentUser]);

   function handleSubmit(event) {
      event.preventDefault();

      // Передаём значения управляемых компонентов во внешний обработчик
      onUpdateUser({
         name: name,
         email: email,
      });
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
                     value={name}
                     minLength={2}
                     maxLength={40}
                     onChange={handleNameChange}
                     required>
                  </input>
               </label>
               <label className="profile__item">E-mail
                  <input
                     type="email"
                     placeholder="E-mail"
                     className="profile__input"
                     value={email}
                     minLength={2}
                     maxLength={40}
                     onChange={handleEmailChange}
                     required>
                  </input>
               </label>
               <button type="submit" className="profile__button">Редактировать</button>
            </form>
            <Link to="/">
               <button type="button" onClick={onLogout} className="profile__exit-button">Выйти из аккаунта</button>
            </Link>
         </main >
      </>
   )
}

export default Profile;