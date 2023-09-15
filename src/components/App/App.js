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
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute.js';
import * as auth from '../../utils/Auth.js';
import mainApi from '../../utils/MainApi.js';
import moviesApi from '../../utils/MoviesApi.js';

// import Preloader from './../Preloader/Preloader.js';

function App() {

  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);

  function openMobileMenu() {
    setMobileMenuOpen(true);
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false)
  }

  React.useEffect(() => {
    if (isLoggedIn) {
      moviesApi.getMovies().then((movies) => {
        setMovies(movies);
      }).catch((err) => {
        console.error(`Ошибка загрузки фильмов: ${err}`);
      });
    }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              <ProtectedRoute element={
                <Movies
                  onBurgerClick={openMobileMenu}
                  isLoggedIn={isLoggedIn}
                  movies={movies}
                />}
                isLoggedIn={isLoggedIn} />
            } />

            <Route path="/saved-movies" element={
              <ProtectedRoute element={
                <SavedMovies
                  onBurgerClick={openMobileMenu}
                  isLoggedIn={isLoggedIn}
                />}
                isLoggedIn={isLoggedIn} />
            } />

            <Route path="/profile" element={
              <ProtectedRoute element={
                <Profile
                  onBurgerClick={openMobileMenu}
                  isLoggedIn={isLoggedIn}
                />}
                isLoggedIn={isLoggedIn} />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
