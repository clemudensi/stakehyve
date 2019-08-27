import React, { useState } from 'react';
import Login from '../Authentication/Login';
import { fb } from '../../utils/firebase';

const LoginForm = ({ history }) => {

  const [inputs, setInputs] = useState({});
  const [error, setError] = useState('');
  const handleChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };
 
  const { email, password } = inputs;

  const handleSubmit = e => {
    e.preventDefault();
    fb.doSignInWithEmailAndPassword(
      email,
      password)
      .then(() => {
        switch ((fb.getCurrentUser()).emailVerified) {
          case true:
            history.push('/dashboard');
            break;
          case false:
            setError('Email has not been verified');
            break;
          default:
            return null
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
            setError('')
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

export default LoginForm;
