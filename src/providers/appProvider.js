import React from 'react';
import AppContext from '../utils/appContext';
import querySearch from 'stringquery';

export const AuthContext = ({ children }) => {

  const { oobCode } = querySearch(window.location.search);
  return (
    <AppContext.Provider
      value={{
        oobCode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AuthContext;
