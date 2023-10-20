import React from 'react';

function SavedMoviesCard({ movie, onSaveButtonClick }) {

   let duration = movie.duration;
   let hours = Math.floor(duration / 60);
   let minutes = duration % 60;
   const movieDuration = hours + "ч " + minutes + "м";

   return (
      <article className="moviescard">
         <a href={movie.trailerLink} target="blank" className='moviescard__link'>
            <img
               src={movie.image}
               alt={movie.image.name}
               className="moviescard__image" />
         </a>
         <button type="button" onClick={() => onSaveButtonClick(movie)} className='moviescard__button moviescard__button-delete'></button>
         <div className="moviescard__info">
            <h2 className="moviescard__name">{movie.nameRU}</h2>
            <p className="moviescard__duration">{movieDuration}</p>
         </div>
      </article >
   )
}

export default SavedMoviesCard;