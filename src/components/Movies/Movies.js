import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm.js';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList.js';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

function Movies({ onBurgerClick, isLoggedIn, movies, onSearchMovie, onCheckboxChecked, isNoSearchResult, isError, onSaveButtonClick, savedMovies, setNoSearchResult, setMovies }) {

   const [isLoading, setIsLoading] = React.useState(false);

   function startPreloader() {
      setIsLoading(true);
   }

   function closePreloader() {
      setIsLoading(false);
   }

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
               setNoSearchResult={setNoSearchResult}
               setMovies={setMovies}
               startPreloader={startPreloader}
               closePreloader={closePreloader}
            />
            <MoviesCardList
               isNoSearchResult={isNoSearchResult}
               isError={isError}
               movies={movies}
               onSaveButtonClick={onSaveButtonClick}
               savedMovies={savedMovies}
               isLoading={isLoading}
            />
         </main >
         <Footer />
      </>
   )
}

export default Movies;