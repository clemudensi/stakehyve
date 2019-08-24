import React, { useState } from 'react';
import FirebaseContext from '../utils/appContext';

export const LoginForm = ({ history, children }) => {

  const [inputs, setInputs] = useState({});
  const [error, setError] = useState('');

  const { email, password } = inputs;

  return (
    <FirebaseContext.Provider
      value={{
        email: () => {
          setInputs({ email })
        },
        password: () => {
          setInputs({ password })
        },
        error: () => {
          setError({ error })
        },
        handleChange: event => {
          event.persist();
          setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        },
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};