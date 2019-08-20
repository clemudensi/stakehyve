import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { fb } from '../../utils/firebase';
import SignUp from '../Authentication/SignUp';

const SignUpForm = ({ history }) => {
  const [ fname, setFname ] = useState('');
  const [ lname, setLname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password1, setpassword1 ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
     fb.doCreateUserWithEmailAndPassword(
       email,
      password1,
      fname,
      lname
      ).then(() => {
        setFname('');
        setLname('');
        setEmail('');
        setpassword1('');
      })
      .catch((error) =>{
       console.log(error)
     });

     history.push('/verification');
  };

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
        setpassword1={setpassword1}
        isInvalid={isInvalid}
        handleSubmit={handleSubmit}
      />
  );
};

export default withRouter(SignUpForm);
