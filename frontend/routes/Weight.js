import axios from 'axios'
import { BASE_URL } from './url';

// 1. Get User Weight by Weight ID (GET)
// 2. Get All User Weights (GET)
// 3. Save User Weight (POST)

export const getAllUserWeights = async (token, user_id) => {
  const path = `/users/${user_id}/weights`;

  return axios.get( `${BASE_URL}/users/${user_id}/weights`,{
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  })
}

export const getUserWeight = (user_id, weight_id) => {

  const token = "";
  const path = `/users/${user_id}/weight`;
  const params = {
    "weightId": weight_id,
  }

  return axios.get( `${BASE_URL}/${path}`,{
    headers: {
      'Content-Type': 'application/json'
      //Authorization: `Bearer ${token}`,
    },
    params: params
  })
}      

export const saveUserWeight = async (token, user_id, _params) => {
  const path = `/users/${user_id}/weight`;
  const data = {
    "bodyFat": _params.bodyFat,
    "bodyWeight": _params.bodyWeight,
    "hydration": _params.hydration,
    "muscle": _params.muscle,
    "timestamp": _params.timestamp
  }

  return axios.post( `${BASE_URL}/${path}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    }
  })
}      

export const deleteUserWeight = (token, user_id, _params) => {
  const path = `/users/${user_id}/weight`;
  const params = {
    "timestamp": _params.timestamp
  }

  return axios.delete( `${BASE_URL}/${path}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
    params: params
  })
}      