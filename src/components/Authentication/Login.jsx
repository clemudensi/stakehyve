import React from 'react';
import './login.css';
// import EOSIcon from '../../assets/images/EOS.svg';
import { fb } from '../../utils/firebase';
import { NavLink, Link} from 'react-router-dom';
import PropTypes from 'prop-types';


const Login = ({ handleLogin, email, password, error, handleChange, history}) => {

  return(
    <div className="nk-body body-wider bg-dark page-loaded chrome no-touch">
      <div className="nk-wrap">
        
        <main className="nk-pages nk-pages-centered bg-theme bg-pic">
          <div className="ath-container">
            {/*<div className="ath-header text-center">*/}
            {/*  <Link to="/" className="ath-logo"><img src={EOSIcon} alt="logo" className="signlog"/></Link>*/}
            {/*</div>*/}
            <div className="ath-body">
              <h5 className="ath-heading title">Welcome Back!
                <small className="tc-default">signin to StakeHyve</small>
              </h5>
              {
                error === 'Email has not been verified' ?
                  <p style={{ color: 'red'}}>{error} <br/>
                    {
                      <NavLink onClick={()=>fb.doEmailVerify(email, history)}>
                                  Click here to send verification email</NavLink>
                    }
                  </p> :
                  <p style={{ color: 'red'}}>{error}</p>
              }
              <form action="./">
                <div className="field-item">
                  <label>Email</label>
                  <div className="field-wrap">
                    <input
                      type="email"
                      name="email"
                      className="input-bordered"
                      placeholder="Your Email"
                      value={ email }
                      onChange={ handleChange }
                    />
                  </div>
                </div>
                <div className="field-item">
                  <label>Password</label>
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
                  {/* <div className="field-item pb-0">
                    <input className="input-checkbox" id="remember-me-2" type="checkbox"/>
                    <label htmlFor="remember-me-2">Remember Me</label>
                  </div> */}
                  <div className="forget-link fz-6">
                    <Link to="/forgot">Forgot password?</Link>
                  </div>
                </div>
                <button
                  className="btn btn-primary btn-block btn-md"
                  onClick={ handleLogin }
                >Sign In</button>
              </form>
              <div className="ath-note text-center tc-light">
                        Don’t have an account?  <Link to="/signup">
                  <strong>Sign up here</strong>
                </Link>
              </div>
                        
            </div>
           
          </div>
        </main>
        
      </div>
            
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  error: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func,
  history: PropTypes.object,
  handleLogin: PropTypes.func
};

export default Login;