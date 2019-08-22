import React from 'react';
import EOSIcon from "../../assets/images/EOS.svg";
import './signup.css';
import { Form } from 'semantic-ui-react';

const SignUp = ({
 fname,
 setFname,
 lname,
 setLname,
 email,
 setEmail,
 password1,
 setPassword,
 isInvalid,
  success,
  error,
 handleSubmit
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
                                  type="text"
                                  value={ fname }
                                  onChange={ (e) => setFname(e.target.value) }
                                  name="firstname"
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
                                  type="test"
                                  value={ lname }
                                  onChange={ (e) => setLname(e.target.value) }
                                  name="Lastname"
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
                                  type="test"
                                  value={ email }
                                  onChange={ (e) => setEmail(e.target.value) }
                                  name="Lastname"
                                />
                            </div>
                        </div>
                        <div className="field-item">
                            <div className="field-wrap">
                                <input
                                  type="password"
                                  className="input-bordered"
                                  placeholder="Password"
                                  id={ 'text__input' }
                                  size="huge"
                                  type="password"
                                  autoComplete="current-password"
                                  value={ password1 }
                                  onChange={ (e) => setPassword(e.target.value) }
                                  name="email"
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
                          onClick={handleSubmit}
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

  )
}

export default SignUp;