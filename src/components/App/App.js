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

  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const [isMobileLayout, setMobileLayout] = React.useState(true);

  function handleMobileMenuOpen() {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(true);
    }
  }

  return (
    <div className="root">
      <div className="page">

        <Routes>

          <Route path="/" element={
            <Main
              isOpen={isMobileMenuOpen}
              onBurgerClick={handleMobileMenuOpen}
              isLoggedIn={isLoggedIn}
              isMobile={isMobileLayout}
            />
          } />

          <Route path="/movies" element={
            <Movies
              isOpen={isMobileMenuOpen}
              onBurgerClick={handleMobileMenuOpen}
              isLoggedIn={isLoggedIn}
              isMobile={isMobileLayout}
            />
          } />

          <Route path="/saved-movies" element={
            <SavedMovies
              isOpen={isMobileMenuOpen}
              onBurgerClick={handleMobileMenuOpen}
              isLoggedIn={isLoggedIn}
              isMobile={isMobileLayout}
            />
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
