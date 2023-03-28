import axios from 'axios'
import { BASE_URL } from './url';

// 1. Get User Weight by Weight ID (GET)
// 2. Get All User Weights (GET)
// 3. Save User Weight (POST)

export const getAllUserWeights = async (user_id) => {
  const token = "";
  const path = `/${user_id}/weights`;

  return axios.get( `${BASE_URL}/${path}`,{
    headers: {
      'Content-Type': 'application/json'
      //Authorization: `Bearer ${token}`,
    },
  })
}

export const getUserWeight = (user_id, weight_id) => {

  const token = "";
  const path = `/${user_id}/weight`;
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

export const saveUserWeight = (user_id, _params) => {

  const token = "";
  const path = `/${user_id}/weight`;
  const data = {
    "bodyFat": _params.bodyFat,
    "bodyWeight": _params.bodyWeight,
    "hydration": _params.hydration,
    "muscle": _params.muscle,
    "weightId": "24354",
    "timestamp": "2023-03-28"
  }

  return axios.post( `${BASE_URL}/${path}`, data, {
    headers: {
      'Content-Type': 'application/json'
      //Authorization: `Bearer ${token}`,
    }
  })
}      