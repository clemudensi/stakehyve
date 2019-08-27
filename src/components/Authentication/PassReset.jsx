import React, { useState } from 'react';
import querySearch from 'stringquery';
import PassResetForm from '../Authentication/PassResetForm';
import { fb } from '../../utils/firebase';


const LoginForm = ({ history, location }) => {
  const { oobCode } = querySearch(location.search);
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState('');
  const handleChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  const { password } = inputs;
  const handleSubmit = e => {
    e.preventDefault();
    fb.doResetPassword(
      oobCode,
      password)
      .then(() => {
        fb.doSignInWithEmailAndPassword(localStorage.getItem('user'), password).
        then(() => {
          switch ((fb.getCurrentUser()).emailVerified) {
            case true:
              localStorage.removeItem('user');
              history.push('/dashboard');
              break;
            case false:
              setError('Email has not been verified');
              break;
            default:
              return null
          }
        })
      })
      .catch((error) => {
        setError(error.code)
      });
  };

  return (
    <PassResetForm
      history={history}
      email={localStorage.getItem('user')}
      handleSubmit={handleSubmit}
      password={password}
      error={error}
      handleChange={handleChange}
    />
  );
};

export default LoginForm;
