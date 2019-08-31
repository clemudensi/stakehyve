import React from 'react';
import './login.css';
import EOSIcon from '../../assets/images/EOS.svg';
import PropTypes from 'prop-types';
// import "./style.css";
// import "./theme.css";
// // import "./vendor.bundle.css";

const ForgotPassForm = ({ email, error, response, handleChange, handleSubmit }) =>{
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
                <small className="tc-default">signin to your Earnathon Account</small>
              </h5>
              {
                response ?
                  <p style={{ color: 'green'}}>{response}</p> :
                  null
              }
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
                        Don’t have an account? <a href="/signup"> <strong>Sign up here</strong></a><br/>
                        Have an account? <a href="/login"> <strong>Sign in here</strong></a>
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
  handleSubmit: PropTypes.func,
};

export default ForgotPassForm;