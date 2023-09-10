import React from 'react';

function SearchForm() {

   return (
      <form className="searchform">
         <fieldset className='searchform__fieldset'>
            <input
               className="searchform__input"
               id="name__input"
               type="search"
               placeholder="Фильм"
               required>
            </input>
            <button type="submit" className="searchform__button"></button>
         </fieldset>
         <fieldset className='searchform__fieldset'>
            <input
               className="searchform__checkbox"
               id="checkbox__input"
               type="checkbox" defaultChecked>
            </input>
            <label htmlFor="checkbox__input" className='searchform__label'>Короткометражки</label>
         </fieldset>
      </form >
   )
}

export default SearchForm;