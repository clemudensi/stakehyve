import React from 'react';
import './login.css';
import EOSIcon from '../../assets/images/EOS.svg';
import Folder from '../../assets/images/star.svg';
import { Link } from 'react-router-dom';
// import "./style.css";
// import "./theme.css";
// // import "./vendor.bundle.css";

const Login = () => {
  return(
    <body className="nk-body body-wider bg-dark page-loaded chrome no-touch">
      <div className="nk-wrap">
        
        <main className="nk-pages nk-pages-centered bg-theme bg-pic">
          <div className="ath-container">
            <div className="ath-header text-center">
             
            </div>
            <div className="ath-body">
              <img src={ Folder } alt="verify" className="adj-size"/>
              <div>
                <h6 className="ath-heading title ath-tite">Hurray!!</h6>
                <p className="txtc">Email was successfully verified </p>
              </div>
              <Link to='/signin'>          
              <button className="btn btn-primary btn-block btn-md mTop-40">
                 continue
              </button>
              </Link>
                       
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};
export default Login;