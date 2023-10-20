import React from 'react';
import MoviesCard from '../../components/MoviesCard/MoviesCard.js'
import Preloader from './../Preloader/Preloader.js';


function MoviesCardList({ movies, isNoSearchResult, isError, onSaveButtonClick, onLikeButtonClick, savedMovies, isLoading }) {

   const [initialCardsQty, setInitialCardsQty] = React.useState(0);
   const [additionalCardsQty, setAdditionalCardsQty] = React.useState(0);
   const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

   const {
      LARGE_SCREEN_SIZE,
      MEDIUM_SCREEN_SIZE,
      SMALL_SCREEN_SIZE,
      MAX_CARDS_QTY,
      MID_CARDS_QTY,
      MIN_CARDS_QTY,
      MAX_EXTRA_CARDS_QTY,
      MID_EXTRA_CARDS_QTY,
      MIN_EXTRA_CARDS_QTY
   } = require('../../utils/Constants.js');

   function handleScreenWidth() {
      setScreenWidth(window.innerWidth);
   }

   function handleMoreButtonClick() {
      setInitialCardsQty(initialCardsQty + additionalCardsQty);
   }

   React.useEffect(() => {
      window.addEventListener('resize', handleScreenWidth);
      return () => {
         window.removeEventListener('resize', handleScreenWidth);
      }
   }, []);

   React.useEffect(() => {

      if (screenWidth >= LARGE_SCREEN_SIZE) {
         setInitialCardsQty(MAX_CARDS_QTY);
         setAdditionalCardsQty(MAX_EXTRA_CARDS_QTY);
      } else if (screenWidth >= MEDIUM_SCREEN_SIZE && screenWidth <= LARGE_SCREEN_SIZE) {
         setInitialCardsQty(MID_CARDS_QTY);
         setAdditionalCardsQty(MID_EXTRA_CARDS_QTY);
      } else if (screenWidth <= SMALL_SCREEN_SIZE) {
         setInitialCardsQty(MIN_CARDS_QTY);
         setAdditionalCardsQty(MIN_EXTRA_CARDS_QTY);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [screenWidth])


   return (
      <>
         {isLoading && < Preloader />}
         <section className="moviescardlist">
            {isNoSearchResult && <p className="moviescardlist__note">Ничего не найдено</p>}
            {isError && <p className="moviescardlist__warning">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
            <ul className="moviescardlist__list">
               {movies.slice(0, initialCardsQty).map((movie) => (
                  <MoviesCard
                     key={movie.id}
                     movie={movie}
                     onSaveButtonClick={onSaveButtonClick}
                     onLikeButtonClick={onLikeButtonClick}
                     savedMovies={savedMovies}
                  />
               ))}
            </ul>
         </section >
         {!isNoSearchResult && (movies.length > initialCardsQty) && <button type="button" onClick={handleMoreButtonClick} className='moviescardlist__button'>Ещё</button>}
      </>
   )
}

export default MoviesCardList;