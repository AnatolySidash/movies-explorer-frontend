import React from 'react';
import MoviesCard from '../../components/MoviesCard/MoviesCard.js'

function MoviesCardList() {

   return (
      <>
         <div className="moviescardlist">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
         </div >
         <button type="button" className='moviescardlist__button'>Ещё</button>
      </>
   )
}

export default MoviesCardList;