import axios from 'axios'
import { BASE_URL } from './url';

// 1. Login (GET)
// 2. Signup (POST)

export const login = (email, password) => {

  const token = "";
  const path = `/users/login`;
  const data = {
    "email": email,
    "password": password,
  }

  return axios.post( `${BASE_URL}/${path}`, data, {
    headers: {
      'Content-Type': 'application/json'
      //Authorization: `Bearer ${token}`,
    }
  })
}      

export const signup = (email, password) => {
  const token = "";
  const path = `/users`;
  const data = {
    "email": email,
    "password": password,
  }

  return axios.post( `${BASE_URL}/${path}`, data, {
    headers: {
      'Content-Type': 'application/json'
      //Authorization: `Bearer ${token}`,
    }
  })
}      

export const getUserFromToken = async (token) => {
  const path = `/users/token`;

  return axios.get(`${BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    },
  });
};
