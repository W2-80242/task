import React, { createContext, useState, useContext } from 'react';

// Create a context to store the user data
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// Provider component to wrap around the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store selected user data

  const selectUser = (userData) => {
    setUser(userData); // Set the selected user data
  };

  return (
    <UserContext.Provider value={{ user, selectUser }}>
      {children}
    </UserContext.Provider>
  );
};