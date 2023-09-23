import React from 'react';
import moviesApi from '../../utils/MoviesApi.js';

function SearchForm({ setNoSearchResult, setMovies, startPreloader, closePreloader }) {

   const [inputValue, setInputValue] = React.useState('');
   const [isCheckboxChecked, setCheckboxChecked] = React.useState(false);

   function handleSearchChange(event) {
      setInputValue(event.target.value);
   }

   function handleCheckboxChange(event) {
      setCheckboxChecked(event.target.checked);
   }

   function handleSearchMoviesSubmit(event) {
      event.preventDefault();
      startPreloader();
      moviesApi.getMovies().then((movies) => {
         localStorage.setItem('allMovies', JSON.stringify(movies));
      }).catch((err) => {
         console.error(`Ошибка загрузки фильмов: ${err}`);
      });
      const movies = JSON.parse(localStorage.getItem('allMovies'));
      const filteredMovies = movies.filter((movie) => {
         closePreloader();
         if (isCheckboxChecked) {
            return (
               (movie.duration < 40 || movie.duration === 40) &&
               (movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
                  movie.nameEN.toLowerCase().includes(inputValue.toLowerCase()))
            );
         } else {
            return (
               movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
               movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())
            );
         }
      })

      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
      localStorage.setItem('inputValue', inputValue);
      localStorage.setItem('checkboxState', JSON.stringify(isCheckboxChecked));

      if (filteredMovies.length > 0) {
         setMovies(filteredMovies);
         setNoSearchResult(false);
      } else {
         setNoSearchResult(true);
      }
   }

   return (
      <section className="search">
         <form className="searchform" onSubmit={handleSearchMoviesSubmit}>
            <fieldset className='searchform__fieldset'>
               <input
                  className="searchform__input"
                  id="name__input"
                  value={inputValue}
                  type="search"
                  placeholder="Фильм"
                  onChange={handleSearchChange}
                  required>
               </input>
               <button type="submit" className="searchform__button"></button>
            </fieldset>
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

export default SearchForm;