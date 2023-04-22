import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [weights, setWeights] = useState([]);

  const updateUserData = (newUser) => {
    console.log(`user: ${newUser}`)
    setUser(newUser);
  };

  const updateToken = (newToken) => {
    console.log(`token: ${newToken}`)
    setToken(newToken)
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
