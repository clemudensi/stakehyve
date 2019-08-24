import React from 'react';
import './login.css';
import EOSIcon from '../../assets/images/EOS.svg';
// import "./style.css";
// import "./theme.css";
// // import "./vendor.bundle.css";

const ForgotPassForm = ({ email, error, handleChange, handleSubmit }) =>{
    return(

        <body className="nk-body body-wider bg-dark page-loaded chrome no-touch">
            <div className="nk-wrap">
        
                <main className="nk-pages nk-pages-centered bg-theme">
                    <div className="ath-container">
                        <div className="ath-header text-center">
                            <a href="./" className="ath-logo"><img src={ EOSIcon } alt="logo" className="signlog"/></a>
                        </div>
                        <div className="ath-body">
                            <h5 className="ath-heading title">Reset Password
                                <small class="tc-default">signin to your Earnathon Account</small>
                            </h5>
                            <p style={{ color: 'red'}}>{error}</p>
                            <form onSubmit={handleSubmit}>
                                <div className="field-item">
                                    <div className="field-wrap">
                                        <input
                                          type="email"
                                          className="input-bordered"
                                          placeholder="Your Email"
                                          name="email"
                                          value={email}
                                          onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <button
                                  className="btn btn-primary btn-block btn-md"
                                  type="submit"
                                >
                                    Reset Password
                                </button>
                            </form>
                        
                        </div>
                        <div className="ath-note text-center tc-light">
                        Don’t have an account? <a href="page-register.html"> <strong>Sign up here</strong></a><br/>
                        Have an account? <a href="page-register.html"> <strong>Sign in here</strong></a>
                        </div>
                    </div>
                </main>
        
            </div>
            
        </body>
    )
}
export default ForgotPassForm;