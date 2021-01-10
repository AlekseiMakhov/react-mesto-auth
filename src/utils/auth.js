const BASE_URL = 'https://auth.nomoreparties.co';

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
    .then((response => response.json()))
    .then((data) => {
      if (data){
        localStorage.setItem('token', data.token);
        return data;
      }
    })
    .catch(err => console.log(err))
  };

  export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
    .then((response) => { 
      return response.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
  };
  
  export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => res.json())
    .then(data => data)
  }