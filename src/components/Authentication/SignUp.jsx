import React from 'react';
import EOSIcon from '../../assets/images/EOS.svg';
import './signup.css';
import PropTypes from 'prop-types';

const SignUp = ({
  firstName,
  lastName,
  email,
  password,
  handleChange,
  isInvalid,
  success,
  error,
  handleSignUp
}) =>{
  return(
    <body className="nk-body body-wider bg-dark page-loaded chrome no-touch">
      <div className="nk-wrap">

        <main className="nk-pages nk-pages-centered bg-theme">
          <div className="ath-container">
            <div className="ath-header text-center">
              <a href="./" className="ath-logo"><img src={EOSIcon} alt="logo"/></a>
            </div>
            <div className="ath-body">
              <h5 className="ath-heading title">
                      Create Your Account<small className="tc-default">Register and start earning!</small>
              </h5>
              {
                success ?
                  <p style={{ color: 'green'}}>{success}</p> :
                  <p style={{ color: 'red'}}>{error}</p>
              }
              <form action="./">
                <div className="field-item">
                  <div className="field-wrap">
                    <input
                      type="text"
                      className="input-bordered"
                      placeholder="Your Firstname"
                      id={ 'first__name' }
                      size="huge"
                      value={ firstName }
                      onChange={ handleChange }
                      name="firstName"
                    />
                  </div>
                </div>
                <div className="field-item">
                  <div className="field-wrap">
                    <input
                      type="text"
                      className="input-bordered"
                      placeholder="Your Lastname"
                      id={ 'last__name' }
                      size="huge"
                      value={ lastName }
                      onChange={ handleChange }
                      name="lastName"
                    />
                  </div>
                </div>
                <div className="field-item">
                  <div className="field-wrap">
                    <input
                      type="email"
                      className="input-bordered"
                      placeholder="Your Email"
                      id={ 'email_input' }
                      size="huge"
                      value={ email }
                      onChange={ handleChange }
                      name="email"
                    />
                  </div>
                </div>
                <div className="field-item">
                  <div className="field-wrap">
                    <input
                      type="password"
                      className="input-bordered"
                      placeholder="Password"
                      id={ 'pass__input' }
                      size="huge"
                      autoComplete="current-password"
                      value={ password }
                      onChange={ handleChange }
                      name="password"
                    />
                  </div>
                </div>
                <div className="field-item">
                  <input
                    className="input-checkbox"
                    id="agree-term-2"
                    type="checkbox"
                  />
                  <label htmlFor="agree-term-2">I agree to Earnathon <a href="#">Privacy Policy</a> &amp; <a href="#">Terms</a>.</label>
                </div>
                <button
                  className="btn btn-primary btn-block btn-md"
                  type="submit"
                  disabled={ isInvalid }
                  onClick={handleSignUp}
                  size="huge"
                >Create Account</button>
              </form>

            </div>
            <div className="ath-note text-center tc-light">
              Already have an account? <a href="/login"> <strong>Sign in here</strong></a>
            </div>
          </div>
        </main>
      </div>
    </body>

  );
};

SignUp.propTypes = {
  email: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  error: PropTypes.string,
  response: PropTypes.string,
  success: PropTypes.string,
  password: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  isInvalid: PropTypes.func,
  handleSignUp: PropTypes.func,
};

export default SignUp;