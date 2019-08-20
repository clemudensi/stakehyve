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
 setpassword1,
 isInvalid,
 handleSubmit
}) =>{
  return(
    <body class="nk-body body-wider bg-dark page-loaded chrome no-touch">
      <div class="nk-wrap">

        <main class="nk-pages nk-pages-centered bg-theme">
            <div class="ath-container">
                <div class="ath-header text-center">
                    <a href="./" class="ath-logo"><img src={EOSIcon} alt="logo"/></a>
                </div>
                <div class="ath-body">
                    <h5 class="ath-heading title">Create Your Account<small class="tc-default">Register and start earning!</small></h5>
                    <form action="./">
                        <div class="field-item">
                            <div class="field-wrap">
                                <input
                                  type="text"
                                  class="input-bordered"
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
                        <div class="field-item">
                            <div class="field-wrap">
                                <input
                                  type="text"
                                  class="input-bordered"
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
                        <div class="field-item">
                            <div class="field-wrap">
                                <input
                                  type="email"
                                  class="input-bordered"
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
                        <div class="field-item">
                            <div class="field-wrap">
                                <input
                                  type="password"
                                  class="input-bordered"
                                  placeholder="Password"
                                  id={ 'text__input' }
                                  size="huge"
                                  type="password"
                                  autoComplete="current-password"
                                  value={ password1 }
                                  onChange={ (e) => setpassword1(e.target.value) }
                                  name="email"
                                />
                            </div>
                        </div>
                        <div class="field-item">
                            <input
                              class="input-checkbox"
                              id="agree-term-2"
                              type="checkbox"
                            />
                            <label htmlFor="agree-term-2">I agree to Earnathon <a href="#">Privacy Policy</a> &amp; <a href="#">Terms</a>.</label>
                        </div>
                        <button
                          class="btn btn-primary btn-block btn-md"
                          type="submit"
                          disabled={ isInvalid }
                          onClick={handleSubmit}
                          size="huge"
                        >Create Account</button>
                    </form>



                </div>
                <div class="ath-note text-center tc-light">
                    Already have an account? <a href="page-login.html"> <strong>Sign in here</strong></a>
                </div>
            </div>
        </main>

      </div>


    </body>

  )
}

export default SignUp;