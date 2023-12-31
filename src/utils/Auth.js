const baseUrl = "https://api.movies.sidash.nomoredomainsicu.ru";

// const baseUrl = "http://localhost:4000";


function getResponseData(res) {
   if (!res.ok) {
      return res.json().then((err) => {
         return Promise.reject(err.message);
      })
   }
   return res.json();
}

export const register = (name, email, password) => {
   return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ name, email, password })
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

export const clearCookie = () => {
   return fetch(`${baseUrl}/signout`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      credentials: "include",
   })
      .then(getResponseData);
}

export const checkToken = () => {
   return fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
   })
      .then(getResponseData);
};