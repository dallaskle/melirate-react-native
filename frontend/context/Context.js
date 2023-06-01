import React, { createContext, useState } from 'react';
import { saveToken, deleteTokenFromDevice } from '../services/Auth/GetTokenFromDevice';
import { saveUserOnDevice, deleteUserOnDevice } from '../services/GetUserFromDevice';
import { getWeightFromDevice, saveWeightOnDevice, deleteAllWeightOnDevice } from '../services/GetWeightFromDevice';

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

  const logoutUser = () => {
    console.log('logout')
    setUser(null)
    setToken(null)
    setWeights([])
    deleteTokenFromDevice()
    deleteUserOnDevice()
    deleteAllWeightOnDevice()
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
        user, updateUserData, logoutUser,
        token, updateToken,
        weights, updateWeightsData, initializeWeightsData
      }}
    >
      {children}
    </Context.Provider>
  );
};
