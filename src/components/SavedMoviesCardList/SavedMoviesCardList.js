import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js'
import Preloader from '../Preloader/Preloader.js';

function SavedMoviesCardList({ movies, isLoading, isNoSearchResult, isError }) {

   return (
      <>
         {isLoading && < Preloader />}
         <section className="moviescardlist">
            {isNoSearchResult && <p className="moviescardlist__note">Ничего не найдено</p>}
            {isError && <p className="moviescardlist__warning">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
            <ul className="moviescardlist__list">
               {movies.map((card) => (
                  <MoviesCard
                     key={card.id}
                     card={card}
                  />
               ))}
            </ul>
         </section >
      </>
   )
}

export default SavedMoviesCardList;