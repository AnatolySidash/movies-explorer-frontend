import React from 'react';
import moviesApi from '../../utils/MoviesApi.js';

function SearchForm({ setNoSearchResult, setError, setMovies }) {

   const [inputValue, setInputValue] = React.useState('');
   const [isCheckboxChecked, setCheckboxChecked] = React.useState(false);
   const [isInputEmpty, setInputEmpty] = React.useState(false);
   const [notFirstRender, setNotFirstRender] = React.useState(false);

   function handleSearchChange(event) {
      setInputValue(event.target.value);
   }

   function handleCheckboxChange(event) {
      setCheckboxChecked(event.target.checked);
   }

   React.useEffect(() => {
      moviesApi.getMovies().then((movies) => {
         localStorage.setItem('allMovies', JSON.stringify(movies));
      }).catch((err) => {
         console.error(`Ошибка загрузки фильмов: ${err}`);
         setError(true);
      });
   }, []);

   React.useEffect(() => {
      if (localStorage.getItem('inputValue')) {
         setInputValue(localStorage.getItem('inputValue'));
      } else {
         setInputValue('');
      }
   }, []);

   React.useEffect(() => {
      if (localStorage.getItem('checkboxState')) {
         setCheckboxChecked(JSON.parse(localStorage.getItem('checkboxState')));
      } else {
         setCheckboxChecked(false);
      }
   }, []);

   React.useEffect(() => {
      if (localStorage.getItem('filteredMovies')) {
         setMovies(JSON.parse(localStorage.getItem('filteredMovies')));
      } else {
         setMovies([]);
      }
   }, []);

   React.useEffect(() => {
      setTimeout(() => {
         setNotFirstRender(true);
      }, 100);
   }, []);

   function handleSearchMoviesSubmit(event) {
      event.preventDefault();
      const AllMovies = JSON.parse(localStorage.getItem('allMovies'));
      const filteredMovies = AllMovies.filter((movie) => {
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
         setMovies(JSON.parse(localStorage.getItem('filteredMovies')));
         setNoSearchResult(false);
      } else {
         setMovies([]);
         setNoSearchResult(true);
      }

      if (!inputValue) {
         setInputEmpty(true);
      } else {
         setInputEmpty(false);
      }
   }

   React.useEffect(() => {
      if (notFirstRender) {
         const movies = JSON.parse(localStorage.getItem('allMovies'));
         const filteredMovies = movies.filter((movie) => {
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
         setMovies(filteredMovies);
      }
      //eslint-disable-next-line
   }, [isCheckboxChecked]);


   return (
      <section className="search">
         <form className="searchform" noValidate onSubmit={handleSearchMoviesSubmit}>
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
            {isInputEmpty && <span className="form__input-error">Введите ваш запрос</span>}
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