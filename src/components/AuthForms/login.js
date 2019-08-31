import React, { useState } from 'react';
import Login from '../Authentication/Login';
import { fb } from '../../utils/firebase';
import PropTypes from 'prop-types';

const LoginForm = ({ history, email, password, handleChange }) => {

  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fb.doSignInWithEmailAndPassword(
      email,
      password)
      .then(() => {
        switch ((fb.getCurrentUser()).emailVerified) {
        case true:
          window.location.replace('/dashboard');
          break;
        case false:
          setError('Email has not been verified');
          break;
        default:
          return null;
        }
      })
      .catch((error) =>{
        switch (error.code) {
        case 'auth/wrong-password':
          setError('Wrong Password');
          break;
        case 'auth/user-not-found':
          setError('User with email address not Found');
          break;
        default:
          setError('');
        }
      });
  };

  return (
    <Login
      handleSubmit={handleSubmit}
      email={email}
      password={password}
      error={error}
      handleChange={handleChange}
      history={history}
    />
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
  handleChange: PropTypes.func,
  history: PropTypes.object,
};

export default LoginForm;
