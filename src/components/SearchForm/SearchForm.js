import React from 'react';

function SearchForm({ onSearchMovie, onCheckboxChecked }) {

   const [search, setSearch] = React.useState('');
   const [isCheckboxChecked, setCheckboxChecked] = React.useState(false);

   function handleSearchChange(event) {
      setSearch(event.target.value);
   }

   function handleCheckboxChange(event) {
      setCheckboxChecked(event.target.checked);
   }

   function handleSubmit(event) {
      event.preventDefault();

      onCheckboxChecked({
         isCheckboxChecked: isCheckboxChecked,
      })

      onSearchMovie({
         search: search,
      });

   }

   return (
      <section className="search">
         <form className="searchform" onSubmit={handleSubmit}>
            <fieldset className='searchform__fieldset'>
               <input
                  className="searchform__input"
                  id="name__input"
                  value={search}
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