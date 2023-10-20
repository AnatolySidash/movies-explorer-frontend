import React from 'react';
import mainApi from '../../utils/MainApi.js';

function SavedMoviesSearchForm({ isLoggedIn, setNoSavedSearchResult, setSavedMovies, savedMovies }) {

   const [savedInputValue, setSavedInputValue] = React.useState('');
   const [isSavedCheckboxChecked, setSavedCheckboxChecked] = React.useState(false);
   const [isInputEmpty, setInputEmpty] = React.useState(false);
   const [notFirstRender, setNotFirstRender] = React.useState(false);

   function handleSearchChange(event) {
      setSavedInputValue(event.target.value);
   }

   function handleCheckboxChange(event) {
      setSavedCheckboxChecked(event.target.checked);
   }

   React.useEffect(() => {
      mainApi.getSavedMovies().then((movies) => {
         setSavedMovies(movies);
         setNoSavedSearchResult(false);
      })
         .catch((err) => {
            console.error(`Ошибка получения сохранённых фильмов: ${err.message}`);
         });
   }, [setSavedMovies]);

   React.useEffect(() => {
      setTimeout(() => {
         setNotFirstRender(true);
      }, 100);
   }, []);

   React.useEffect(() => {
      if (notFirstRender) {
         const filteredSavedMovies = savedMovies.filter((movie) => {
            if (isSavedCheckboxChecked) {
               return (
                  (movie.duration < 40 || movie.duration === 40) &&
                  (movie.nameRU.toLowerCase().includes(savedInputValue.toLowerCase()) ||
                     movie.nameEN.toLowerCase().includes(savedInputValue.toLowerCase()))
               );
            } else {
               return (
                  movie.nameRU.toLowerCase().includes(savedInputValue.toLowerCase()) ||
                  movie.nameEN.toLowerCase().includes(savedInputValue.toLowerCase())
               );
            }
         })

         if (filteredSavedMovies.length > 0) {
            setSavedMovies(filteredSavedMovies);
            setNoSavedSearchResult(false);
         } else {
            setSavedMovies([]);
            setNoSavedSearchResult(true);
         }
      }
      //eslint-disable-next-line
   }, [isSavedCheckboxChecked]);

   function handleSearchSavedMoviesSubmit(event) {
      event.preventDefault();
      const filteredSavedMovies = savedMovies.filter((movie) => {
         if (isSavedCheckboxChecked) {
            return (
               (movie.duration < 40 || movie.duration === 40) &&
               (movie.nameRU.toLowerCase().includes(savedInputValue.toLowerCase()) ||
                  movie.nameEN.toLowerCase().includes(savedInputValue.toLowerCase()))
            );
         } else {
            return (
               movie.nameRU.toLowerCase().includes(savedInputValue.toLowerCase()) ||
               movie.nameEN.toLowerCase().includes(savedInputValue.toLowerCase())
            );
         }
      })

      if (filteredSavedMovies.length > 0) {
         setSavedMovies(filteredSavedMovies);
         setNoSavedSearchResult(false);
      } else {
         setSavedMovies([]);
         setNoSavedSearchResult(true);
      }

      if (!savedInputValue) {
         setInputEmpty(true);
      } else {
         setInputEmpty(false);
      }
   }

   return (
      <section className="search">
         <form className="searchform" noValidate onSubmit={handleSearchSavedMoviesSubmit}>
            <fieldset className='searchform__fieldset'>
               <input
                  className="searchform__input"
                  id="name__input"
                  value={savedInputValue}
                  type="search"
                  placeholder="Фильм"
                  onChange={handleSearchChange}
                  required>
               </input>
               <button type="submit" className="searchform__button"></button>
            </fieldset>
            {isInputEmpty && <span className="form__input-error">Нужно ввести ключевое слово</span>}
            <fieldset className='searchform__fieldset'>
               <input
                  className="searchform__checkbox"
                  id="checkbox__input"
                  onChange={handleCheckboxChange}
                  type="checkbox">
               </input>
               <label htmlFor="checkbox__input" className='searchform__label'>Короткометражки</label>
            </fieldset>
         </form >
      </section>
   )
}

export default SavedMoviesSearchForm;