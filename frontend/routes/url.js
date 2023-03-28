import axios from 'axios'

export const BASE_URL = "https://l6wfxjgpl6.execute-api.us-west-2.amazonaws.com/dev";

export const getResponse = (token, path, params) => {

    axios.get( `${BASE_URL}/${path}`,{
        headers: {
          'Content-Type': 'application/json'
          //Authorization: `Bearer ${token}`,
        },
        params: params
      })
        .then(response => {
          // Handle successful response
          console.log(response.data);
          return response;
        })
        .catch(error => {
          // Handle error
          console.error(error.response.data);
          return error;
        });
 }      

