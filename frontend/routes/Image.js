import axios from 'axios'
import { BASE_URL } from './url';

// 1. Get User Weight by Weight ID (GET)
// 2. Get All User Weights (GET)
// 3. Save User Weight (POST)

export const getAllUserWeights = async (user_id) => {
  const token = "";
  const path = `${user_id}/weights`;

  return axios.get( `${BASE_URL}/${path}`,{
    headers: {
      'Content-Type': 'application/json'
      //Authorization: `Bearer ${token}`,
    },
  })
}

export const getUserImage = (user_id, image_id) => {

  const token = "";
  const path = `${user_id}/images`;
  const params = {
    "imageId": image_id,
  }

  return axios.get( `${BASE_URL}/${path}`,{
    headers: {
      'Content-Type': 'application/json'
      //Authorization: `Bearer ${token}`,
    },
    params: params
  })
}      

export const saveUserImage = (user_id, _params) => {

  const token = "";
  const path = `${user_id}/images`;
  const data = {
    "imageUrl": _params.imageUrl,
    "view": _params.view,
    "imageId": _params.imageId ? _params.imageId : "24355",
    "timestamp": _params.timestamp ? _params.timestamp :  "2023-03-28"
  }

  return axios.post( `${BASE_URL}/${path}`, data, {
    headers: {
      'Content-Type': 'application/json'
      //Authorization: `Bearer ${token}`,
    }
  })
}      