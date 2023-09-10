import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm.js'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList.js'
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

function SavedMovies() {

   return (
      <section className="savedmovies">
         <Header />
         <SearchForm />
         <MoviesCardList />
         <Footer />
      </section >
   )
}

export default SavedMovies;