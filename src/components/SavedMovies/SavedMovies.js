import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm.js'
import SavedMoviesCardList from '../../components/SavedMoviesCardList/SavedMoviesCardList.js'
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

function SavedMovies({ onBurgerClick, isLoggedIn, movies, onSearchMovie, onCheckboxChecked, isLoading, isNoSearchResult, isError, onSaveButtonClick, savedMovies }) {

   return (
      <>
         <Header
            onBurgerClick={onBurgerClick}
            isLoggedIn={isLoggedIn}
         />
         <main className="savedmovies">
            <SearchForm
               onSearchMovie={onSearchMovie}
               onCheckboxChecked={onCheckboxChecked}
            />
            <SavedMoviesCardList
               isLoading={isLoading}
               isNoSearchResult={isNoSearchResult}
               isError={isError}
               movies={movies}
               onSaveButtonClick={onSaveButtonClick}
               savedMovies={savedMovies}
            />
         </main >
         <Footer />
      </>
   )
}

export default SavedMovies;