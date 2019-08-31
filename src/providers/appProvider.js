import React, { useState } from 'react';
import AppContext from '../utils/appContext';
import querySearch from 'stringquery';

export const AuthContext = ({ history, children }) => {

  const { oobCode } = querySearch(window.location.search);
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState('');

  const { email, password, firstName, lastName } = inputs;
  // setError('');
  const handleChange = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  };

  return (
    <AppContext.Provider
      value={{
        email,
        password,
        firstName,
        lastName,
        error,
        oobCode,
        handleChange
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AuthContext;
