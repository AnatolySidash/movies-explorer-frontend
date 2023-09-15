import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm.js';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList.js';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

function Movies({ onBurgerClick, isLoggedIn }) {

   return (
      <>
         <Header
            onBurgerClick={onBurgerClick}
            isLoggedIn={isLoggedIn}
         />
         <main className="movies">
            <SearchForm />
            <MoviesCardList />
         </main >
         <Footer />
      </>
   )
}

export default Movies;