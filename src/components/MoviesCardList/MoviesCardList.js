import React from 'react';
import MoviesCard from '../../components/MoviesCard/MoviesCard.js'

function MoviesCardList() {

   return (
      <>
         <section className="moviescardlist">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
         </section >
         <button type="button" className='moviescardlist__button'>Ещё</button>
      </>
   )
}

export default MoviesCardList;