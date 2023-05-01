import React, { createContext, useState } from 'react';
import { saveToken } from '../services/Auth/GetTokenFromDevice';
import { saveUserOnDevice } from '../services/GetUserFromDevice';

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

  const updateWeightsData = (newWeights) => {
    setWeights(newWeights);
  };

  return (
    <Context.Provider 
      value={{ 
        user, updateUserData, 
        token, updateToken,
        weights, updateWeightsData 
      }}
    >
      {children}
    </Context.Provider>
  );
};
