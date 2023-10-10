class MainApi {
   constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
      this._imageUrl = 'https://api.nomoreparties.co';
   }

   _checkResponse(res) {
      if (!res.ok) {
         return res.json().then((err) => {
            return Promise.reject(err.message);
         })
      }
      return res.json();
   }

   getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
         headers: this._headers,
         credentials: "include",
      })
         .then(this._checkResponse);
   }

   addMovie(movie) {
      return fetch(`${this._baseUrl}/movies`, {
         method: "POST",
         headers: this._headers,
         credentials: "include",
         body: JSON.stringify({
            "country": movie.country,
            "director": movie.director,
            "duration": movie.duration,
            "year": movie.year,
            "description": movie.description,
            "image": this._imageUrl + movie.image.url,
            "trailerLink": movie.trailerLink,
            "thumbnail": this._imageUrl + movie.image.formats.thumbnail.url,
            "movieId": movie.id,
            "nameRU": movie.nameRU,
            "nameEN": movie.nameEN,
         })
      })
         .then(this._checkResponse);
   }

   getSavedMovies() {
      return fetch(`${this._baseUrl}/movies`, {
         headers: this._headers,
         credentials: "include",
      })
         .then(this._checkResponse);
   }

   deleteMovie(id) {
      return fetch(`${this._baseUrl}/movies/${id}`, {
         method: "DELETE",
         headers: this._headers,
         body: JSON.stringify({
            "id": id,
         }),
         credentials: "include",
      })
         .then(this._checkResponse);
   }

   editProfile({ name, email }) {
      return fetch(`${this._baseUrl}/users/me`, {
         method: "PATCH",
         headers: this._headers,
         body: JSON.stringify({
            "name": name,
            "email": email
         }),
         credentials: "include",
      })
         .then(this._checkResponse);
   }
}

const mainApi = new MainApi({
   baseUrl: 'http://localhost:4000',
   headers: {
      'Content-Type': 'application/json'
   }
});

export default mainApi;

// baseUrl: 'https://api.movies.sidash.nomoredomainsicu.ru',