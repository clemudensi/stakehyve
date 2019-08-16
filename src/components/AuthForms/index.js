import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
// import './LoginForm.scss';
// import {fb} from "../../utils/firebaseSetup"

const LoginForm = () => {
 
  const [value, setValue] = useState('');
  const handleChange = e => setValue(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if(value){
    //   fb.doSignInWithEmail(value)
    console.log(value);
    }
  }
  return (
    <Form onSubmit={handleSubmit} className="form__container">
      <div className="form__title">Log in to Signalz</div>
      <label htmlFor="email__input">Enter Email Address</label>
      <Form.Input
        id={`email__input`}
        size="huge"
        type="email"
        value={value}
        onChange={handleChange}
        name="email"
        placeholder="somebody@email.com"
        className="signalz__input"
      />
      <Form.Button type="submit" size="huge">Login</Form.Button>
    </Form>
  );
};

export default LoginForm;
