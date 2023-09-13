import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm.js';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList.js';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

function Movies({ isOpen, onBurgerClick, isLoggedIn }) {

   return (
      <main className="movies">
         <Header
            isOpen={isOpen}
            onBurgerClick={onBurgerClick}
            isLoggedIn={isLoggedIn}
         />
         <SearchForm />
         <MoviesCardList />
         <Footer />
      </main >
   )
}

export default Movies;