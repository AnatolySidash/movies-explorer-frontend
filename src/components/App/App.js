/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
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


function App() {

  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isError, setError] = React.useState(false);
  const [isNoSearchResult, setNoSearchResult] = React.useState(false);
  const [isNoSavedSearchResult, setNoSavedSearchResult] = React.useState(false);

  const navigate = useNavigate();

  function openMobileMenu() {
    setMobileMenuOpen(true);
  }

  function handleLogin() {
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  }

  function closeAllPopups() {
    setMobileMenuOpen(false);
  }

  function handleCardLike(movie) {
    const isLiked = savedMovies.some(i => i.movieId === movie.id);

    if (!isLiked) {
      mainApi.addMovie(movie)
        .then((movie) => setSavedMovies([movie, ...savedMovies]))
        .catch((err) => console.error(`Ошибка добавления лайка фильму: ${err}`));
    }
  }

  function handleCardDelete(movie) {
    mainApi.deleteMovie(movie._id)
      .then((movie) => setSavedMovies(res => res.filter(i => i._id !== movie._id)))
      .catch((err) => console.error(`Ошибка удаления фильма: ${err}`));
  }

  React.useEffect(() => {
    if (isLoggedIn) {
      mainApi.getUserInfo()
        .then((data) => {
          setCurrentUser(data.data);
        })
        .catch((err) => {
          console.error(`Ошибка получения данных профиля: ${err}`);
        })
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    if (isLoggedIn) {
      mainApi.getSavedMovies().then((movies) => {
        setSavedMovies(movies);
        localStorage.setItem('allSavedMovies', JSON.stringify(movies));
      })
        .catch((err) => {
          console.error(`Ошибка получения сохранённых фильмов: ${err.message}`);
        });
    }
  }, [isLoggedIn]);

  function checkToken() {
    auth.checkToken()
      .then((data) => {
        if (!data) {
          return;
        };
        localStorage.setItem('isLoggedIn', 'true');
        setLoggedIn(true);
      })
      .catch((err) => {
        localStorage.clear();
        setLoggedIn(false);
        console.error(`Ошибка: ${err}`);
      });
  }

  React.useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function logout() {
    auth.clearCookie()
      .then((res) => {
        setLoggedIn(false);
        localStorage.clear();
        setCurrentUser({});
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

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
                  isNoSearchResult={isNoSearchResult}
                  setNoSearchResult={setNoSearchResult}
                  isError={isError}
                  setError={setError}
                  onSaveButtonClick={handleCardLike}
                  onLikeButtonClick={handleCardDelete}
                  savedMovies={savedMovies}
                  setMovies={setMovies}
                />}
                isLoggedIn={isLoggedIn} />
            } />

            <Route path="/saved-movies" element={
              <ProtectedRoute element={
                <SavedMovies
                  onBurgerClick={openMobileMenu}
                  isLoggedIn={isLoggedIn}
                  isError={isError}
                  setError={setError}
                  onSaveButtonClick={handleCardDelete}
                  isNoSavedSearchResult={isNoSavedSearchResult}
                  setNoSavedSearchResult={setNoSavedSearchResult}
                  savedMovies={savedMovies}
                  setMovies={setMovies}
                  setSavedMovies={setSavedMovies}
                />}
                isLoggedIn={isLoggedIn} />
            } />

            <Route path="/profile" element={
              <ProtectedRoute element={
                <Profile
                  onBurgerClick={openMobileMenu}
                  isLoggedIn={isLoggedIn}
                  onLogout={logout}
                  setCurrentUser={setCurrentUser}
                  closeAllPopups={closeAllPopups}
                />}
                isLoggedIn={isLoggedIn} />
            } />

            <Route path="/signup" element={isLoggedIn ?
              <Navigate to="/movies" replace /> :
              <Register
                onLogin={handleLogin}
              />
            } />

            <Route path="/signin" element={isLoggedIn ?
              <Navigate to="/movies" replace /> :
              <Login
                onLogin={handleLogin}
              />
            } />

            <Route path="/*" element={
              <PageNotFound />
            } />

          </Routes>

          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={closeAllPopups}
          />

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
