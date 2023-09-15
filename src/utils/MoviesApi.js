class MoviesApi {
   constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
   }

   _checkResponse(res) {
      if (!res.ok) {
         return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
   }

   getMovies() {
      return fetch(`${this._baseUrl}`, {
         headers: this._headers,
         credentials: "include",
      })
         .then(this._checkResponse);
   }

}

const moviesApi = new MoviesApi({
   baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
   headers: {
      'Content-Type': 'application/json'
   }
});

export default moviesApi;