import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm.js';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList.js';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

function Movies() {

   return (
      <main className="movies">
         <Header />
         <SearchForm />
         <MoviesCardList />
         <Footer />
      </main >
   )
}

export default Movies;