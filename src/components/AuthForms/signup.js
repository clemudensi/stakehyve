import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { withRouter } from "react-router";
import {fb} from '../../utils/firebase';
// import './LoginForm.scss';
// import {fb} from "../../utils/firebaseSetup"

const SignUpForm = ({history}) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setpassword1] = useState('');
  // const [password2, setpassword2] = useState('');


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

     history.push("/verification");
  };

  const isInvalid =
  // password1 !== password2 ||
  password1 === '' ||
  email === '' ||
  fname === '';

  return (
    <Form onSubmit={handleSubmit} className="form__container">
      <div className="form__title">signup in to Signalz</div>
      <label htmlFor="email__input">Enter First Name</label>
      <Form.Input
        id={`email__input`}
        size="huge"
        type="text"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        name="firstname"
        placeholder="Firstname"
        className="signalz__input"
      />
      <label htmlFor="email__input">Enter Last Name</label>
      <Form.Input
        id={`email_input`}
        size="huge"
        type="test"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        name="Lastname"
        placeholder="Last Name"
        className="signalz__input"
      />
      <label htmlFor="email__input">Enter Email Address</label>
      <Form.Input
        id={`email__iput`}
        size="huge"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        autoComplete="none"
        placeholder="somebody@email.com"
        className="signalz__input"
      />

<label htmlFor="email__input">Enter Password</label>
      <Form.Input
        id={`text__input`}
        size="huge"
        type="password"
        autoComplete="current-password"
        value={password1}
        onChange={(e) => setpassword1(e.target.value)}
        name="email"
        placeholder="your password"
        className="signalz__input"
      />
      <Form.Button type="submit" disabled={isInvalid} size="huge">Login</Form.Button>
    </Form>
  );
};

export default withRouter(SignUpForm);
