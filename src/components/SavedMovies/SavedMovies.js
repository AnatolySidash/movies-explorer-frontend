import React from 'react';
import SavedMoviesSearchForm from '../../components/SavedMoviesSearchForm/SavedMoviesSearchForm.js'
import SavedMoviesCardList from '../../components/SavedMoviesCardList/SavedMoviesCardList.js'
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

function SavedMovies({ onBurgerClick, isLoggedIn, isError, onSaveButtonClick, isNoSavedSearchResult, setNoSavedSearchResult, savedMovies, setSavedMovies }) {

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
               setSavedMovies={setSavedMovies}
               startPreloader={startPreloader}
               closePreloader={closePreloader}
               setNoSavedSearchResult={setNoSavedSearchResult}
               savedMovies={savedMovies}
               isLoggedIn={isLoggedIn}
            />
            <SavedMoviesCardList
               isLoading={isLoading}
               isError={isError}
               onSaveButtonClick={onSaveButtonClick}
               isNoSavedSearchResult={isNoSavedSearchResult}
               savedMovies={savedMovies}
            />
         </main >
         <Footer />
      </>
   )
}

export default SavedMovies;