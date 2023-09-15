const baseUrl = "https://api.movies.sidash.nomoredomainsicu.ru";

function getResponseData(res) {
   if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
   }
   return res.json();
}

export const register = (email, password) => {
   return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ email, password })
   })
      .then(getResponseData);
};

export const login = (email, password) => {
   return fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ email, password })
   })
      .then(getResponseData);
};