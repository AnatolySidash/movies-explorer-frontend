/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Main from './../Main/Main.js';
import Movies from './../Movies/Movies.js';
import SavedMovies from './../SavedMovies/SavedMovies.js';
import Profile from './../Profile/Profile.js';
import Register from './../Register/Register.js';
import Login from './../Login/Login.js';
import InfoTooltip from './../InfoTooltip/InfoTooltip.js';
import PageNotFound from './../PageNotFound/PageNotFound.js';
import MobileMenu from './../MobileMenu/MobileMenu.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute.js';
import * as auth from '../../utils/Auth.js';
import mainApi from '../../utils/MainApi.js';
import moviesApi from '../../utils/MoviesApi.js';


function App() {

  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNoSearchResult, setNoSearchResult] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const [isSuccessSignUp, setSuccessSignUp] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);

  const navigate = useNavigate();

  function openMobileMenu() {
    setMobileMenuOpen(true);
  }

  function startPreloader() {
    setIsLoading(true);
  }

  function closePreloader() {
    setIsLoading(false);
  }

  function handleInfoTooltipOpen() {
    setInfoTooltipOpen(true);
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function closeAllPopups() {
    setMobileMenuOpen(false);
    setInfoTooltipOpen(false);
  }

  React.useEffect(() => {
    if (isLoggedIn) {
      mainApi.getUserInfo().then((data) => {
        setCurrentUser(data.data);
      })
        .catch((err) => {
          console.error(`Ошибка получения данных профиля: ${err}`);
        });
    }
  }, [isLoggedIn]);

  function checkToken() {
    auth.checkToken()
      .then((data) => {
        if (!data) {
          return;
        };
        setLoggedIn(true);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        setLoggedIn(false);
        console.error(`Ошибка токена: ${err}`);
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
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  function filterMovies(movies, inputValue) {
    const filteredMovies = movies.filter((movie) => movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(inputValue.toLowerCase()));
    return filteredMovies;
  }

  function handleSearchMoviesSubmit({ inputValue }) {
    if (isLoggedIn) {
      startPreloader();
      const searchedMovies = moviesApi.getMovies()
        .then((movies) => {
          closePreloader();
          setMovies(filterMovies(movies, inputValue));
        })
        .catch((err) => {
          console.error(`Ошибка загрузки фильмов: ${err}`);
        });
      localStorage.setItem('searchMovies', JSON.stringify(searchedMovies));
      localStorage.setItem('inputValue', JSON.stringify(inputValue));
    }
  }

  function handleCheckboxFilter(isCheckboxChecked) {
    if (isCheckboxChecked) {
      const filteredMovies = movies.filter((movie) => movie.duration < 40 && movie.duration === 40);
      return filteredMovies;
    }
  }

  function handleUpdateUser({ name, email }) {
    mainApi.editProfile({ name: name, email: email })
      .then((data) => {
        setCurrentUser(data.data);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Ошибка получения данных профиля: ${err}`);
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
                  onSearchMovie={handleSearchMoviesSubmit}
                  onCheckboxChecked={handleCheckboxFilter}
                  isLoading={isLoading}
                  isNoSearchResult={isNoSearchResult}
                  isError={isError}
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
                  onUpdateUser={handleUpdateUser}
                  onLogout={logout}
                />}
                isLoggedIn={isLoggedIn} />
            } />

            <Route path="/signup" element={
              <Register
                setSuccessSignUp={setSuccessSignUp}
                onTooltipOpen={handleInfoTooltipOpen}
              />
            } />

            <Route path="/signin" element={
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

          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            isSuccessSignUp={isSuccessSignUp}
          />

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
