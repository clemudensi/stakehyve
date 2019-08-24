import React, { useState } from 'react';
import PassResetForm from '../Authentication/PassResetForm';
import { fb } from '../../utils/firebase';


const LoginForm = ({ history }) => {

  const [inputs, setInputs] = useState({});
  const [error, setError] = useState('');
  const handleChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  const { code, password } = inputs;

  const handleSubmit = e => {
    e.preventDefault();
    fb.doResetPassword(
      code,
      password)
      .then(() => {
        history.push('/')
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
    <PassResetForm
      handleSubmit={handleSubmit}
      email={code}
      password={password}
      error={error}
      handleChange={handleChange}
    />
  );
};

export default LoginForm;
