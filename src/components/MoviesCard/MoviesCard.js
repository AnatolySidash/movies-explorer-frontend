import React from 'react';

function MoviesCard({ card }) {

   const imageUrl = 'https://api.nomoreparties.co';

   let duration = card.duration;
   let hours = Math.floor(duration / 60);
   let minutes = duration % 60;
   const movieDuration = hours + "ч " + minutes + "м";

   return (
      <article className="moviescard">
         <a href={card.trailerLink} target="blank" className='moviescard__link'>
            <img
               src={`${imageUrl}${card.image.url}`}
               alt={card.image.name}
               className="moviescard__image" />
         </a>
         <button type="button" className="moviescard__button moviescard__button-add"></button>
         <button type="button" className="moviescard__button moviescard__button-delete"></button>
         <div className="moviescard__info">
            <h2 className="moviescard__name">{card.nameRU}</h2>
            <p className="moviescard__duration">{movieDuration}</p>
         </div>
      </article >
   )
}

export default MoviesCard;