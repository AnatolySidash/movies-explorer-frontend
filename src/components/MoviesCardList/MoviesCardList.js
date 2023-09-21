import React from 'react';
import MoviesCard from '../../components/MoviesCard/MoviesCard.js'
import Preloader from './../Preloader/Preloader.js';

function MoviesCardList({ movies, isLoading, isNoSearchResult, isError, onSaveButtonClick, savedMovies }) {

   return (
      <>
         {isLoading && < Preloader />}
         <section className="moviescardlist">
            {isNoSearchResult && <p className="moviescardlist__note">Ничего не найдено</p>}
            {isError && <p className="moviescardlist__warning">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
            <ul className="moviescardlist__list">
               {movies.map((movie) => (
                  <MoviesCard
                     key={movie.id}
                     movie={movie}
                     onSaveButtonClick={onSaveButtonClick}
                     savedMovies={savedMovies}
                  />
               ))}
            </ul>
         </section >
         {!isNoSearchResult && <button type="button" className='moviescardlist__button'>Ещё</button>}
      </>
   )
}

export default MoviesCardList;