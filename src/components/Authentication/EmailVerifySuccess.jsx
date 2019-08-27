import React from 'react';
import './login.css';
import EOSIcon from '../../assets/images/EOS.svg';
import Folder from '../../assets/images/folder.svg';
import { NavLink } from 'react-router-dom';
// import "./style.css";
// import "./theme.css";
// // import "./vendor.bundle.css";

const Login = () => {
  return(
    <body className="nk-body body-wider bg-dark page-loaded chrome no-touch">
      <div className="nk-wrap">
        
        <main className="nk-pages nk-pages-centered bg-theme">
          <div className="ath-container">
            <div className="ath-header text-center">
              <a href="./" className="ath-logo"><img src={ EOSIcon } alt="logo" className="signlog"/></a>
            </div>
            <div className="ath-body">
              <img src={ Folder } alt="verify" className="adj-size"/>
              <div>
                <h6 className="ath-heading title ath-tite">One more step</h6>
                <p className="txtc">Email was successfully verified </p>
              </div>
                        
              <button className="btn btn-primary btn-block btn-md mTop-40">
                <NavLink to={'/login'}>Login to continue</NavLink>
              </button>
                       
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};
export default Login;