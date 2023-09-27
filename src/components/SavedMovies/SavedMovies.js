import React from 'react';
import SavedMoviesSearchForm from '../../components/SavedMoviesSearchForm/SavedMoviesSearchForm.js'
import SavedMoviesCardList from '../../components/SavedMoviesCardList/SavedMoviesCardList.js'
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

function SavedMovies({ onBurgerClick, isLoggedIn, isNoSearchResult, isError, onSaveButtonClick, savedMovies, setNoSearchResult, setSavedMovies }) {

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
         <main className="savedmovies">
            <SavedMoviesSearchForm
               setNoSearchResult={setNoSearchResult}
               setSavedMovies={setSavedMovies}
               startPreloader={startPreloader}
               closePreloader={closePreloader}
               savedMovies={savedMovies}
            />
            <SavedMoviesCardList
               isLoading={isLoading}
               isNoSearchResult={isNoSearchResult}
               isError={isError}
               onSaveButtonClick={onSaveButtonClick}
               savedMovies={savedMovies}
            />
         </main >
         <Footer />
      </>
   )
}

export default SavedMovies;