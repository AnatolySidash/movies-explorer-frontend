import React from 'react';
import poster from '../../images/07_movies/pic__01.png';

function MoviesCard() {

   return (
      <article className="moviescard">
         <img src={poster} alt="постер фильма: 33 слова о дизайне" className="moviescard__image"></img>
         <button type="button" className="moviescard__button moviescard__button-add"></button>
         <button type="button" className="moviescard__button moviescard__button-delete"></button>
         <div className="moviescard__info">
            <h2 className="moviescard__name">33 слова о дизайне</h2>
            <p className="moviescard__duration">1ч 17м</p>
         </div>
      </article >
   )
}

export default MoviesCard;