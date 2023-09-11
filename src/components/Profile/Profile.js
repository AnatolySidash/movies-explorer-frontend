import React from 'react';
import Header from './../Header/Header.js';
import { Link } from 'react-router-dom';

function Profile() {

   return (
      <>
         <Header />
         <section className="profile">
            <h2 className="profile__greeting">Привет, Анатолий</h2>
            <form className="profile__form">
               <label className="profile__item">Имя
                  <input
                     type="text"
                     placeholder="Имя"
                     className="profile__input"
                     minLength={2}
                     maxLength={40}
                     required>
                  </input>
               </label>
               <label className="profile__item">E-mail
                  <input
                     type="email"
                     placeholder="E-mail"
                     className="profile__input"
                     minLength={2}
                     maxLength={40}
                     required>
                  </input>
               </label>
               <button type="submit" className="profile__button">Редактировать</button>
            </form>
            <Link to="/">
               <button className="profile__exit-button">Выйти из аккаунта</button>
            </Link>
         </section >
      </>
   )
}

export default Profile;