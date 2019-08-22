import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { fb } from '../../utils/firebase';
import SignUp from '../Authentication/SignUp';

const SignUpForm = ({ history }) => {
  const [ fname, setFname ] = useState('');
  const [ lname, setLname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password1, setPassword ] = useState('');
  // const [ result, response ] = useState('');
  const [ error, setError ] = useState('');
  const [ signUp, signUpSuccess ] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fb.doCreateUserWithEmailAndPassword(
        email,
        password1,
        fname,
        lname
      );
      // console.log(res, 'res');
      // response(res);
      switch (res.code) {
        case 'auth/email-already-in-use':
          setError(res.message);
          break;
        case '':
          signUpSuccess('');
          break;
        default:
          return res
      }
      if (res.code !== 'auth/email-already-in-use' || undefined){
        setFname('');
        setLname('');
        setEmail('');
        setPassword('');
        signUpSuccess('You have successfully created an account check your email to continue')
      }
    } catch (err) {
      if(err.code){
        setError(err.message)
      }
    }
  };
  // console.log(result, 'Rez')

  const isInvalid =
  // password1 !== password2 ||
  password1 === '' ||
  email === '' ||
  fname === '';

  return (

      <SignUp
        fname={fname}
        setFname={setFname}
        lname={lname}
        setLname={setLname}
        email={email}
        setEmail={setEmail}
        password1={password1}
        setPassword={setPassword}
        isInvalid={isInvalid}
        success={signUp}
        error={error}
        handleSubmit={handleSubmit}
      />
  );
};

export default withRouter(SignUpForm);
