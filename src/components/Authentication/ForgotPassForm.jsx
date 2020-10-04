import React from 'react';
import './login.css';
import EOSIcon from '../../assets/images/EOS.svg';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
// import "./style.css"; import "./theme.css"; // import "./vendor.bundle.css";

const ForgotPassForm = ({email, error, response, handleChange, handleForgotPass}) => {
    return (

        <body className="nk-body body-wider bg-dark page-loaded chrome no-touch">
            <div className="nk-wrap">

                <main className="nk-pages nk-pages-centered bg-theme bg-pic">
                    <div className="ath-container">
                        <div className="ath-header text-center">
                            <Link to="/" className="ath-logo"><img src={EOSIcon} alt="logo" className="signlog"/></Link>
                        </div>
                        <div className="ath-body">
                            <h5 className="ath-heading title">Reset Password
                                <small className="tc-default">reset your account</small>
                            </h5>
                            {response
                                ? <p
                                        style={{
                                        color: 'green'
                                    }}>{response}</p>
                                : null
}
                            <p
                                style={{
                                color: 'red'
                            }}>{error}</p>
                            <form onSubmit={handleForgotPass}>
                                <div className="field-item">
                                <label>Email</label>
                                    <div className="field-wrap">
                                        <input
                                            type="email"
                                            className="input-bordered"
                                            placeholder="Your Email"
                                            name="email"
                                            value={email}
                                            onChange={handleChange}/>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-block btn-md" type="submit">
                                    Reset Password
                                </button>
                            </form>
                            <div className="ath-note text-center tc-light">
                            Don’t have an account?
                            <Link to="/signup">
                                <strong>Sign up here</strong>
                            </Link><br/>
                            Have an account?
                            <Link to="/signin">
                                <strong>Sign in here</strong>
                            </Link>
                        </div>

                        </div>
                        
                    </div>
                </main>
            </div>
        </body>
    );
};

ForgotPassForm.propTypes = {
    email: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
    error: PropTypes.string,
    response: PropTypes.string,
    handleForgotPass: PropTypes.func
};

export default ForgotPassForm;