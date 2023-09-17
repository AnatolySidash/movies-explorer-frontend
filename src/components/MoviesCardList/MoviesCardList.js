import React from 'react';
import MoviesCard from '../../components/MoviesCard/MoviesCard.js'
import Preloader from './../Preloader/Preloader.js';

function MoviesCardList({ movies, isLoading }) {

   return (
      <>
         {isLoading && < Preloader />}
         <section className="moviescardlist">
            <ul className="moviescardlist__list">
               {movies.map((card) => (
                  <MoviesCard
                     key={card.id}
                     card={card}
                  />
               ))}
            </ul>
         </section >
         <button type="button" className='moviescardlist__button'>Ещё</button>
      </>
   )
}

export default MoviesCardList;