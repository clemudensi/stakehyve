import React, { useState } from 'react';
import querySearch from 'stringquery';
import PassResetForm from '../Authentication/PassResetForm';
import { fb } from '../../utils/firebase';
import PropTypes from 'prop-types';


const PassReset = ({ history, oobCode, password, handleChange }) => {
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fb.doResetPassword(
      oobCode,
      password
    )
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
              return null;
            }
          });
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-action-code') {
          setError('Reset code has expired or have been used previously');
        } else {
          setError(error.code);
        }
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

PassReset.propTypes = {
  oobCode: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func,
  history: PropTypes.object,
};

export default PassReset;
