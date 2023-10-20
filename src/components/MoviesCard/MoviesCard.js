import React from 'react';

function MoviesCard({ movie, onSaveButtonClick, onLikeButtonClick, savedMovies }) {

   const imageUrl = 'https://api.nomoreparties.co';

   let duration = movie.duration;
   let hours = Math.floor(duration / 60);
   let minutes = duration % 60;
   const movieDuration = hours + "ч " + minutes + "м";

   const isLiked = savedMovies.some(i => i.movieId === movie.id);
   const savedMovie = savedMovies.find(i => i.movieId === movie.id);
   const movieSaveButtonClassName = (`moviescard__button moviescard__button-add ${isLiked ? 'moviescard__button moviescard__button-delete' : ''}`);

   return (
      <article className="moviescard">
         <a href={movie.trailerLink} target="blank" className='moviescard__link'>
            <img
               src={`${imageUrl}${movie.image.url}`}
               alt={movie.image.name}
               className="moviescard__image" />
         </a>
         <button type="button" onClick={() => onSaveButtonClick(movie)} className={movieSaveButtonClassName}></button>
         {isLiked && <button type="button" onClick={() => onLikeButtonClick(savedMovie)} className="moviescard__button moviescard__button-add_active"></button>}
         <div className="moviescard__info">
            <h2 className="moviescard__name">{movie.nameRU}</h2>
            <p className="moviescard__duration">{movieDuration}</p>
         </div>
      </article >
   )
}

export default MoviesCard;