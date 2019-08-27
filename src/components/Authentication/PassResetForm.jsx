import React from 'react';
import './login.css';
import EOSIcon from "../../assets/images/EOS.svg";
import { NavLink } from 'react-router-dom';
import { fb } from '../../utils/firebase';

const PassResetForm = ({ handleSubmit, email, password, error, history, handleChange}) =>{

  return(
    <body className="nk-body body-wider bg-dark page-loaded chrome no-touch">
    <div className="nk-wrap">

      <main className="nk-pages nk-pages-centered bg-theme">
        <div className="ath-container">
          <div className="ath-header text-center">
            <a href="./" className="ath-logo"><img src={EOSIcon} alt="logo" className="signlog"/></a>
          </div>
          <div className="ath-body">
            <h5 className="ath-heading title">Reset Password
            </h5>
            {
              error === 'Password reset successful, verify email to continue' ?
                <p style={{ color: 'red'}}>{error} <br/>
                  {
                    <NavLink onClick={()=>fb.doEmailVerify(email, history)}>
                      Click here to send verification email</NavLink>
                  }
                </p> :
                <p style={{ color: 'red'}}>{error}</p>
            }
            <form onSubmit={handleSubmit}>
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
              </div>
              <button
                className="btn btn-primary btn-block btn-md"
                type="submit"
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
};
export default PassResetForm;