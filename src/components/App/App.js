import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './../Main/Main.js';
import Movies from './../Movies/Movies.js';
import SavedMovies from './../SavedMovies/SavedMovies.js';
import Profile from './../Profile/Profile.js';
import Register from './../Register/Register.js';
import Login from './../Login/Login.js';
import PageNotFound from './../PageNotFound/PageNotFound.js';
import MobileMenu from './../MobileMenu/MobileMenu.js';

// import Preloader from './../Preloader/Preloader.js';

function App() {

  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(true);

  function openMobileMenu() {
    setMobileMenuOpen(true);
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false)
  }

  return (
    <div className="root">
      <div className="page">

        <Routes>

          <Route path="/" element={
            <Main
              onBurgerClick={openMobileMenu}
              isLoggedIn={isLoggedIn}
            />
          } />

          <Route path="/movies" element={
            <Movies
              onBurgerClick={openMobileMenu}
              isLoggedIn={isLoggedIn}
            />
          } />

          <Route path="/saved-movies" element={
            <SavedMovies
              onBurgerClick={openMobileMenu}
              isLoggedIn={isLoggedIn}
            />
          } />

          <Route path="/profile" element={
            <Profile
              onBurgerClick={openMobileMenu}
              isLoggedIn={isLoggedIn}
            />
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

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        />

        {/* <Preloader /> */}

      </div>
    </div>
  );
}

export default App;
