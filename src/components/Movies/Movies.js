import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm.js';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList.js';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

function Movies() {

   return (
      <section className="movies">
         <Header />
         <SearchForm />
         <MoviesCardList />
         <Footer />
      </section >
   )
}

export default Movies;