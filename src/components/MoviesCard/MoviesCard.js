import React from 'react';

function MoviesCard({ card }) {

   const imageUrl = 'https://api.nomoreparties.co';

   return (
      <article className="moviescard">
         <img src={`card.image.${imageUrl}url}`} alt={card.image.name} className="moviescard__image"></img>
         <button type="button" className="moviescard__button moviescard__button-add"></button>
         <button type="button" className="moviescard__button moviescard__button-delete"></button>
         <div className="moviescard__info">
            <h2 className="moviescard__name">{card.nameRU}</h2>
            <p className="moviescard__duration">{card.duration}</p>
         </div>
      </article >
   )
}

export default MoviesCard;