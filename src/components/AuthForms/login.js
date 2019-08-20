import React, { useState } from 'react';
import Login from '../Authentication/Login';
import { fb } from '../../utils/firebase';


const LoginForm = ({ history }) => {
 
  const [ value, setValue ] = useState('');
  const [ email ] = useState('');
  const [ password1 ] = useState('');
  const handleChange = e => setValue(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    fb.doSignInWithEmailAndPassword(
      email,
      password1,
    ).then(() => {
      history.push('/');
    })
      .catch((error) =>{
        console.log(error)
      });
  };
  return (
    <Login
      handleSubmit={handleSubmit}
      value={ value }
      setValue={setValue}
      handleChange={handleChange}
    />
  );
};

export default LoginForm;
