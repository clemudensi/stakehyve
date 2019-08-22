import React from 'react';
import './login.css';
import EOSIcon from "../../assets/images/EOS.svg";

const Login = ({ handleSubmit, email, password, error, handleChange}) =>{

    return(
        <body className="nk-body body-wider bg-dark page-loaded chrome no-touch">
        <div className="nk-wrap">
        
            <main className="nk-pages nk-pages-centered bg-theme">
                <div className="ath-container">
                    <div className="ath-header text-center">
                        <a href="./" className="ath-logo"><img src={EOSIcon} alt="logo" className="signlog"/></a>
                    </div>
                    <div className="ath-body">
                        <h5 className="ath-heading title">Welcome Back!
                        <small class="tc-default">signin to your Earnathon Account</small>
                        </h5>
                        <p style={{ color: 'red'}}>{error}</p>
                        <form action="./">
                            <div className="field-item">
                                <div className="field-wrap">
                                    <input
                                      type="text"
                                      name="email"
                                      className="input-bordered"
                                      placeholder="Your Email"
                                      value={ email }
                                      onChange={ handleChange }
                                    />
                                </div>
                            </div>
                            <div className="field-item">
                                <div className="field-wrap">
                                    <input
                                      type="password"
                                      name="password"
                                      className="input-bordered"
                                      placeholder="Password"
                                      value={ password }
                                      onChange={ handleChange }
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pdb-r">
                                <div className="field-item pb-0">
                                    <input className="input-checkbox" id="remember-me-2" type="checkbox"/>
                                    <label htmlFor="remember-me-2">Remember Me</label>
                                </div>
                                <div className="forget-link fz-6">
                                    <a href="page-reset.html">Forgot password?</a>
                                </div>
                            </div>
                            <button
                              className="btn btn-primary btn-block btn-md"
                              onClick={ handleSubmit }
                            >Sign In</button>
                        </form>
                        
                    </div>
                    <div className="ath-note text-center tc-light">
                        Don’t have an account? <a href="/signup"> <strong>Sign up here</strong></a>
                    </div>
                </div>
            </main>
        
        </div>
            
    </body>
    )
}
export default Login;