import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { fb } from '../../utils/firebase';
import SignUp from '../Authentication/SignUp';

const SignUpForm = ({ history, firstName, lastName, email, handleChange, password }) => {
  const [, setInputs] = useState({});
  const [ error, setError ] = useState('');
  const [ signUp, signUpSuccess ] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fb.doCreateUserWithEmailAndPassword(
        email,
        password,
        firstName,
        lastName,
        history
      );
      // console.log(res, 'res')
      if (res.code === 'auth/email-already-in-use') {
        setError(res.message);
        setInputs({ email: '', password: ''})
      } else {
        setInputs({ email: '', password: ''});
        signUpSuccess('You have successfully created an account check your email to continue')
      }
    } catch (err) {
      if(err.code){
        setError(err.message);
        setInputs({ email: '', password: ''})
      }
    }
  };

  const isInvalid =
  // password1 !== password2 ||
  password === '' ||
  email === '' ||
  firstName === '';

  return (

      <SignUp
        fname={firstName}
        lname={lastName}
        email={email}
        password1={password}
        isInvalid={isInvalid}
        success={signUp}
        error={error}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
  );
};

export default withRouter(SignUpForm);
