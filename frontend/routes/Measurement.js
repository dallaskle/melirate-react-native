import axios from 'axios'
import { BASE_URL } from './url';

// 1. Get User Measurement by Measurement ID (GET)
// 2. Get All User Measurements (GET)
// 3. Save User Measurement (POST)

export const getAllUserMeasurements = async (user_id) => {
  const token = "";
  const path = `${user_id}/measurements`;

  return axios.get( `${BASE_URL}/${path}`,{
    headers: {
      'Content-Type': 'application/json'
      //Authorization: `Bearer ${token}`,
    },
  })
}

export const getUserMeasurement = (user_id, measurement_id) => {

  const token = "";
  const path = `/${user_id}/measurement`;
  const params = {
    "measurementId": measurement_id,
  }

  return axios.get( `${BASE_URL}/${path}`,{
    headers: {
      'Content-Type': 'application/json'
      //Authorization: `Bearer ${token}`,
    },
    params: params
  })
}      

export const saveUserMeasurement = (user_id, _params) => {

  const token = "";
  const path = `/${user_id}/measurement`;
  const data = {
    "arms": _params.arms,
    "calves": _params.calves,
    "chest": _params.chest,
    "shoulders": _params.shoulders, 
    "stomach": _params.stomach,
    "thighs": _params.thighs,
    "measurementId": Math.floor(Math.random * 100000),
    "timestamp": "2023-03-28"
  }

  return axios.post( `${BASE_URL}/${path}`, data, {
    headers: {
      'Content-Type': 'application/json'
      //Authorization: `Bearer ${token}`,
    }
  })
}      