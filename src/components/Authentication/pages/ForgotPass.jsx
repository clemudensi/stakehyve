import React, { useState } from 'react';
import { fb } from '../../../utils/firebase';
import ForgotPassForm from '../ForgotPassForm';
import PropTypes from 'prop-types';


const ForgotPass = ({ email, handleChange }) => {

  const [, setInputs] = useState({});
  const [error, setError] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fb.sendResetToken(
      email
    )
      .then(() => {
        localStorage.setItem('user', email);
        setResponse('Check your email to continue');
        setInputs({email: ''});
      })
      .catch((error) =>{
        return error.code ?
          setError(error.code) :
          null;
      });
  };

  return (
    <ForgotPassForm
      handleSubmit={handleSubmit}
      response={response}
      email={email}
      error={error}
      handleChange={handleChange}
    />
  );
};

ForgotPass.propTypes = {
  email: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
};

export default ForgotPass;
