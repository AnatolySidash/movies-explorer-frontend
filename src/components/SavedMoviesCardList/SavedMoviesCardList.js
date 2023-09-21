import React from 'react';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard.js'
import Preloader from '../Preloader/Preloader.js';

function SavedMoviesCardList({ isLoading, isNoSearchResult, isError, onSaveButtonClick, savedMovies }) {

   return (
      <>
         {isLoading && < Preloader />}
         <section className="moviescardlist">
            {isNoSearchResult && <p className="moviescardlist__note">Ничего не найдено</p>}
            {isError && <p className="moviescardlist__warning">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
            <ul className="moviescardlist__list">
               {savedMovies.map((movie) => (
                  <SavedMoviesCard
                     key={movie._id}
                     movie={movie}
                     onSaveButtonClick={onSaveButtonClick}
                     savedMovies={savedMovies}
                  />
               ))}
            </ul>
         </section >
      </>
   )
}

export default SavedMoviesCardList;