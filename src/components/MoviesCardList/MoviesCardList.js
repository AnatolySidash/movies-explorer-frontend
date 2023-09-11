import React from 'react';
import MoviesCard from '../../components/MoviesCard/MoviesCard.js'

function MoviesCardList() {

   return (
      <>
         <ul className="moviescardlist">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
         </ul >
         <button className='moviescardlist__button'>Ещё</button>
      </>
   )
}

export default MoviesCardList;