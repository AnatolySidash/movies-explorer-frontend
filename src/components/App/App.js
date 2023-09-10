import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './../Main/Main.js';
import Movies from './../Movies/Movies.js';
import SavedMovies from './../SavedMovies/SavedMovies.js';
import Profile from './../Profile/Profile.js';
import Register from './../Register/Register.js';
import Login from './../Login/Login.js';
import PageNotFound from './../PageNotFound/PageNotFound.js';
// import Preloader from './../Preloader/Preloader.js';

function App() {

  return (
    <div className="root">
      <div className="page">

        <Routes>

          <Route path="/" element={
            <Main />
          } />

          <Route path="/movies" element={
            <Movies />
          } />

          <Route path="/savedmovies" element={
            <SavedMovies />
          } />

          <Route path="/profile" element={
            <Profile />
          } />

          <Route path="/signup" element={
            <Register />
          } />

          <Route path="/signin" element={
            <Login />
          } />

          <Route path="/*" element={
            <PageNotFound />
          } />

        </Routes>

        {/* <Preloader /> */}

      </div>
    </div>
  );
}

export default App;
