import React, { useState } from 'react';
import { fb } from '../../../utils/firebase';
import ForgotPassForm from '../ForgotPassForm';


const ForgotPass = ({ history }) => {

  const [inputs, setInputs] = useState({});
  const [error, setError] = useState('');
  const [response, setResponse] = useState('');
  const handleChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  const { email } = inputs;

  const handleSubmit = e => {
    e.preventDefault();
    fb.doResetEmail(
      email,
      )
      .then(() => {
        setResponse('Check your email to continue')
      })
      .catch((error) =>{
        return error.code ?
          setError('User with email address not Found') :
          null
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

export default ForgotPass;
