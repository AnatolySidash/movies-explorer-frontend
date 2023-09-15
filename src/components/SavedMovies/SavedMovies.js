import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm.js'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList.js'
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

function SavedMovies({ onBurgerClick, isLoggedIn }) {

   return (
      <>
         <Header
            onBurgerClick={onBurgerClick}
            isLoggedIn={isLoggedIn}
         />
         <main className="savedmovies">
            <SearchForm />
            <MoviesCardList />
         </main >
         <Footer />
      </>
   )
}

export default SavedMovies;