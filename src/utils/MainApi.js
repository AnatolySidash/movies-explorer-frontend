class MainApi {
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

   getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
         headers: this._headers,
         credentials: "include",
      })
         .then(this._checkResponse);
   }

   addMovie({ id }) {
      return fetch(`${this._baseUrl}/movies`, {
         method: "POST",
         headers: this._headers,
         credentials: "include",
         body: JSON.stringify({
            "id": id,
         })
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