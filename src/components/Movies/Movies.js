import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm.js';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList.js';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

function Movies({ onBurgerClick, isLoggedIn, movies, onSearchMovie, onCheckboxChecked }) {

   return (
      <>
         <Header
            onBurgerClick={onBurgerClick}
            isLoggedIn={isLoggedIn}
         />
         <main className="movies">
            <SearchForm
               onSearchMovie={onSearchMovie}
               onCheckboxChecked={onCheckboxChecked}
            />
            <MoviesCardList
               movies={movies}
            />
         </main >
         <Footer />
      </>
   )
}

export default Movies;