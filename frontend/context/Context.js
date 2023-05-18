import React, { createContext, useState } from 'react';
import { saveToken } from '../services/Auth/GetTokenFromDevice';
import { saveUserOnDevice } from '../services/GetUserFromDevice';
import { getWeightFromDevice, saveWeightOnDevice } from '../services/GetWeightFromDevice';

export const Context = createContext();

export const ContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [weights, setWeights] = useState([]);

  const updateUserData = (newUser) => {
    setUser(newUser);
    saveUserOnDevice(newUser)
  };

  const updateToken = (newToken) => {
    setToken(newToken)
    saveToken(newToken)
  }

  const initializeWeightsData = async () => {
      const newWeights = await getWeightFromDevice();
      if (newWeights) {
        setWeights(newWeights);
      }
  }

  const updateWeightsData = (newWeights) => {
    console.log('Context - updateWeightsData')
    setWeights(newWeights);
    saveWeightOnDevice(newWeights);
  };

  return (
    <Context.Provider 
      value={{ 
        user, updateUserData, 
        token, updateToken,
        weights, updateWeightsData, initializeWeightsData
      }}
    >
      {children}
    </Context.Provider>
  );
};
