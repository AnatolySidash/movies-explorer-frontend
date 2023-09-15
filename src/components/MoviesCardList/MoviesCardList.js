import React from 'react';
import MoviesCard from '../../components/MoviesCard/MoviesCard.js'

function MoviesCardList() {

   return (
      <>
         <section className="moviescardlist">
            <ul className="moviescardlist__list">
               <li className="moviescardlist__item">
                  <MoviesCard />
               </li>
               <li className="moviescardlist__item">
                  <MoviesCard />
               </li>
               <li className="moviescardlist__item">
                  <MoviesCard />
               </li>
               <li className="moviescardlist__item">
                  <MoviesCard />
               </li>
               <li className="moviescardlist__item">
                  <MoviesCard />
               </li>
            </ul>
         </section >
         <button type="button" className='moviescardlist__button'>Ещё</button>
      </>
   )
}

export default MoviesCardList;